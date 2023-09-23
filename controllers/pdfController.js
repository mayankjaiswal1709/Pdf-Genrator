const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const PDFSchema =require("../models/pdfModel")


exports.generatePDF = (req, res) => {
  try {
  
    const {
      version,
      PPostingdate,
      CAPLaboratory,
      procedure1,
      discription1,
      procedure2,
      discription2
      

    
    } =req.body;
  
    // Construct an absolute path to the HTML template using __dirname
    const templatePath = path.join(__dirname, "../template/template.html");

    // Read the HTML template
    const template = fs.readFileSync(templatePath, "utf-8");
   

    // PDF generation options
    const options = {
      format: "A4",
      orientation: "Portrait",
      border: "10mm",
    };

    // Data to be injected into the template
    const data = {
      version: version,
      PPostingdate : PPostingdate,
      CAPLaboratory:CAPLaboratory,
      procedure1:procedure1,
      discription1:discription1,
      procedure2:procedure2,
      discription2:discription2

    };

    // Construct an absolute path for the PDF output file
    const pdfPath = path.join(__dirname, "../pdfs/hellopdf.pdf");

    // PDF document configuration
    const document = {
      html: template,
      data,
      path: pdfPath, // Use the constructed absolute path
    };

    // Generate the PDF
    pdf.create(document, options)
      .then((result) => {
        console.log(result);
        

        // Send a response to the client with the PDF path or other data
        res.json({
           success: true,
          message: "PDF created successfully",
           pdfPath: document.path
           });
      })
      .catch((err) => {
        console.error(err);

        // Send an error response if PDF generation fails
        res.status(500).json({ 
          success: false, 
          message: "PDF generation failed", 
          error: err.message });
      });
  } catch (err) {
    console.error(err);

    // Send an error response if there's an issue reading the template file
    res.status(500).json({
       success: false,
       message: "Template file read error", 
       error: err.message });
  }
};


