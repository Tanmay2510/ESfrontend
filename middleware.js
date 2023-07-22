import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = 
    req.cookies.get('sessionId') ?
    req.cookies.get('sessionId').value
    : null
    console.log(req.headers.get('referer'))
    let id = 
    req.cookies.get('userId') ?
    req.cookies.get('userId').value
    : null
    let url = req.url;

    if(!cook && url.includes(`/users/`)){
        return NextResponse.redirect("https://esionn.netlify.app");
    }
    else if((cook && url === "https://esionn.netlify.app") || (cook && url ==="https://esionn.netlify.app/User")){
        return NextResponse.redirect(`https://esionn.netlify.app/users/${id}`)
    }
}