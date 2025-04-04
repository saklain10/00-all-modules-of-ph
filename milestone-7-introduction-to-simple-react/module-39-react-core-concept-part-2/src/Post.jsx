export default function Post({post}){
    // const {body} = post
   return(
    <div className="card1">
    {/* <p>{body}</p> */}
    <h5 className="card2">{post.title}</h5>
    <p className="card3">{post.body}</p>
    </div>
   ) 
}