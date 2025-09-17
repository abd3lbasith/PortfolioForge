import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "client", "public", "resume.pdf");
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Basith_Abdul_Resume.pdf"');
      
      res.sendFile(resumePath, (err) => {
        if (err) {
          console.error("Error serving resume:", err);
          res.status(404).json({ message: "Resume not found" });
        }
      });
    } catch (error) {
      console.error("Error in resume download:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form endpoint (placeholder for future implementation)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // TODO: Implement email sending service (e.g., SendGrid, Nodemailer)
      // For now, just log the contact form data
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
