import React, { Component } from 'react';
import ResumeDownload from './ResumeDownload';

const ResumePage = () =>
  <div className="resume-page">
    <iframe
      className="resume-frame"
      src="https://drive.google.com/file/d/0B_nswDKKuanzMUpjdTVrZEVCVGc/preview"
      width="99%"
      height="600"
    />
    <ResumeDownload />
  </div>;

export default ResumePage;
