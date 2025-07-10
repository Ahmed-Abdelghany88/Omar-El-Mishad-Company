import React from 'react';
import portfolio1 from '../assets/img/portfolio1.png';
import portfolio2 from '../assets/img/portfolio2.png';
import portfolio3 from '../assets/img/portfolio3.png';
import portfolio4 from '../assets/img/portfolio4.png';

const PortfolioPage = () => {
  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      {/* Embedded CSS with media queries */}
      <style>
        {`
          .portfolio-container img {
            width: 95%;
            object-fit: contain;
            display: block;
            margin: 0 auto;
            padding-top: 1.5%;
          }

          .relative-wrapper {
            position: relative;
            z-index: 1;
          }

          .overlay-links {
            position: absolute;
            z-index: 2;
            bottom: 5%;
            right: 4%;
            display: flex;
            flex-direction: column;
            padding-left: 1%;
            opacity: 0.5;
            border-left: solid;
            border-color: white;
          }

          .overlay-links a {
            color: white;
            font-size: 14px;
            white-space: nowrap;
            width: fit-content;
            text-decoration: none;
            margin-bottom: 4px;
          }

          @media (max-width: 1024px) {
            .overlay-links a {
              font-size: 12px;
            }
          }

          @media (max-width: 768px) {
            .overlay-links {
              bottom: 3%;
              right: 2%;
            }

            .overlay-links a {
              font-size: 10px;
              white-space: normal;
            }

            .portfolio-container img {
              width: 97%;
              padding-top: 3%;
            }
          }
        `}
      </style>

      <div className="portfolio-container">
        <img src={portfolio1} alt="" style={{paddingTop:'6.8%'}}/>
        <img src={portfolio2} alt="" />
        <img src={portfolio3} alt="" />

        <div className="relative-wrapper">
          <img src={portfolio4} alt="" style={{paddingBottom:'1.5%'}}/>
          <div className="overlay-links">
            <div><a href="https://vimeo.com/726877856" target="_blank" rel="noreferrer">Watch Agent 1100 Rehersal</a></div>
            <div><a href="https://drive.google.com/file/d/1ON4pN3Dgx696Yebx8Ct4sEtOiiCU5Xyo/view" target="_blank" rel="noreferrer">Tornado Product Review</a></div>
            <div><a href="https://drive.google.com/file/d/1mdpHPw_giabqReUZDtx2fMLOMyJnap6A/view" target="_blank" rel="noreferrer">Product Review Showreel</a></div>
            <div><a href="https://drive.google.com/file/d/1tmo5V2R66wW44eskO-nVoBNztZWD5CeB/view" target="_blank" rel="noreferrer">Watch cartoon dubbing</a></div>
            <div><a href="https://drive.google.com/file/d/12HD2OB3uvtMtEISlOZQcRW3m28MSvrQf/view" target="_blank" rel="noreferrer">Watch ValYou Showreel</a></div>
            <div><a href="https://drive.google.com/drive/folders/1PAYyykL6_ADKZ2G1hhMLuurTBhioP-bN" target="_blank" rel="noreferrer">Discover More Videos</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;