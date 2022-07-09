/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import styles from "./Create.module.css";

function Create() {
  const [title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [isSubmmiting, setIsSubmmiting] = useState(false);
  const postCollectionRef = collection(db, "posts");
  const creatpost = async () => {
    if (title.length > 0 && Body.length > 0) {
      setIsSubmmiting(true);
      await addDoc(postCollectionRef, {
        title,
        Body,
        writer: auth.currentUser.displayName,
        comments: [],
        id: auth.currentUser.uid.toUpperCase(),
      });

      window.location.pathname = "/blogproject4";
    }
  };

  return (
    <div className={styles.create}>
      <h2 className={styles.create__title}>Add New Blog</h2>
      <form>
        <div className={styles.blog__title}>
          <input
            className={styles.blog__title__text}
            type="text"
            required
            value={title}
            placeholder="Write here blog's title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.blog__text}>
          <textarea
            className={styles.blog__text__text}
            required
            value={Body}
            placeholder="Write here blog's text"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
      </form>
      <div className={styles.blog__bottom}>
        {isSubmmiting ? (
          <button className={styles.blog__button} disabled>
            Submitting...
          </button>
        ) : (
          <button className={styles.blog__button} onClick={creatpost}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Create;
