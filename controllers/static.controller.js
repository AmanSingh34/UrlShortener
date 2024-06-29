import { url } from "../models/url.model.js"

export const RenderHome = async (req,res)=>{
    const allUrl  = await url.find({})

    return res.render("Home",{
        URL:allUrl
    })
}