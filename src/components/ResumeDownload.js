import React from 'react';
import '../styles/resumeDownload.scss';

const ResumeDownload = () =>
  <div className="resume-download-component">
    Download my resume as a PDF{' '}
    <a
      href="https://github.com/libeja/portfolio/raw/master/src/assets/Jay%20Ullman%20Resume%202017.pdf"
      download="resume.pdf"
    >
      here
    </a>
  </div>;

export default ResumeDownload;
