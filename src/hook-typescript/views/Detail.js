import React from 'react'
const Detail = React.memo((content,toggleContent) => {
    console.log('rerender Details')
    return (
        <div className="blog-details">
            <h2>{content}</h2>
            <div>{content}</div>
            <button onClick={toggleContent}>fermer</button> 
        </div>
    )
})
 
export default Detail;