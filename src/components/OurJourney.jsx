// components/OurJourney.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';
import './Ourjourney.css';

const timelineEvents = [
  { id: 1, year: '2015', title: 'First Meeting', description: 'Met at college festival, instant connection', icon: '❤️', side: 'left' },
  { id: 2, year: '2016', title: 'First Date', description: 'Coffee turned into dinner, talked for hours', icon: '☕', side: 'right' },
  { id: 3, year: '2017', title: 'Official Couple', description: 'Made it official on a starry night', icon: '⭐', side: 'left' },
  { id: 4, year: '2018', title: 'First Trip Together', description: 'Weekend getaway to the mountains', icon: '🏔️', side: 'right' },
  { id: 5, year: '2019', title: 'Moving In', description: 'Started our life together in a new apartment', icon: '🏡', side: 'left' },
  { id: 6, year: '2020', title: 'The Proposal', description: 'He proposed on a beach at sunset', icon: '💍', side: 'right' },
  { id: 7, year: '2021', title: 'Wedding Planning', description: 'Started planning our dream wedding', icon: '📋', side: 'left' },
  { id: 8, year: '2022', title: 'Engagement Party', description: 'Celebrated with family and friends', icon: '🎉', side: 'right' },
  { id: 9, year: '2023', title: 'Wedding Day', description: 'Our beautiful wedding ceremony', icon: '👰', side: 'left' },
  { id: 10, year: '2024', title: 'Honeymoon', description: 'Two weeks in paradise', icon: '🌴', side: 'right' },
  { id: 11, year: '2025', title: 'First Home', description: 'Bought our first house together', icon: '🏠', side: 'left' },
  { id: 12, year: 'Future', title: 'Forever Together', description: 'Many more beautiful moments to come', icon: '∞', side: 'right' }
];

const OurJourney = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section className="our-journey-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Journey Together</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A timeline of our love story</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`timeline-event ${event.side}`}
              data-aos={`fade-${event.side === 'left' ? 'right' : 'left'}`}
              data-aos-delay={index * 100}
              onMouseEnter={() => setActiveEvent(event.id)}
              onMouseLeave={() => setActiveEvent(null)}
            >
              <div className="event-content">
                <div className="event-icon">
                  <span className="icon-emoji">{event.icon}</span>
                </div>

                <div className="event-details">
                  <div className="event-year">{event.year}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>

                <div className="event-connector"></div>
              </div>

              {activeEvent === event.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="event-hover-effect"
                >
                  <div className="hover-glow"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="journey-stats" data-aos="fade-up">
          <div className="stat-card">
            <FaCalendarAlt className="stat-icon" />
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Together</div>
          </div>

          <div className="stat-card">
            <FaMapMarkerAlt className="stat-icon" />
            <div className="stat-number">15+</div>
            <div className="stat-label">Cities Visited</div>
          </div>

          <div className="stat-card">
            <FaHeart className="stat-icon" />
            <div className="stat-number">∞</div>
            <div className="stat-label">Memories Made</div>
          </div>

          <div className="stat-card">
            <FaGlassCheers className="stat-icon" />
            <div className="stat-number">1</div>
            <div className="stat-label">Beautiful Wedding</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(OurJourney);
