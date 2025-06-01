
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'candid', name: 'Candid' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'model', name: 'Model Shoots' },
    { id: 'videography', name: 'Videography' },
    { id: 'baby', name: 'Baby Photography' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'drone', name: 'Drone' },
    { id: 'commercial', name: 'Ad Films' },
    { id: 'product', name: 'Product' }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'wedding', title: 'Wedding Ceremony' },
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'wedding', title: 'Bridal Portrait' },
    { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', category: 'wedding', title: 'Pre-Wedding Shoot' },
    { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'candid', title: 'Candid Moments' },
    { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800', category: 'wedding', title: 'Wedding Reception' },
    { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800', category: 'portrait', title: 'Portrait Session' },
    { url: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b623?w=800', category: 'model', title: 'Model Photography' },
    { url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', category: 'videography', title: 'Event Videography' },
    { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800', category: 'baby', title: 'Baby Photography' },
    { url: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800', category: 'corporate', title: 'Corporate Event' },
    { url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800', category: 'drone', title: 'Aerial Landscape' },
    { url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800', category: 'commercial', title: 'Ad Film Production' },
    { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', category: 'product', title: 'Product Photography' },
    { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800', category: 'wedding', title: 'Wedding Details' },
    { url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800', category: 'candid', title: 'Candid Photography' },
    { url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800', category: 'drone', title: 'Aerial View' },
    { url: 'https://images.unsplash.com/photo-1525258801921-35ba50f0ddfc?w=800', category: 'portrait', title: 'Family Portrait' },
    { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', category: 'product', title: 'Product Showcase' },
    { url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800', category: 'corporate', title: 'Corporate Photography' },
    { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', category: 'drone', title: 'Wedding Aerial' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Service Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our work organized by service category
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b animate-scale-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? "bg-marvel-yellow text-black hover:bg-yellow-400 shadow-lg" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-marvel-yellow"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift animate-scale-in"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center text-white transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm capitalize bg-marvel-yellow text-black px-2 py-1 rounded">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <Button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="max-w-5xl max-h-[90vh] px-4 animate-scale-in">
            <img 
              src={filteredImages[selectedImage].url} 
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center animate-fade-in">
            <h3 className="text-xl font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
            <p className="text-sm capitalize bg-marvel-yellow text-black px-3 py-1 rounded-full mb-2 inline-block">
              {filteredImages[selectedImage].category}
            </p>
            <p className="text-sm opacity-75">{selectedImage + 1} / {filteredImages.length}</p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-marvel-black text-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your photography needs and bring your vision to life
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceGallery;
