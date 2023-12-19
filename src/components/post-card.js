import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../providers/blog-provider";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {useForm} from "react-hook-form";

export function PostCard({ singlePost }) {
  const { deletePost, toggleEditMode,handleSaveEdit } = useContext(BlogContext);
  const { register,getValues, handleSubmit, formState } = useForm();

  const handleNewPostSubmit = (data) => {
    handleSaveEdit({
        id: singlePost.id,
       title: data.title,
       body: data.content,
       isEditMode: false,
     })
  }

  return (
    <div className="card">
      {singlePost.isEditMode ? (
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
                content should be more then 5 chars and include only english
                letters
              </span>
            )}
          </div>

          <div>
            <label>Date</label>
            <input type="date" {...register("createdAt")} />
          </div>

          <div>
            <label htmlFor="accept terms">accept</label>
            <input type="checkbox" {...register("isTermsAccepted")} />
          </div>

          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="card-wrapper">
          <div className="card-header">{singlePost.title}</div>
          <div className="card-body">{singlePost.body}</div>
          <Link to={`/posts/${singlePost.id}`} className="btn btn-primary">
            Read more
          </Link>
          <MdDeleteForever
            className="btn-delete"
            onClick={() => deletePost(singlePost.id)}
            style={{ fontSize: "28px" }}
          >
            Delete
          </MdDeleteForever>
          <FaRegEdit
            className="btn-edit"
            style={{ fontSize: "28px" }}
            onClick={() => toggleEditMode(singlePost.id)}
          >
            Edit
          </FaRegEdit>
        </div>
      )}
    </div>
  );
}
