"use client";

import { FormData } from "@/types/blogs";
import { Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import React from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useRouter } from "next/navigation";

export const NewPost = () => {
  const [formData, setformData] = useState<FormData>({
    title: "",
    content: "",
  });

  const router = useRouter();

  const handleText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/posts", formData);

      if (response.status === 200) {
        router.push(`/blogs/${response.data.NewPost.id}`);
      }
    } catch (error) {
      console.error(error);
    }
    console.log("form submitted");
  };
  return (
    <form className="max-w-mdm mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-300 rounder-md focus:outline-none  focus:ring focus:border-blue-300"
          placeholder="enter the title "
          name="title"
          value={formData.title}
          onChange={handleText}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          className="w-full py-2 px-3 border border-gray-300 rounder-md focus:outline-none  focus:ring focus:border-blue-300"
          name="content"
          placeholder="enter blog"
          value={formData.content}
          onChange={handleText}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 rounded-md px-3 py-2 text-white disabled:bg-gray-500 focus:ring "
      >
        Submit
      </button>
    </form>
  );
};
