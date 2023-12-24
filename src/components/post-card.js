import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../providers/blog-provider";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form";

export function PostCard({ singlePost }) {
  const { deletePost, toggleEditMode, handleSaveEdit, handleNoEdit } =
    useContext(BlogContext);
  const { register,  handleSubmit, formState } = useForm();

  const handleNewPostSubmit = (data) => {
    handleSaveEdit({
      id: singlePost.id,
      title: data.title,
      body: data.content,
      date: data.date,
      isEditMode: false,
    });
  };

  return (
    <div className="post-container">
      {singlePost.isEditMode ? (
        <form
          className="form-container"
          onSubmit={handleSubmit(handleNewPostSubmit)}
        >
          <div className="input-wrapper">
            <label htmlFor="title">Title</label>
            <input type="text" {...register("title", { required: true })} />
            {formState.errors.title && (
              <span className="text-danger">
                cant send a post without title!!!! please enter a title
              </span>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="content">Content</label>
            <textarea
              {...register("content", {
                minLength: 5,
                pattern: /^[a-zA-Z\s\p{P}]+$/u,
              })}
            ></textarea>
            {formState.errors.content && (
              <span className="text-danger">
                content should be more then 5 chars and include only english
                letters
              </span>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="date">Date</label>
            <input type="date" {...register("date", { required: true })} />
            {formState.errors.date && <span className="text-danger">fill date please</span>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="accept terms">accept</label>
            <input type="checkbox" {...register ('accept terms',{required:true})} />
          </div>

          <button type="submit">Save</button>
          <button type="click" onClick={handleNoEdit}>
            cancel
          </button>
        </form>
      ) : (
        <div className="card-wr">
          <div className="card-header">{singlePost.title}</div>
          <div className="card-body">{singlePost.body}</div>
          <div className="card-date">{singlePost.date}</div>
          <div className="bottom-area">
            <Link to={`/posts/${singlePost.id}`} className="btn btn-primary">
              Read more
            </Link>
            <div className="icons-wrapper">
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
          </div>
        </div>
      )}
    </div>
  );
}
