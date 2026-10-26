import { NextResponse } from "next/server";

export async function GET(){;
     
     const data=[
          {name:"pulsar",type:"sports",price:150000},
          {name:"splendor",type:"commuter",price:80000},
          {name:"apache",type:"sports",price:120000},
          {name:"fazer",type:"sports",price:180000},
          {name:"himalayan",type:"adventure",price:250000},
          {name:"dominar",type:"sports",price:200000},
          {name:"rouser",type:"sports",price:130000},
          {name:"classic 350",type:"cruiser",price:200000},
          {name:"bullet 350",type:"cruiser",price:220000},
          {name:"meteor 350",type:"cruiser",price:250000},
          {name:"interceptor 650",type:"cruiser",price:400000},
          {name:"continental gt 650",type:"sports cruiser",price:450000}
     ];

     return NextResponse.json(data)
}    