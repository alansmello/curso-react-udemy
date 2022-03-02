

function PostCard({title, id, body, cover }){
  
return(
<div className="post">
            <img src={cover} alt={title} />
          <div key = {id} className = "posts-content">
            <h2>{title}</h2>
            <p>{body}</p>

          </div>
          </div>
    )
  }
export default PostCard;