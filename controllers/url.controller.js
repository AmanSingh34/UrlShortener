import { nanoid } from "nanoid"
import { url } from "../models/url.model.js";

export const generateShortId = async (req,res)=>{
    const body = req.body;
    const shortId = nanoid(8);

    if(!body.url) return res.status(400).json({error:"url required"})

    await url.create({
        shortId,
        redirectURL:body.url,
        visitHistory:[]
    })

    return res.status(200).json({shortId})

}

export const getUrl = async (req,res)=>{
    const shortId = req.params.shortId;
    const entryUrl = await url.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
            timestamps: Date.now()
        }
    }});
    return res.redirect(entryUrl.redirectURL)
}

export const getAnalytics = async (req,res)=>{
    const shortId = req.params.shortId;
    const result = await url.findOne({shortId});

    return res.status(200).json({totalClicks:result.visitHistory.length,analytics:result.visitHistory})
}