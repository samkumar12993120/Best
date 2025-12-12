// components/Banner.jsx
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';
import banner1 from '../assets/images/jpg/BANNER-1.jpg';
import banner2 from '../assets/images/jpg/BANNER-1.jpg';
import banner3 from '../assets/images/jpg/BANNER-1.jpg';

const banners = [
  {
    id: 1,
    title: "Two hearts, one journey.",
    subtitle: "From lovers to life partners — forever begins now.",
    background: `linear-gradient(rgba(26, 42, 64, 0.7), rgba(26, 42, 64, 0.5)), url(${banner1})`
  },
  {
    id: 2,
    title: "Once lovers, now husband and wife.",
    subtitle: "A beautiful love story becomes a lifetime bond.",
    background: `linear-gradient(rgba(26, 42, 64, 0.7), rgba(26, 42, 64, 0.5)), url(${banner2})`
  },
  {
    id: 3,
    title: "From love to marriage…",
    subtitle: "Their forever story has officially begun.",
    background: `linear-gradient(rgba(26, 42, 64, 0.7), rgba(26, 42, 64, 0.5)), url(${banner3})`
  }
];


const Banner = () => {
  const swiperRef = useRef(null);

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <section className="banner-section">
      {/* Floating Hearts Animation */}
      <div className="floating-hearts">
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaHeart style={{ color: 'var(--gold)', opacity: 0.6 }} />
          </motion.div>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div 
              className="banner-slide"
              style={{ background: banner.background }}
            >
              <div className="banner-content">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="heart-icon"
                >
                  <motion.div
                    variants={heartVariants}
                    animate="animate"
                  >
                    <FaHeart style={{ color: 'var(--gold)', fontSize: '60px' }} />
                  </motion.div>
                </motion.div>
                
                <h1 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                  className="banner-title"
                >
                  {banner.title}
                </h1>
                
                {banner.subtitle && (
                  <p 
                    data-aos="fade-up" 
                    data-aos-delay="600"
                    className="banner-subtitle"
                  >
                    {banner.subtitle}
                  </p>
                )}
                
                <motion.div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="scroll-indicator"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {/* <div className="mouse">
                    <div className="wheel"></div>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default React.memo(Banner);