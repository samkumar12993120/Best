import React from 'react';
import './Lovestory.css';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';

const LoveStory = () => {
  return (
    <section className="love-story-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="text-white"  style={{ color: "black" }}>From Lovers to Forever Partners</h2>
          <div className="title-underline"></div>
        </div>

        <div className="love-story-content">
          <div className="image-stack" data-aos="fade-right">
            <div className="main-image">
            <img src={img1} alt="Couple together" />


            </div>

            <div className="floating-image" data-aos="fade-left" data-aos-delay="300">
              <img src={img2} alt="Couple closeup" />
            </div>
          </div>

          <div className="story-text" data-aos="fade-left" data-aos-delay="300">
            <div className="text-content">
              <p className="story-paragraph">
                They were cousins who hadn’t met in a long time, until a chance encounter at a marriage function brought them together.
              </p>
              <p className="story-paragraph">
                What started as a friendly chat soon blossomed into love. After a thoughtful yes to a proposal and a month of getting to know each other, they shared their joy with their families.              </p>

              <p className="story-paragraph">
                Their journey of love culminated in a beautiful wedding, turning two hearts into forever partners. ❤️              </p>
            </div>

            <div className="love-quote">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--peach)">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <p className="quote-text">
                "From a chance meeting to forever love, some hearts are destined to find each other."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LoveStory);
