// components/Gallery.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Zoom } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaDownload, FaShare } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/zoom';
import './Gallery.css';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';


const galleryImages = [
  { id: 1, url: img5, category: 'ceremony', title: 'The Wedding Vows' },
  { id: 2, url: img4, category: 'reception', title: 'First Dance' },
  { id: 3, url: img9, category: 'portrait', title: 'Golden Hour Portraits' },
  { id: 4, url: img7, category: 'ceremony', title: 'Ring Exchange' },
  { id: 6, url: img3, category: 'reception', title: 'Celebration Time' },
  { id: 7, url: img8, category: 'portrait', title: 'Couple Portraits' },
];


const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'ceremony', name: 'Ceremony' },
  { id: 'reception', name: 'Reception' },
  { id: 'portrait', name: 'Portraits' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [likedImages, setLikedImages] = useState([]);

  const filteredImages = galleryImages.filter(
    image => selectedCategory === 'all' || image.category === selectedCategory
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const toggleLike = (id) => {
    setLikedImages(prev =>
      prev.includes(id)
        ? prev.filter(imageId => imageId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="text-white"style={{ color: "black" }}>Our Gallery</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Capturing precious moments from our special day</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter" data-aos="fade-up" data-aos-delay="200">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div className="gallery-grid" layout>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              layoutId={`image-${image.id}`}
              onClick={() => handleImageClick(image)}
            >
              <div className="image-container">
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="image-title">{image.title}</h3>
                    <button
                      className="like-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                    >
                      <FaHeart className={`heart-icon ${likedImages.includes(image.id) ? 'liked' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={closeLightbox}>
                  <FaTimes />
                </button>

                <div className="lightbox-main">
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    zoom={true}
                    modules={[Navigation, Thumbs, Zoom]}
                    className="lightbox-swiper"
                  >
                    {filteredImages.map(image => (
                      <SwiperSlide key={image.id}>
                        <div className="swiper-zoom-container">
                          <img src={image.url} alt={image.title} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="lightbox-thumbs"
                  >
                    {filteredImages.map(image => (
                      <SwiperSlide key={image.id}>
                        <img src={image.url} alt={image.title} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="lightbox-info">
                  <h3 className="lightbox-title">{selectedImage.title}</h3>
                  <div className="lightbox-actions">
                    <button className="action-btn" onClick={() => toggleLike(selectedImage.id)}>
                      <FaHeart className={likedImages.includes(selectedImage.id) ? 'liked' : ''} />
                      Like
                    </button>
                    <button className="action-btn">
                      <FaDownload />
                      Download
                    </button>
                    <button className="action-btn">
                      <FaShare />
                      Share
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      

      </div>
    </section>
  );
};

export default React.memo(Gallery);
