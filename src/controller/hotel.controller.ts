import { Request, Response } from "express";
import { fetchHotels } from "../services/hotel.service";

export const getHotels = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string | undefined;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await fetchHotels(city, page, limit); 
    res.json(result); 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch hotels",
    });
  }
};