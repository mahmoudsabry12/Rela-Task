import { Router } from "express";
import { getSupplierA } from "../controller/supplierA.controller";

const router = Router();

router.get("/", getSupplierA)
export default router