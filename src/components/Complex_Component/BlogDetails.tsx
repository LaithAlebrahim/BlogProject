/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "./BlogDetails.css";

function BlogDetails() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [comment, setComment] = useState("");

  const id = window.location.pathname.split("/")[2];
  const post = postLists.filter((post) => post.id === id);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  const update = doc(collection(db, "posts"), id);

  const addComment = async () => {
    if (comment.length > 0) {
      const commentt = auth.currentUser.displayName + ": " + comment + "\n";

      updateDoc(update, { comments: [...post[0].comments, commentt] });
      setComment("");
    }
  };

  return (
    <div className="">
      {post.map((post) => {
        return (
          <>
            <div className="blog__details">
              <h2 className="post__title1">{post.title}</h2>
              <p className="post__text">{post.Body}</p>
            </div>
            <div className="post__bottom">
              <p className="post__author1">Written by {post.writer}</p>
              <br />
              <br />
              <br />
            </div>
          </>
        );
      })}
      <div className="comments">
        <h2 className="comments__title">Comments: </h2>
        {post.map((post) => {
          return (
            <div className="comment__preview">
              {post.comments.map((comment) => {
                return (
                  <div className="comment__preview__text">
                    <p>{comment}</p>
                  </div>
                );
              })}
            </div>
          );
        })}

        <form>
          <div>
            <textarea
              maxLength={390}
              placeholder="Write your comment here"
              className="comment__textarea"
              
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </form>
        <button className="comment__button" onClick={addComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
