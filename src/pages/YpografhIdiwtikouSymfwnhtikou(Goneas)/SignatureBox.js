import React, { useRef, useState, useEffect } from "react";
import "./SignatureBox.css";

export default function SignatureBox({ onSign, signatureData }) {
  const canvasRef = useRef(null);
  const [signatureCompleted, setSignatureCompleted] = useState(false);

  // Φόρτωση υπογραφής από το props (signatureData)
  useEffect(() => {
    if (signatureData && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = signatureData;
      setSignatureCompleted(true);
      onSign(true, signatureData); // Ενημέρωση κατάστασης
    }
  }, [signatureData, onSign]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    canvas.isDrawing = true;
  };

  const draw = (e) => {
    if (!canvasRef.current.isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.isDrawing = false;
    setSignatureCompleted(true);
    const dataURL = canvas.toDataURL(); // Αποθήκευση υπογραφής σε μορφή Base64
    onSign(true, dataURL); // Ενημέρωση με τη νέα υπογραφή
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureCompleted(false);
    onSign(false, null); // Ενημέρωση για διαγραφή υπογραφής
  };

  return (
    <div className="signature-box">
      <div className="signature-container">
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="signature-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
        ></canvas>
      </div>
      <button className="clear-button" onClick={clearCanvas}>
        Εκκαθάριση
      </button>
    </div>
  );
}
