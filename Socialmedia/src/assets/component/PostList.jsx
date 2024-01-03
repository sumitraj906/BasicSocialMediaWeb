import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const PostList=()=>{
  const{postList,addInitialPosts} = useContext(PostListData);

   const handleGetPostClick=()=>{
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(data=>{
      addInitialPosts(data.posts);
    });
   };
    return(
    <>
    {postList.length===0 && (<WelcomeMessage onGetPostClick={handleGetPostClick}/>
    )}
    {postList.map((post)=>(
        <Post key={post.id} post={post}/>
    ))}

</>
 );   
}
export default PostList;