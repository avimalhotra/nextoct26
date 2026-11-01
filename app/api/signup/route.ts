import { NextResponse } from "next/server";

export async function POST(request){
    try{
          const body=await request.json();          
          return NextResponse.json({message:`Thanks ${body.name}`});
    }
    catch(err){
          return NextResponse.json({error:"POST ERROR"},{status:400});
    }
}