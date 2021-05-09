const Detail = ({content,toggleContent}) => {
    console.log('rerender Details')
    return (
        <div className="blog-details">
            <h2>{content.title}</h2>
            <div>{content.body}</div>
            <button onClick={toggleContent}>fermer</button> 
        </div>
    )
}
 
export default Detail;