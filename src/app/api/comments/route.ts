import { Prisma, PrismaClient } from "@prisma/client";

export async function POST(req:Request) {
    const prisma=new PrismaClient()
    try{
        const {postId, text} = await req.json();
        const NewPost=await prisma.comment.create({
            data: {
                text, postId
            }
        })

        return Response.json({
            NewPost
        },{status: 200})
    }   
    catch(error){
        console.error(error);
        
    }
    finally{
        prisma.$disconnect()
    }
}