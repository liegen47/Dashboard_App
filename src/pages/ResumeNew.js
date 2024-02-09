import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import pdf from "../Assets/Vansh_Kapoor.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import MyNavbar from "../components/MyNavbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <MyNavbar />
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(
              new Array(numPages),
              (el, index) =>
                show && (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={width > 786 ? 2.7 : 1}
                  />
                )
            )}
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={() => setShow(!show)}
            style={{
              maxWidth: "250px",
              marginLeft: "760px",
              padding: "20px",
              borderRadius: 20,
              border: "none",
              fontSize: 15,
            }}
          >
            {show ? "Hide" : "Show"} All Pages
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Vansh_Kapoor_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
