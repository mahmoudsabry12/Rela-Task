import { Router } from "express";
import { getSupplierB } from "../controller/supplierB.controller";

const router = Router();

router.get("/", getSupplierB)
export default router