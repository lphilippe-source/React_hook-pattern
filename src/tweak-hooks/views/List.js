import React from 'react'

const List = React.memo(({ list, onClick, deleteButton }) => {
    console.log('rerender List')
    return (
        <div onClick={() => onClick(list)} className="blog-preview">
            <h2 >{list.name}</h2>
            <p>Written by {list.body}</p>
            <button onClick={() => deleteButton(list.id)}>Delete</button>
        </div>
    )
})

export default List