import React from 'react';
import './Lovestory.css';

const LoveStory = () => {
  return (
    <section className="love-story-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">From Lovers to Forever Partners</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="love-story-content">
          <div className="image-stack" data-aos="fade-right">
            <div className="main-image">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Couple together" 
              />
            </div>

            <div className="floating-image" data-aos="fade-left" data-aos-delay="300">
              <img 
                src="https://images.unsplash.com/photo-1529254479751-fbacb4c7a587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Couple closeup" 
              />
            </div>
          </div>
          
          <div className="story-text" data-aos="fade-left" data-aos-delay="300">
            <div className="text-content">
              <p className="story-paragraph">
                They shared secrets, smiles, and dreams.
              </p>
              <p className="story-paragraph">
                They held each other through highs and lows.
              </p>
              <p className="story-paragraph">
                And with every moment, their love only deepened.
              </p>
              <p className="story-paragraph highlight">
                Now their hearts beat as one, united in marriage and ready for a lifetime of togetherness.
              </p>
            </div>
            
            <div className="love-quote">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--peach)">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>
              <p className="quote-text">
                "In every love story, there's a beautiful beginning. Ours is just getting started."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LoveStory);
