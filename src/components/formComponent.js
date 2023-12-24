import React from "react";
import {useForm} from "react-hook-form";

const FormComponent = (props) => {
  const { register,getValues, handleSubmit, formState } = useForm();

  const handleNewPostSubmit = (data) => {
    props.onHandleSave({
        id: singlePost.id,
       title: data.title,
       body: data.content,
       date:data.date,
       isEditMode: false,
     })
  }


  return (
    <form className="form" onSubmit={handleSubmit(handleNewPostSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" {...register("title", { required: true })} />
        {formState.errors.title && (
          <span className="text-danger">
            cant send a post without title!!!! please enter a title
          </span>
        )}
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <textarea
          {...register("content", {
            minLength: 5,
            pattern: /^[a-zA-Z\s]+$/,
          })}
        ></textarea>
        {formState.errors.content && (
          <span className="text-danger">
            content should be more then 5 chars and include only english letters
          </span>
        )}
      </div>

      <div>
        <label>Date</label>
        <input type="date" {...register("date", { required: true })} />
      </div>

      <div>
        <label htmlFor="accept terms">accept</label>
        <input type="checkbox" {...register("isTermsAccepted")} />
      </div>

      <button type="submit">Save</button>
      <button type="click" onClick={() => toggleEditMode(singlePost.id)}>
        cancel
      </button>
    </form>
  );
};

export default FormComponent;
