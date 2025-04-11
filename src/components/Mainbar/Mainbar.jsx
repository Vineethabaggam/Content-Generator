import React, { useContext, useState } from 'react';
import './Mainbar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCopy = () => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = resultData;
    const text = tempElement.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Content Generator</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
              ) : (
                <>
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  <button className="copy-btn" onClick={handleCopy}>
                    Copy
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet">
              <p className="blue-text">
                 <span>Hello, User.</span>
                   </p>
              <p className="blue-text">Ready to generate content?</p>
           </div>

            <div className="cards">
              <div className="card">
                <p>How can retailers increase foot traffic in physical stores?
What offline marketing tactics actually work in 2025?

</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>How does social media drive retail sales?
                Which platforms and content types work best for engagement?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>What are the top retail trends to watch this year?
                  How can retailers stay ahead of shifting consumer behaviors and technologies?

                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What are top rated retail industries in india</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  width={30}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            This application may display inaccurate info, so double-check its
            responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
