// components/OurJourney.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';
import './Ourjourney.css';

const timelineEvents = [
  { id: 1, year: '2024',date:'14/09' , title: 'First Meeting', description: "Everything started with a spark during that memorable marriage function."
, icon: '❤️', side: 'left' },
  { id: 2, year: '2024',date:'14/09',title: 'First Date', description: "Met at a coffee shop… and ended up talking for hours without even noticing."
, icon: '☕', side: 'right' },
  { id: 3, year: '2024', date:'1/07', title: 'Official Couple', description: "Made it official on a starry night—where their love grew, stayed strong, and they later proposed to each other."
, icon: '⭐', side: 'left' },
  { id: 4, year: '2025', title: 'First Trip Together', date:'12/03', description: 'Weekend getaway to the mountains', icon: '🏔️', side: 'right' },
  { id: 5, year: '2024', title: 'Moving Onwards', date:'24/10', description: 'Began our new life together in our cozy home in Coiambatore.', icon: '🏡', side: 'left' },
  { id: 6, year: '2024', title: 'The Proposal', date:'1/07', description: 'He proposed on a beach at sunset', icon: '💍', side: 'right' },
  { id: 7, year: '2024', title: 'Wedding Planning',  date:'16/11', description: 'Started planning our dream wedding', icon: '📋', side: 'left' },
  { id: 8, year: '2024', title: 'Engagement Party',date:'20/11', description: 'Celebrated with family and friends', icon: '🎉', side: 'right' },
  { id: 9, year: '2025', title: 'Wedding Day', date:'09/03',description: 'Our beautiful wedding ceremony', icon: '👰', side: 'left' },
  { id: 10, year: '2025',  date:'12/03',  title: 'Honeymoon', description: 'Two weeks in paradise', icon: '🌴', side: 'right' },
  { id: 11, year: '2025', title: 'Forever Together', description: 'Many more beautiful moments to come', icon: '∞', side: 'left' },
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
                  <div className="event-date">{event.date}</div>


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

     

      </div>
    </section>
  );
};

export default React.memo(OurJourney);
