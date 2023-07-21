import { NextResponse } from "next/server";
export default function middleware(req,res){
    let cook = 
    req.cookies.get('sessionId') ?
    req.cookies.get('sessionId').value
    : null
    let locId = localStorage.getItem('userId')
    let id = 
    req.cookies.get('userId') ?
    req.cookies.get('userId').value
    : null
    let url = req.url;
    if(!locId && url.includes(`/users/`)){
        return NextResponse.redirect("https://esionn.netlify.app");
    }
    else if((locId && url === "https://esionn.netlify.app") || (locId && url ==="https://esionn.netlify.app/User")){
        return NextResponse.redirect(`https://esionn.netlify.app/users/${locId}`)
    }
}