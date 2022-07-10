/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import styles from "./Create.module.css";

function Create() {
  const [title, setTitle] = useState("");

  const [Body, setBody] = useState("");

  const [isSubmmiting, setIsSubmmiting] = useState(false);

  const postCollectionRef = collection(db, "posts");

  const { register, handleSubmit,formState: { errors } } = useForm();

  const onSubmit = async () => {
    setIsSubmmiting(true);
  
      setIsSubmmiting(true);
      await addDoc(postCollectionRef, {
        title,
        Body,
        writer: auth.currentUser.displayName,
        comments: [],
        id: auth.currentUser.uid.toUpperCase(),
      });

      window.location.pathname = "/blogproject4";
    
  };

  return (
    <div className={styles.create}>
      <h2 className={styles.create__title}>Add New Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.blog__title}>
          <input
            className={styles.blog__title__text}
            type="text"
            required
            value={title}
            {...register("Title", { required: true })}
            
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Wrtite your title here"
          />
               {errors.Title && <span>This field is required</span>}
        </div>
        <div className={styles.blog__text}>
          <textarea
            className={styles.blog__text__text}
            required
            value={Body}
            {...register("Body", { required: true })}
            placeholder="Write here blog's text"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
            {errors.Body && <span>This field is required</span>}
        </div>
        <div className={styles.blog__bottom}>
        {isSubmmiting ? (
          <button className={styles.blog__button} disabled>
            Submitting...
          </button>
        ) : (
          <button
            className={styles.blog__button}
            type="submit"
          >
            Submit
          </button>
        )}
      </div>
      </form>
      
    </div>
  );
}

export default Create;
