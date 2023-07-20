import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = 
    req.cookies.get('sessionId') ?
    req.cookies.get('sessionId').value
    : null
    let id = 
    req.cookies.get('userId') ?
    req.cookies.get('userId').value
    : null
    let url = req.url;
    if(!cook && url.includes(`/users/`)){
        return NextResponse.redirect("https://esback.vercel.app");
    }
    else if((cook && url === "https://esback.vercel.app") || (cook && url ==="https://esback.vercel.app/User")){
        return NextResponse.redirect(`https://esback.vercel.app/users/${id}`)
    }
}