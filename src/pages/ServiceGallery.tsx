
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'event', name: 'Events' },
    { id: 'drone', name: 'Drone' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'family', name: 'Family' }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'wedding', title: 'Wedding Ceremony' },
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'wedding', title: 'Bridal Portrait' },
    { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'event', title: 'Corporate Event' },
    { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800', category: 'wedding', title: 'Wedding Reception' },
    { url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800', category: 'drone', title: 'Aerial Landscape' },
    { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800', category: 'family', title: 'Family Portrait' },
    { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', category: 'commercial', title: 'Product Photography' },
    { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800', category: 'wedding', title: 'Wedding Details' },
    { url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800', category: 'event', title: 'Birthday Celebration' },
    { url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800', category: 'drone', title: 'Aerial View' },
    { url: 'https://images.unsplash.com/photo-1525258801921-35ba50f0ddfc?w=800', category: 'family', title: 'Baby Photography' },
    { url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800', category: 'commercial', title: 'Brand Campaign' },
    { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', category: 'wedding', title: 'Couple Session' },
    { url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800', category: 'event', title: 'Anniversary Party' },
    { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', category: 'drone', title: 'Wedding Aerial' },
    { url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', category: 'commercial', title: 'Corporate Headshots' }
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Service <span className="text-marvel-yellow">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our work organized by service category
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id 
                  ? "bg-marvel-yellow text-black hover:bg-yellow-400" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }
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
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/30"
            size="icon"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="max-w-5xl max-h-[90vh] px-4">
            <img 
              src={filteredImages[selectedImage].url} 
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h3 className="text-xl font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
            <p className="text-sm capitalize mb-2">{filteredImages[selectedImage].category}</p>
            <p className="text-sm">{selectedImage + 1} / {filteredImages.length}</p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-marvel-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your photography needs and bring your vision to life
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3"
          >
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceGallery;
