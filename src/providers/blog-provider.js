import {createContext, useEffect, useState} from "react";

// Create special context Object
export const BlogContext = createContext(null);

export function BlogProvider({children}) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(json => setPosts(json))
  // }, []);

  const addPost = (post) => {
    setPosts([...posts, post]);
    // console.log(post);
  }

  const deletePost = (id) => {
    const newPosts = [...posts];
    setPosts(newPosts.filter((post) => post.id !== id))
  }

  const toggleEditMode = (id) => {
    const newPosts = [...posts].map((post) => post.id === id ? {...post, isEditMode: true} : {...post, isEditMode: false});
    setPosts(newPosts);
  }

  const handleSaveEdit = (post) => {
    const newPosts = [...posts].map((pst) => pst.id === post.id ? {...post} : {...pst});
    setPosts(newPosts)
  }

  const value = { posts, addPost, deletePost, toggleEditMode, handleSaveEdit };

  return (
      <BlogContext.Provider value={value}>
        {children}
      </BlogContext.Provider>
  )
}