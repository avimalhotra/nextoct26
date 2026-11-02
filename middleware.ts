import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest){
     
          console.log(`hello middleware ${new Date()}`);
          NextResponse.next();
   
    
}