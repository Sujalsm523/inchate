import React from "react";
import { useContext } from "react";
import { PostList } from "../store/Post-store";
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mypost">
      <div className="col">
        <div className="card h-100">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">
              {post.title}{" "}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <MdDelete />
              </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="badge rounded-pill text-bg-primary"
                style={{ margin: "3px" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Reacted by {post.reactions} users!!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
