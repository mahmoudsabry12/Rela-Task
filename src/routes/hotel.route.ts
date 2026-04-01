import { Router } from "express";
import { getHotels } from "../controller/hotel.controller";

const router = Router();

router.get("/", getHotels)
export default router