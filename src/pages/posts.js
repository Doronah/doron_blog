import {PostLIst} from "../components/post-list";
import {useContext, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {PostCard} from "../components/post-card";


export function Posts() {
  const {posts} = useContext(BlogContext);
  const [query, setQuery] = useState('');

  const handleUserInput = (evt) => {
    setQuery(evt.target.value);
  }


  // TODO: example of putting the filter inside the component body
  // const filteredPosts = () => {
  //   const lowerQuery = query.toLowerCase();
  //   return posts.filter(post => post.title.toLowerCase().includes(lowerQuery));
  // }

  return (
      <div>
        <h2>Posts: {posts.length}</h2>
        <p>Here is the list of my posts!</p>
        <input onChange={handleUserInput} className='form-control-lg'/>
        {/* <pre>{query}</pre> */}
        <PostLIst>
          {/* Example of putting filter and map logic inside JSX */}
          { posts
              .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
              .map((post) => <PostCard key={post.id} singlePost={post}/>)
          }
        </PostLIst>
        <button>load more</button>
      </div>
  )
}