import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from '../../../TitleChanger/TitleChanger';

const Library = () => {
    return (
      <>
        <TitleChanger title="Library" />
        <Breadcrumb pageTitle="Library" />
        <div className="home_library library_page">
          <div className="library_card">
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/chemistry.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Chemistry</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/inorganic_chemistry.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Inorganic Chemistry</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/physics.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Physics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/maths.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Mathematics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/english.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Learn English</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/physics_pr.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Principles of  Physics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/gen_english.png" alt="" />
              </div>
              <div className="book_footer">
                <p>General English</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/mathss.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Mathematics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Library