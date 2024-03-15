import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/Post-store";

export default function CreatePost() {
  const { addPost } = useContext(PostList);

  const useridelement = useRef();
  const usertitleelement = useRef();
  const userBodyelement = useRef();
  const userreactionselement = useRef();
  const usertagselement = useRef();

  const handleonsubmit = (event) => {
    event.preventDefault();
    const userId = useridelement.current.value;
    const userTitle = usertitleelement.current.value;
    const userBody = userBodyelement.current.value;
    const userReact = userreactionselement.current.value;
    const usertags = usertagselement.current.value.split(" ");

    useridelement.current.value = "";
    usertitleelement.current.value = "";
    userBodyelement.current.value = "";
    userreactionselement.current.value = "";
    usertagselement.current.value = "";

    addPost(userId, userTitle, userBody, userReact, usertags);
  };
  return (
    <form className="myform" onSubmit={handleonsubmit}>
      <h1 style={{ margin: "10px" }}>Create Post</h1>
      <div className="mb-3">
        <label htmlFor="user" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={useridelement}
          className="form-control"
          id="user"
          placeholder="Enter your userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={usertitleelement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Describe Your Post
        </label>
        <textarea
          type="textarea"
          ref={userBodyelement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Describe here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter No Of reactions
        </label>
        <input
          type="nymber"
          ref={userreactionselement}
          className="form-control"
          id="reactions"
          placeholder="Reactions "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={usertagselement}
          className="form-control"
          id="tags"
          placeholder="Enter hashtags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
