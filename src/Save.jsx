import React from 'react';
import jsPDF from 'jspdf';
import styles from './styles/Save.module.css'

const Save = () => {

const generatePDF = () => {
  const doc = new jsPDF('portrait', 'pt', 'a4');

  doc.html(document.querySelector('#resume')).then(() => {

    doc.save('resume.pdf');
  });
};

  return (
    <div className="cv-download">
      <button onClick={generatePDF} type="button" className={styles.download}>
        <span className={styles.downloadText}>
          Download
        </span>
        <span className={styles.downloadImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
            className="svg-download"
          >
            <path
              fill="currentColor"
              d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Save;