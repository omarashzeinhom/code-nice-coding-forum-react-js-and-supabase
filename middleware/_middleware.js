import {NextResponse, NextRequest} from "next/server";
export async function middleWare(req, ev){
    const {pathname} =req.nextUrl 
    if(pathname == "/"){
        return NextResponse.redirect("/");
    }
    return NextResponse.next();
}