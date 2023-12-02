"use client";

import React, { ChangeEvent, FC, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Correct import statement

interface FormCommentProps {
  pId: string;
}

const FormComment: FC<FormCommentProps> = ({ pId }) => {
  const [comment, setComment] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim() != "") {
      try {
        const newComment = await axios.post("/api/comments", {
          postId: pId,
          text: comment,
        });
      } catch (error) {
        console.error();
      }
    }
  };

  return (
    <div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          add comment
        </label>
        <input
          className="w-full py-2 px-3 border border-gray-300 rounder-md focus:outline-none  focus:ring focus:border-blue-300"
          name="comment"
          onChange={handleChange}
          value={comment}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 rounded-md px-3 py-2 text-white disabled:bg-gray-500 focus:ring mt-4 "
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComment;
