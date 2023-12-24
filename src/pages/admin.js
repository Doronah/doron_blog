import {useContext, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {AuthContext} from "../providers/auth-provider";
import {useForm} from "react-hook-form";
import "./admin.css";

export function Admin() {

  const {addPost} = useContext(BlogContext);
  const {user} = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm();
// check connection 
  if(!user) {
    return <p>You must sign in first!</p>
  }

  const handleNewPostSubmit = (data) => {
    addPost({
        id:Math.floor(Math.random() * 1000000000000000000000),
       title: data.title,
       body: data.content,
       isEditMode: false,
       date:data.date,
     })
  }

  return (
      <div className="admin-container">
        <h1 className="admin-header">Admin</h1>
        <form className='form-container' onSubmit={handleSubmit(handleNewPostSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="title">Title</label>
            <input type="text" {...register('title', {required:true})}/>
            {formState.errors.title && <span className="text-danger">cant send a post without title!!!! please enter a title</span>}
          </div>

          {/* only english letters and at least 5 letters */}
          <div className="input-wrapper">
            <label htmlFor="content">Content</label>
            <textarea {...register('content', {minLength: 5, pattern:/^[a-zA-Z\s\p{P}]+$/u})}></textarea>
            {formState.errors.content && <span className="text-danger">content should be more then 5 chars and include only english letters</span>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="date">Date</label>
            <input type="date"  {...register('date', {required:true})}/>
            {formState.errors.date && <span className="text-danger">fill date please</span>}
          </div>


          <div className="input-wrapper input-checkbox">
            <label htmlFor="accept terms">accept</label>
            <input type="checkbox" {...register ('accept terms',{required:true})}/>
          </div>


          <button className="button-submit" type="submit">Create</button>
        </form>
      </div>
  );
}