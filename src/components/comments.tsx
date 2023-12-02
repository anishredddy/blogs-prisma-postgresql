import React, { FC } from "react";
import { PrismaClient } from "@prisma/client";
interface commentProps {
  pId: string;
}
export const Comments: FC<commentProps> = async ({ pId }) => {
  const prisma = new PrismaClient();

  const comment = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      postId: pId,
    },
  });
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {comment.map((c) => (
          <li className="mb-4 bg-slate-300 p-2">
            <div className="flex items-center mb-2">
              <div className="text-gray-500">
                {c.createdAt.toLocaleDateString()}
              </div>
            </div>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
