/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase-config";
import styles from "./Home.module.css";

const Home = ({ isAuth }: { isAuth: boolean | string }) => {
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
    <div className={styles.home}>
      <h2 className={styles.home__title}>Our Blogs</h2>
      <br />
      <br />
      {postLists.map((post) => (
        <div className={styles.blog__preview}>
          <div className={styles.left__part}>
            <Link to={`/blogs/${post.id}`}>
              <h2 className={styles.post__title}>{post.title}</h2>
              <h2 className={styles.post__author}> Written By {post.writer}</h2>
              <br />
            </Link>
          </div>
          <div className={styles.right__part}>
            {isAuth && post.writer === auth.currentUser.displayName && (
              <button
                className={styles.post__button}
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
