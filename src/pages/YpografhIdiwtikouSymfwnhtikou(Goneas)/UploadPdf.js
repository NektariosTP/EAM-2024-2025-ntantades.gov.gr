import React, { useState, useEffect } from "react";
import "./UploadPdf.css";

export default function UploadPDF({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  // Load saved file from localStorage on mount
  useEffect(() => {
    const savedFile = localStorage.getItem("uploadedPDF");
    if (savedFile) {
      const parsedFile = JSON.parse(savedFile);
      setSelectedFile(parsedFile);
      setFileURL(parsedFile.url); // Αποθηκευμένο URL
      onUpload(true); // Inform that a file is already uploaded
    }
  }, [onUpload]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile({ name: file.name, type: file.type, url: fileUrl });
      setFileURL(fileUrl);
      localStorage.setItem(
        "uploadedPDF",
        JSON.stringify({ name: file.name, type: file.type, url: fileUrl })
      ); // Save file info and URL to localStorage
      onUpload(true); // Inform that a file has been uploaded
    } else {
      alert("Παρακαλώ ανεβάστε μόνο αρχεία .pdf!");
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setFileURL(null);
    localStorage.removeItem("uploadedPDF"); // Remove from localStorage
    onUpload(false); // Inform that the file was removed
  };

  const openFile = () => {
    if (fileURL) {
      // Open in new tab for preview
      window.open(fileURL, "_blank");
    }
  };

  const openFullScreen = () => {
    if (fileURL) {
      // Create iframe for full-screen view
      const iframe = document.createElement("iframe");
      iframe.src = fileURL;
      iframe.style.position = "fixed";
      iframe.style.top = 0;
      iframe.style.left = 0;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.zIndex = 1000;
      iframe.allowFullscreen = true;
      document.body.appendChild(iframe);

      // Request full-screen mode
      iframe
        .requestFullscreen()
        .catch((err) => console.error("FullScreen error: ", err));

      // Remove iframe when full-screen is exited
      document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          iframe.remove();
        }
      });
    }
  };

  return (
    <div className="upload-pdf">
      <div className="upload-container">
        {!selectedFile ? (
          <label htmlFor="file-upload" className="upload-label">
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <span className="upload-button">
              <img src="/upload.png" alt="upload Icon" className="upload-icon" />
              Ανεβάστε αρχείο
            </span>
          </label>
        ) : (
          <div className="file-details">
            <span className="file-name">{selectedFile.name}</span>
            <div className="file-actions">
              <button className="file-preview-button" onClick={openFile}>
                <img src="/preview.png" alt="Preview Icon" className="upload-icon" />
                Προεπισκόπηση
              </button>
              <button className="file-delete-button" onClick={clearFile}>
                <img src="/trashcan.png" alt="Delete Icon" className="upload-icon" />
                Διαγραφή
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="upload-note">
        Προσοχή! Μόνο αρχεία της μορφής .pdf γίνονται αποδεκτά.
      </p>
    </div>
  );
}
