import {useParams} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import {BlogContext} from "../providers/blog-provider";

export function PostPage() {
  const { id } = useParams();
  const {posts} = useContext(BlogContext);
  const [post, setPost] = useState();


  useEffect(() => {
    const pst = posts.find((element)=>element.id===Number(id));
    setPost(pst);
 
  }, []);

  return (
      <div className='container'>
        {post ? (
            <div>
              <h1>{post.title}</h1>
              <p>
                {post.body}
              </p>
            </div>
          ) : (
            <div className="spinner-border"
                 style={{width: '3rem', height: '3rem',}}
                 role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        )}
      </div>
  )
}