import { Comments } from "@/components/comments";
import FormComment from "@/components/formComment";
import React, { FC } from "react";
import { PrismaClient } from "@prisma/client";

interface BlogDetailProps {
  params: {
    id: string;
  };
}
const BlogIndivisualPage: FC<BlogDetailProps> = async ({ params }) => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      {posts ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{posts.title}</h1>
          <div className="mt-4">{posts.content}</div>
          <Comments pId={posts.id} />
          <FormComment pId={posts.id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogIndivisualPage;
