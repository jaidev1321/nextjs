import { NextResponse } from "next/server";

export default function Middleware(request){
    // if(request.nextUrl.pathname != "/login"){
        return NextResponse.redirect(new URL("/login" , request.url));
    // }
}


export const config = {
    matcher:"/about/:path*" // uses for all url related to about or about/*
    // matcher:"/about/:path+" // if want to exclude /about page from this  middlware and only apply the condition of middleware to sub url of about then use "+" sign
}