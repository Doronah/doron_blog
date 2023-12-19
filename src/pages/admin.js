import {useContext, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {AuthContext} from "../providers/auth-provider";
import {useForm} from "react-hook-form";
export function Admin() {

  const {addPost} = useContext(BlogContext);
  const {user} = useContext(AuthContext);
  const {previewImage, setPreviewImage} = useState(null);

  const { register,getValues, handleSubmit, formState } = useForm();

  if(!user) {
    return <p>You must sign in first!</p>
  }

  const handleNewPostSubmit = (data) => {
    addPost({
        id:Math.floor(Math.random() * 1000000000000000000000),
       title: data.title,
       body: data.content,
       isEditMode: false,
     })
  }






  return (
      <div>
        <h1>Admin</h1>

        <input type="text" />

        <form className='form' onSubmit={handleSubmit(handleNewPostSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" {...register('title', {required:true})}/>
            {formState.errors.title && <span className="text-danger">cant send a post without title!!!! please enter a title</span>}
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <textarea {...register('content', {minLength: 5, pattern:/^[a-zA-Z\s]+$/,})}></textarea>
            {formState.errors.content && <span className="text-danger">content should be more then 5 chars and include only english letters</span>}
          </div>

          <div>
            <label>Date</label>
            <input type="date" {...register('createdAt')} />
          </div>


          <div>
            <label htmlFor="accept terms">accept</label>
            <input type="checkbox" {...register('isTermsAccepted')}/>
          </div>


          <button type="submit">Create</button>
        </form>
      </div>
  );
}