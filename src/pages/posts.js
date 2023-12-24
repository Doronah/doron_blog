import {PostLIst} from "../components/post-list";
import {useContext, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {PostCard} from "../components/post-card";
import "./posts.css"


export function Posts() {
  const {posts} = useContext(BlogContext);
  const [query, setQuery] = useState('');

  const handleUserInput = (evt) => {
    setQuery(evt.target.value);
  }


  return (
      <div className="posts-container">
        < h2 className="posts-title">Posts: {posts.length}</h2>
        <p className="posts-subtitle">Here is the list of my posts!</p>
        <input className="input-search form-control-lg" onChange={handleUserInput} placeholder="Search post..."/>
        <PostLIst>
          { posts
              .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
              .map((post) => <PostCard key={post.id} singlePost={post}/>)
          }
        </PostLIst>
      </div>
  )
}