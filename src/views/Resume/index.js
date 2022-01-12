import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';

// import resume from '../../software-engineer-resume.pdf';

import './style.css';
import Footer from '../../components/Footer';

// let planeResume = process.env.PUBLIC_URL + '/software-engineer-resume.pdf';
let yellowResume = process.env.PUBLIC_URL + '/dev-resume-yellow-background.pdf';
// let blueResume = process.env.PUBLIC_URL + '/dev-resume-blue-background.pdf';

export default function Resume() {
  // const [file, setFile] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    // setFile(pdfFilePath);
    setNumPages(numPages);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  function previousPage() {
    setPageNumber(pageNumber - 1);
  }

  // console.log('numPages:', numPages);
  // console.log('pageNumber:', pageNumber);
  return (
    <div id="resume-page-container">
      {' '}
      <div id="button-container">
        {pageNumber > numPages - 1 ? (
          <Button
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber > numPages - 1 ? 'info' : 'secondary'}
            className={
              pageNumber > numPages - 1 ? 'active-button' : 'inactive-button'
            }
          >
            previous page
          </Button>
        ) : (
          <Button
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber > numPages - 1 ? 'info' : 'secondary'}
            className={
              pageNumber > numPages - 1 ? 'active-button' : 'inactive-button'
            }
            disabled
          >
            previous page
          </Button>
        )}
        <div className="center-content">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <a id="download-icon" href={yellowResume} target="blank">
            <span id="download-icon-text"> OPEN PDF </span>
            <FaFileDownload />
          </a>
        </div>

        {pageNumber > numPages - 1 ? (
          <Button
            onClick={nextPage}
            id="button-back"
            variant={pageNumber > numPages - 1 ? 'secondary' : 'info'}
            className={
              pageNumber < numPages ? 'active-button' : 'inactive-button'
            }
            disabled
          >
            {' '}
            next page
          </Button>
        ) : (
          <Button
            onClick={nextPage}
            id="button-back"
            variant={pageNumber > numPages - 1 ? 'secondary' : 'info'}
            className={
              pageNumber < numPages ? 'active-button' : 'inactive-button'
            }
          >
            {' '}
            next page
          </Button>
        )}
      </div>
      <div
        id="pdf-container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Document
          id="react-pdf-doc"
          file={yellowResume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
