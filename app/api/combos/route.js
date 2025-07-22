import { dbConnect } from "@/lib/mongodb";
import Combo from "@/models/Combo";
import { NextResponse } from "next/server";
export async function GET(req){
await dbConnect()
try {
    const combos = await Combo.find()
    return NextResponse.json({msg:"productos encontrados",combos}, {status:200})
} catch (error) {
    return NextResponse.json({msg:"Error al obtener la hamburguesa", error: error.message },{ status:500})
}
}
export async function POST(req){
    await dbConnect()
    const body = await req.json()
    const combo = Combo.create(body);
    return NextResponse.json({msg:'hamburguesa creada con exito', combo}, {status:201})
}