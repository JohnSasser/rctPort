import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';

import './style.css';
// import Footer from '../../components/Footer';

// let yellowResume = `${process.env.PUBLIC_URL}/dev-resume-yellow-background.pdf`;
// let blueResume = process.env.PUBLIC_URL + '/dev-resume-blue-background.pdf';
// let devResume = `${process.env.PUBLIC_URL}/web-dev-resume-blue.pdf`;
let implementationResume = `${process.env.PUBLIC_URL}/resume-implementation-integrations.pdf`;

export default function Resume(props) {
  // const [pageSize, setPageSize] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
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
  // console.log(props.windowWidth);
  return props.windowWidth > 800 ? (
    <div id="resume-page-container">
      {' '}
      <div id="button-container">
        {pageNumber >= 2 ? (
          <Button
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber >= 2 ? 'info' : 'secondary'}
            className={pageNumber >= 2 ? 'active-button' : 'inactive-button'}
          >
            previous page
          </Button>
        ) : (
          <Button
            onClick={previousPage}
            id="button-forward"
            variant={pageNumber >= 2 ? 'info' : 'secondary'}
            className={pageNumber >= 2 ? 'active-button' : 'inactive-button'}
            disabled
          >
            previous page
          </Button>
        )}
        <div className="center-content">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <a id="download-icon" href={implementationResume} target="blank">
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
              pageNumber < numPages - 1 ? 'active-button' : 'inactive-button'
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
          file={implementationResume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  ) : (
    <div id="resume-page-container">
      {' '}
      <div className="center-content">
        <a id="download-icon" href={implementationResume} target="blank">
          <FaFileDownload />
          <br />

          <br />
          <span id="download-icon-text"> OPEN PDF </span>
        </a>
      </div>
    </div>
  );

  // </WidthContext.Consumer>
}
