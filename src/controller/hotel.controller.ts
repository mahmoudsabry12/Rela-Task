import {Response ,Request} from "express"

export const getHotels = (req:Request,res:Response) => {
    res.send("Hotels")

}