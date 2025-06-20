import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Helper function to dynamically import service gallery images
  const importImage = (path: string) => {
    try {
      return new URL(`../assest/service gallery/${path}`, import.meta.url).href;
    } catch (error) {
      console.error(`Failed to load image: ${path}`, error);
      return '/placeholder.svg';
    }
  };

  // ... keep existing code (galleryImages array)
  const galleryImages = [
    // Wedding Images
    importImage('wedding/w1.jpeg'),
    importImage('wedding/w2.jpeg'),
    importImage('wedding/w4.jpeg'),
    importImage('wedding/w5.jpeg'),
    importImage('wedding/w6.jpeg'),
    importImage('wedding/w7.jpeg'),
    
    // Pre and Post Wedding Images
    importImage('Pre and Post wedding/m2.jpeg'),
    importImage('Pre and Post wedding/m3.jpeg'),
    importImage('Pre and Post wedding/m4.jpeg'),
    importImage('Pre and Post wedding/m5.jpeg'),
    importImage('Pre and Post wedding/m6.jpeg'),
    
    // Candid Images
    importImage('candit/c1.jpeg'),
    importImage('candit/c2.jpeg'),
    importImage('candit/c3.jpeg'),
    importImage('candit/c4.jpeg'),
    importImage('candit/c5.jpg'),
    importImage('candit/c6.jpeg'),
    importImage('candit/c7.jpeg'),
    importImage('candit/c8.jpg'),
    importImage('candit/c9.jpg'),
    importImage('candit/c10.jpg'),
    
    // Model Images
    importImage('model pics/m1.jpg'),
    importImage('model pics/m2.jpg'),
    importImage('model pics/m3.jpg'),
    importImage('model pics/m4.jpg'),
    importImage('model pics/m5.jpeg'),
    importImage('model pics/m6.jpeg'),
    importImage('model pics/m7.jpeg'),
    importImage('model pics/m8.jpeg'),
    importImage('model pics/m9.jpeg'),
    
    // Baby Images
    importImage('baby/b1.jpeg'),
    importImage('baby/b2.jpeg'),
    importImage('baby/b3.jpeg'),
    importImage('baby/b4.jpeg'),
    importImage('baby/b5.jpeg'),
    importImage('baby/b6.jpeg'),
    importImage('baby/b7.jpeg'),
    importImage('baby/b8.jpeg'),
    importImage('baby/b9.jpeg'),
    importImage('baby/b10.jpeg'),
    importImage('baby/b11.jpeg'),
    importImage('baby/b12.jpeg'),
    importImage('baby/b13.jpeg'),
    importImage('baby/b14.jpg'),
    importImage('baby/b15.jpg'),
    importImage('baby/b16.jpeg'),
    importImage('baby/b17.jpeg'),
    importImage('baby/b18.jpeg'),
    importImage('baby/b19.jpeg'),
    importImage('baby/b20.jpeg'),
    
    // Baby Shower Images
    importImage('baby shower/bs1.jpg'),
    importImage('baby shower/bs2.jpg'),
    importImage('baby shower/bs3.jpeg'),
    importImage('baby shower/bs4.jpeg'),
    importImage('baby shower/bs5.jpeg')
  ];

  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  // ... keep existing code (openLightbox, closeLightbox, nextImage, prevImage functions)
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
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Masterpiece Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where Every Frame Tells a Story
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-marvel-yellow rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7l3 3-3 3" />
                      </svg>
                    </div>
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
              src={galleryImages[selectedImage]} 
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-marvel-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something beautiful together for your special occasion
          </p>
          <Button 
            onClick={() => handleNavigation('/contact')}
            className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
