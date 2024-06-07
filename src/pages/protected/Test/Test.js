import React from 'react'
import TitleChanger from '../../../TitleChanger/TitleChanger';
import Breadcrumb from "../../../components/Breadcrumb";
import { LuDownload } from "react-icons/lu";
import { HiUpload } from "react-icons/hi";

const Test = () => {
  return (
    <div>
      <TitleChanger title="Test" />
      <Breadcrumb pageTitle="Test" />
      <div className="test_page">
        <div className="test_title">
          <div className="pdf_img">
            <img src="/assets/images/pdf.png" className="img" />
          </div>
          <div className="test_sub">Physics Test Term-1, Class 10th</div>
        </div>
        <div className="button">
          <div className="download_btn">
            <LuDownload className="icon" />
            <button type="">Download Test</button>
          </div>
          <div className="upload_btn">
            <HiUpload className="icon" />
            <button type="">Upload Test</button>
          </div>
        </div>
      </div>
      <div className="test_page">
        <div className="test_title">
          <div className="pdf_img">
            <img src="/assets/images/pdf.png" className="img" />
          </div>
          <div className="test_sub">Chemistry Mock Term-1, Class 10th</div>
        </div>
        <div className="button">
          <div className="download_btn">
            <LuDownload className="icon" />
            <button type="">Download Test</button>
          </div>
          <div className="upload_btn">
            <HiUpload className="icon" />
            <button type="">Upload Test</button>
          </div>
        </div>
      </div>
      <div className="test_page">
        <div className="test_title">
          <div className="pdf_img">
            <img src="/assets/images/pdf.png" className="img" />
          </div>
          <div className="test_sub">Physics Mock Test</div>
        </div>
        <div className="button">
          <div className="download_btn">
            <LuDownload className="icon" />
            <button type="">Download Test</button>
          </div>
          <div className="upload_btn">
            <HiUpload className="icon" />
            <button type="">Upload Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
