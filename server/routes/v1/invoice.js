import express from "express";
import { createInvoice, getAllInvoices, getInvoiceById, updateInvoice, deleteInvoice, updateInvoicePayment } from "../../controller/invoice.js";

const router = express.Router();

router.post("/", createInvoice);
router.get("/", getAllInvoices);
router.get("/:id", getInvoiceById);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);
router.patch("/:id/payment", updateInvoicePayment);

export default router;
