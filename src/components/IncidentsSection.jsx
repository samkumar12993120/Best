// IncidentSection.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './IncidentsSection.css';
import { FiAlertCircle, FiClock, FiCalendar, FiUser, FiMapPin, FiHeart } from 'react-icons/fi';
import { FaHeart, FaRegHeart, FaFire, FaGift, FaRing, FaCamera } from 'react-icons/fa';

const IncidentSection = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Proposal at Sunset Point",
      description: "John proposed to Sarah during sunset at the beach with a beautiful ring and heartfelt promises.",
      type: "proposal",
      severity: "high",
      date: "2024-03-15",
      time: "18:30",
      location: "Maldives Beach",
      status: "accepted",
      icon: <FaRing />,
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=500&h=300&fit=crop",
      couple: "John & Sarah",
      reactions: 245,
      comments: 42
    },
    {
      id: 2,
      title: "Surprise Wedding Arrangement",
      description: "Complete surprise wedding organized in just 24 hours for childhood sweethearts.",
      type: "wedding",
      severity: "high",
      date: "2024-03-14",
      time: "15:00",
      location: "Central Park, NY",
      status: "completed",
      icon: <FaHeart />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop",
      couple: "Mike & Emma",
      reactions: 512,
      comments: 89
    },
    {
      id: 3,
      title: "Romantic Getaway Surprise",
      description: "Surprise trip to Paris arranged as anniversary gift. Complete with candlelit dinner at Eiffel Tower.",
      type: "anniversary",
      severity: "medium",
      date: "2024-03-13",
      time: "20:00",
      location: "Paris, France",
      status: "ongoing",
      icon: <FaGift />,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&h=300&fit=crop",
      couple: "David & Lisa",
      reactions: 189,
      comments: 31
    },
    {
      id: 4,
      title: "Flash Mob Proposal",
      description: "Flash mob organized in shopping mall ending with a romantic marriage proposal.",
      type: "proposal",
      severity: "medium",
      date: "2024-03-12",
      time: "14:00",
      location: "Downtown Mall",
      status: "accepted",
      icon: <FaCamera />,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&h=300&fit=crop",
      couple: "Alex & Maria",
      reactions: 421,
      comments: 67
    },
    {
      id: 5,
      title: "Destination Wedding Planning",
      description: "Complete wedding planning for 150 guests at tropical island resort.",
      type: "wedding",
      severity: "medium",
      date: "2024-03-11",
      time: "11:00",
      location: "Bali, Indonesia",
      status: "planning",
      icon: <FaHeart />,
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&h=300&fit=crop",
      couple: "Ryan & Chloe",
      reactions: 156,
      comments: 28
    },
    {
      id: 6,
      title: "Vow Renewal Ceremony",
      description: "25th anniversary vow renewal with family and friends in backyard garden setting.",
      type: "anniversary",
      severity: "low",
      date: "2024-03-10",
      time: "16:30",
      location: "Family Garden",
      status: "completed",
      icon: <FaFire />,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=300&fit=crop",
      couple: "Robert & Susan",
      reactions: 98,
      comments: 19
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [likedIncidents, setLikedIncidents] = useState({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  const filteredIncidents = filter === 'all' 
    ? (showAll ? incidents : incidents.slice(0, 4))
    : incidents.filter(incident => incident.type === filter);

  const toggleLike = (id) => {
    setLikedIncidents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'accepted':
      case 'completed':
        return '#4CAF50';
      case 'ongoing':
      case 'planning':
        return '#F5C542';
      default:
        return '#F7B7A3';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'accepted':
        return '💍';
      case 'completed':
        return '✅';
      case 'ongoing':
        return '⏳';
      case 'planning':
        return '📅';
      default:
        return '❤️';
    }
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="incident-section">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <div className="header-content">
            <h1 className="section-title">
              <span className="heart-icon">❤️</span>
              Love & Marriage
              <span className="heart-icon">💍</span>
            </h1>
            <p className="section-subtitle">
              Beautiful love stories, proposals, and wedding moments from around the world
            </p>
          </div>
          
          <div className="header-stats" data-aos="fade-left">
            <div className="stat-item">
              <span className="stat-number">{incidents.length}</span>
              <span className="stat-label">Love Stories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2,145</span>
              <span className="stat-label">Reactions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">276</span>
              <span className="stat-label">Comments</span>
            </div>
          </div>
        </div>

        <div className="filter-buttons" data-aos="fade-up">
          {['all', 'proposal', 'wedding', 'anniversary'].map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
              onClick={() => setFilter(type)}
            >
              {type === 'all' ? 'All Stories' : 
               type === 'proposal' ? '💍 Proposals' :
               type === 'wedding' ? '👰 Weddings' : '🎂 Anniversaries'}
            </button>
          ))}
        </div>

        <div className="incidents-grid">
          {filteredIncidents.map((incident, index) => (
            <div 
              key={incident.id}
              className="incident-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card-image">
                <img src={incident.image} alt={incident.title} />
                <div className="image-overlay">
                  <span className="incident-type">{incident.type.toUpperCase()}</span>
                  <button 
                    className="like-btn"
                    onClick={() => toggleLike(incident.id)}
                  >
                    {likedIncidents[incident.id] ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="incident-icon">
                    {incident.icon}
                  </div>
                  <div className="title-wrapper">
                    <h3 className="incident-title">{incident.title}</h3>
                    <div className="couple-name">
                      <FiUser />
                      <span>{incident.couple}</span>
                    </div>
                  </div>
                </div>

                <p className="incident-description">{incident.description}</p>

                <div className="incident-details">
                  <div className="detail-item">
                    <FiCalendar />
                    <span>{formatDate(incident.date)}</span>
                  </div>
                  <div className="detail-item">
                    <FiClock />
                    <span>{incident.time}</span>
                  </div>
                  <div className="detail-item">
                    <FiMapPin />
                    <span>{incident.location}</span>
                  </div>
                </div>

                <div className="incident-footer">
                  <div className="status-tag" style={{ backgroundColor: getStatusColor(incident.status) }}>
                    <span className="status-icon">{getStatusIcon(incident.status)}</span>
                    <span className="status-text">{incident.status}</span>
                  </div>
                  
                  <div className="reaction-stats">
                    <div className="reaction-item">
                      <FaHeart className="heart-icon" />
                      <span>{incident.reactions}</span>
                    </div>
                    <div className="reaction-item">
                      <FiAlertCircle />
                      <span>{incident.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && filter === 'all' && (
          <div className="view-more-container" data-aos="fade-up">
            <button className="view-more-btn" onClick={() => setShowAll(true)}>
              View More Love Stories
              <span className="arrow">→</span>
            </button>
          </div>
        )}

        <div className="quote-section" data-aos="fade-up">
          <div className="quote-content">
            <div className="quote-icon">💕</div>
            <p className="quote-text">
              "The best thing to hold onto in life is each other."
            </p>
            <p className="quote-author">- Audrey Hepburn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentSection;