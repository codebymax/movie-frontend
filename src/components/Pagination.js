import React from 'react';

const Pagination = props => {
    const nextPage = async e => {
        var cur = props.page
        await props.setPage(cur+1)
        props.update(props.screen)
    }

    const prevPage = async e => {
        var cur = props.page
        if (cur === 1) {
            return
        }
        await props.setPage(cur-1)
        props.update(props.screen)
    }

    if (props.page === -1) {
        return
      } else {
        return <p>Page: {props.page} <button onClick={prevPage}>Previous Page</button><button onClick={nextPage}>Next Page</button></p>
      }
}

export default Pagination;