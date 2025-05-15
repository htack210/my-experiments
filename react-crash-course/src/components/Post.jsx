function Post({name, body}) {
    
    return(
        <div className='post'>
            <p>{name}</p>
            <p>{body}</p>
        </div>
    )
}

export default Post;