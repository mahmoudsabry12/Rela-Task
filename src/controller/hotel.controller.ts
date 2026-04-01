import { Request, Response } from "express";
import { fetchHotels } from "../services/hotel.service";

export const getHotels = async (req: Request, res: Response) => {
  try {
    const city = req.query.city as string | undefined;
    const result = await fetchHotels(city); 
    res.json(result); 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch hotels",
    });
  }
};