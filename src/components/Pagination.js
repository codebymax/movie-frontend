import React from 'react';

const Pagination = props => {
    const nextPage = e => {
        var cur = props.page
        props.setPage(cur+1)
        props.update()
    }

    const prevPage = e => {
        var cur = props.page
        if (cur === 1) {
            return
        }
        props.setPage(cur-1)
        props.update()
    }

    if (props.page === -1) {
        return
      } else {
        return <p>Page: {props.page} <button onClick={prevPage}>Previous Page</button><button onClick={nextPage}>Next Page</button></p>
      }
}

export default Pagination;