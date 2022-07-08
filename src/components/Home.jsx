/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase-config";
import "./Home.css";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="home">
      <h2 className="home__title">Blogs</h2>
      <br />
      <br />
      {postLists.map((post) => (
        <div className="blog__preview">
          <div className="left__part">
            <Link to={`/blogs/${post.id}`}>
              <h2 className="post__title">{post.title}</h2>
              <h2 className="post__author"> Written By {post.writer}</h2>
              <br />
            </Link>
          </div>
          <div className="right__part">
            {isAuth && post.writer === auth.currentUser.displayName && (
              <button
                className="post__button"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
