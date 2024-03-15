import { useContext } from "react";
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  initialposts: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);

const PostListreducer = (currPost, action) => {
  let newPostList = currPost;
  if (action.type === "Delete_Post") {
    newPostList = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currPost];
  } else if (action.type === "Initial_Posts") {
    newPostList = action.payload.data;
  }

  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListreducer, []);

  const initialposts = (data) => {
    dispatchPostList({
      type: "Initial_Posts",
      payload: { data },
    });
  };
  const addPost = (userId, userTitle, userBody, userReact, usertags) => {
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        userid: userId,
        title: userTitle,
        body: userBody,
        reactions: userReact,
        tags: usertags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, initialposts }}>
      {children}
    </PostList.Provider>
  );
};

let DEFAULT_POST_LIST = [
  {
    id: "1",

    title: "MY First Post",
    body: "This is my first post here on InChat.Lke Share Follow",
    reactions: 4,
    tags: ["first", "post", "inchat"],
  },
  {
    id: "2",
    title: "MY First Post",
    body: "This is my first post here on InChat.Lke Share Follow",
    reactions: 4,
    tags: ["first", "post", "inchat"],
  },
];

export default PostListProvider;
