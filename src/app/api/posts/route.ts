import { Prisma, PrismaClient } from "@prisma/client";

export async function POST(req:Request) {
    const prisma=new PrismaClient()
    try{
        const {title, content} = await req.json();
        const NewPost=await prisma.post.create({
            data: {
                title, content
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