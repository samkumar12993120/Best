// IncidentSection.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './IncidentsSection.css';
import { FiClock, FiCalendar, FiUser, FiMapPin, FiMessageCircle, FiShare2, FiBookmark, FiChevronRight } from 'react-icons/fi';
import { FaHeart, FaRegHeart, FaFire, FaGift, FaRing, FaCamera, FaGlassCheers } from 'react-icons/fa';
import { MdCelebration, MdEmojiEvents, MdFavorite } from 'react-icons/md';

const IncidentSection = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Sunset Beach Proposal",
      description: "John planned the perfect sunset proposal on a secluded beach in the Maldives. With the waves gently crashing and golden hour lighting, he got down on one knee with a custom-designed diamond ring.",
      type: "proposal",
      category: "💍 Romantic",
      date: "March 15, 2024",
      time: "18:30 PM",
      location: "Maldives Private Beach",
      status: "Engaged",
      icon: <FaRing />,
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
      couple: "John & Sarah",
      duration: "2 minutes ago",
      reactions: 245,
      comments: 42,
      shares: 15,
      saved: 89,
      color: "#FF6B8B"
    },
    {
      id: 2,
      title: "24-Hour Surprise Wedding",
      description: "A childhood dream come true - Mike surprised Emma with a fully planned wedding in just 24 hours! Family and friends flew in from around the world for this magical moment.",
      type: "wedding",
      category: "👰 Surprise",
      date: "March 14, 2024",
      time: "15:00 PM",
      location: "Central Park, New York",
      status: "Married",
      icon: <MdCelebration />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      couple: "Mike & Emma",
      duration: "1 hour ago",
      reactions: 512,
      comments: 89,
      shares: 42,
      saved: 156,
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Paris Anniversary Surprise",
      description: "David whisked Lisa away to Paris for their 10th anniversary. Complete with private dinner at the Eiffel Tower and a romantic river cruise along the Seine.",
      type: "anniversary",
      category: "🎂 Milestone",
      date: "March 13, 2024",
      time: "20:00 PM",
      location: "Paris, France",
      status: "Celebrating",
      icon: <FaGift />,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&h=400&fit=crop",
      couple: "David & Lisa",
      duration: "3 hours ago",
      reactions: 189,
      comments: 31,
      shares: 22,
      saved: 67,
      color: "#FFD166"
    },
    {
      id: 4,
      title: "Flash Mob Proposal",
      description: "Alex organized a 50-person flash mob in the downtown mall that ended with him proposing to Maria in front of hundreds of cheering strangers.",
      type: "proposal",
      category: "💃 Creative",
      date: "March 12, 2024",
      time: "14:00 PM",
      location: "Downtown Shopping Mall",
      status: "Engaged",
      icon: <FaCamera />,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w-600&h=400&fit=crop",
      couple: "Alex & Maria",
      duration: "Yesterday",
      reactions: 421,
      comments: 67,
      shares: 38,
      saved: 124,
      color: "#06D6A0"
    },
    {
      id: 5,
      title: "Tropical Destination Wedding",
      description: "Ryan and Chloe said 'I do' on a pristine Bali beach with 150 of their closest friends and family. The ceremony was followed by a traditional Balinese celebration.",
      type: "wedding",
      category: "🌴 Destination",
      date: "March 11, 2024",
      time: "11:00 AM",
      location: "Bali, Indonesia",
      status: "Honeymooning",
      icon: <FaGlassCheers />,
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop",
      couple: "Ryan & Chloe",
      duration: "2 days ago",
      reactions: 156,
      comments: 28,
      shares: 19,
      saved: 45,
      color: "#118AB2"
    },
    {
      id: 6,
      title: "25-Year Vow Renewal",
      description: "Robert and Susan renewed their vows in their backyard garden where they first met 30 years ago. All their children and grandchildren were present for this emotional celebration.",
      type: "anniversary",
      category: "💕 Legacy",
      date: "March 10, 2024",
      time: "16:30 PM",
      location: "Family Garden Home",
      status: "25 Years Strong",
      icon: <MdFavorite />,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      couple: "Robert & Susan",
      duration: "3 days ago",
      reactions: 98,
      comments: 19,
      shares: 12,
      saved: 34,
      color: "#EF476F"
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [likedIncidents, setLikedIncidents] = useState({});
  const [savedIncidents, setSavedIncidents] = useState({});
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  const filteredIncidents = filter === 'all' 
    ? incidents
    : incidents.filter(incident => incident.type === filter);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedIncidents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSavedIncidents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getStatusBadge = (status) => {
    const badges = {
      'Engaged': { bg: '#FFE4E9', color: '#FF6B8B', icon: '💍' },
      'Married': { bg: '#E0F7FA', color: '#00ACC1', icon: '👰' },
      'Celebrating': { bg: '#FFF8E1', color: '#FFA000', icon: '🎉' },
      'Honeymooning': { bg: '#E8F5E9', color: '#4CAF50', icon: '✈️' },
      '25 Years Strong': { bg: '#F3E5F5', color: '#8E24AA', icon: '💎' }
    };
    return badges[status] || { bg: '#ECEFF1', color: '#607D8B', icon: '❤️' };
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'proposal': return '💍';
      case 'wedding': return '👰';
      case 'anniversary': return '🎂';
      default: return '❤️';
    }
  };

  return (
    <section className="incident-section">
      <div className="container">
        <div className="section-header">
          <div className="header-left" data-aos="fade-right">
           
            <h1 className="section-title">
              Moments That Last
              <span className="title-highlight"> Forever</span>
            </h1>
           
         
          </div>

        
        </div>


        <div className="stories-timeline">
          <div className="timeline-line"></div>
          {filteredIncidents.map((incident, index) => {
            const isEven = index % 2 === 0;
            const statusBadge = getStatusBadge(incident.status);
            
            return (
              <div 
                key={incident.id}
                className={`story-card ${isEven ? 'left' : 'right'} ${activeStory === incident.id ? 'active' : ''}`}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                onClick={() => setActiveStory(incident.id)}
              >
                <div className="timeline-node">
                  <div className="node-icon" style={{ backgroundColor: incident.color }}>
                    {incident.icon}
                  </div>
                  <div className="node-time">{incident.duration}</div>
                </div>

                <div className="story-content">
                  <div className="story-header">
                  
                  
                  </div>

                  <div className="story-image">
                    <img src={incident.image} alt={incident.title} />
                    <div className="image-overlay">
                      <div className="couple-avatars">
                        <div className="avatar" style={{ backgroundColor: incident.color }}>
                          {incident.couple.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-body">
                    <h3 className="story-title">{incident.title}</h3>
                    <p className="story-description">{incident.description}</p>
                    
               

                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default IncidentSection;