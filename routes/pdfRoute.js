const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");

// Define routes for PDF generation
router.post("/generatepdf", pdfController.generatePDF);

module.exports = router;
