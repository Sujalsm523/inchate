import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as Data } from "../store/Post-store";
import { useEffect } from "react";

export default function PostList() {
  const { postList, initialposts } = useContext(Data);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => initialposts(data.posts));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <div className="my1-container">
        <h1>For You Page</h1>
      </div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
