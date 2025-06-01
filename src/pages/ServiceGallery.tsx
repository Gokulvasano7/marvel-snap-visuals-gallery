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
    // Wedding Images
    { url: '../assest/service gallery/wedding/w1.jpeg', category: 'wedding', title: 'Wedding Ceremony' },
    { url: '../assest/service gallery/wedding/w2.jpeg', category: 'wedding', title: 'Bridal Portrait' },
    { url: '../assest/service gallery/wedding/w4.jpeg', category: 'wedding', title: 'Wedding Moments' },
    { url: '../assest/service gallery/wedding/w5.jpeg', category: 'wedding', title: 'Wedding Reception' },
    { url: '../assest/service gallery/wedding/w6.JPG', category: 'wedding', title: 'Wedding Details' },
    { url: '../assest/service gallery/wedding/w7.JPG', category: 'wedding', title: 'Wedding Celebration' },
    
    // Pre and Post Wedding Images
    { url: '../assest/service gallery/Pre and Post wedding/m2.JPG', category: 'wedding', title: 'Pre-Wedding Shoot' },
    { url: '../assest/service gallery/Pre and Post wedding/m3.jpeg', category: 'wedding', title: 'Couple Portrait' },
    { url: '../assest/service gallery/Pre and Post wedding/m4.jpeg', category: 'wedding', title: 'Romantic Session' },
    { url: '../assest/service gallery/Pre and Post wedding/m5.jpeg', category: 'wedding', title: 'Pre-Wedding Photography' },
    { url: '../assest/service gallery/Pre and Post wedding/m6.jpeg', category: 'wedding', title: 'Post-Wedding Shoot' },
    
    // Candid Images
    { url: '../assest/service gallery/candit/c1.jpeg', category: 'candid', title: 'Candid Moments' },
    { url: '../assest/service gallery/candit/c2.jpeg', category: 'candid', title: 'Natural Expressions' },
    { url: '../assest/service gallery/candit/c3.jpeg', category: 'candid', title: 'Candid Photography' },
    { url: '../assest/service gallery/candit/c4.jpeg', category: 'candid', title: 'Spontaneous Shots' },
    { url: '../assest/service gallery/candit/c5.jpg', category: 'candid', title: 'Candid Capture' },
    { url: '../assest/service gallery/candit/c6.JPG', category: 'candid', title: 'Natural Moments' },
    { url: '../assest/service gallery/candit/c7.JPG', category: 'candid', title: 'Candid Style' },
    { url: '../assest/service gallery/candit/c8.jpg', category: 'candid', title: 'Authentic Moments' },
    { url: '../assest/service gallery/candit/c9.jpg', category: 'candid', title: 'Candid Stories' },
    { url: '../assest/service gallery/candit/c10.jpg', category: 'candid', title: 'Life Moments' },
    
    // Portrait Images
    { url: '../assest/service gallery/portraits/p1.jpeg', category: 'portrait', title: 'Portrait Session' },
    { url: '../assest/service gallery/portraits/p2.jpeg', category: 'portrait', title: 'Professional Portrait' },
    { url: '../assest/service gallery/portraits/p3.jpg', category: 'portrait', title: 'Family Portrait' },
    { url: '../assest/service gallery/portraits/p4.jpeg', category: 'portrait', title: 'Individual Portrait' },
    { url: '../assest/service gallery/portraits/p5.jpeg', category: 'portrait', title: 'Portrait Photography' },
    { url: '../assest/service gallery/portraits/p6.jpg', category: 'portrait', title: 'Portrait Art' },
    { url: '../assest/service gallery/portraits/p7.JPG', category: 'portrait', title: 'Studio Portrait' },
    { url: '../assest/service gallery/portraits/p8.jpg', category: 'portrait', title: 'Creative Portrait' },
    
    // Model Images
    { url: '../assest/service gallery/model pics/m1.jpg', category: 'model', title: 'Model Photography' },
    { url: '../assest/service gallery/model pics/m2.jpg', category: 'model', title: 'Fashion Shoot' },
    { url: '../assest/service gallery/model pics/m3.jpg', category: 'model', title: 'Model Portfolio' },
    { url: '../assest/service gallery/model pics/m4.jpg', category: 'model', title: 'Beauty Photography' },
    { url: '../assest/service gallery/model pics/m5.jpeg', category: 'model', title: 'Fashion Portrait' },
    { url: '../assest/service gallery/model pics/m6.jpeg', category: 'model', title: 'Model Session' },
    { url: '../assest/service gallery/model pics/m7.jpeg', category: 'model', title: 'Creative Model Shoot' },
    { url: '../assest/service gallery/model pics/m8.jpeg', category: 'model', title: 'Professional Model' },
    { url: '../assest/service gallery/model pics/m9.jpeg', category: 'model', title: 'Model Art' },
    
    // Baby Images
    { url: '../assest/service gallery/baby/b1.jpeg', category: 'baby', title: 'Baby Photography' },
    { url: '../assest/service gallery/baby/b2.jpeg', category: 'baby', title: 'Newborn Session' },
    { url: '../assest/service gallery/baby/b3.jpeg', category: 'baby', title: 'Baby Portraits' },
    { url: '../assest/service gallery/baby/b4.jpeg', category: 'baby', title: 'Baby Milestones' },
    { url: '../assest/service gallery/baby/b5.jpeg', category: 'baby', title: 'Baby Moments' },
    { url: '../assest/service gallery/baby/b6.jpeg', category: 'baby', title: 'Baby Art' },
    { url: '../assest/service gallery/baby/b7.jpeg', category: 'baby', title: 'Baby Session' },
    { url: '../assest/service gallery/baby/b8.jpeg', category: 'baby', title: 'Baby Photography' },
    { url: '../assest/service gallery/baby/b9.jpeg', category: 'baby', title: 'Baby Love' },
    { url: '../assest/service gallery/baby/b10.jpeg', category: 'baby', title: 'Baby Memories' },
    { url: '../assest/service gallery/baby/b11.jpeg', category: 'baby', title: 'Baby Joy' },
    { url: '../assest/service gallery/baby/b12.jpeg', category: 'baby', title: 'Baby Dreams' },
    { url: '../assest/service gallery/baby/b13.JPG', category: 'baby', title: 'Baby Smiles' },
    { url: '../assest/service gallery/baby/b14.jpg', category: 'baby', title: 'Baby Wonder' },
    { url: '../assest/service gallery/baby/b15.jpg', category: 'baby', title: 'Baby Magic' },
    { url: '../assest/service gallery/baby/b16.JPG', category: 'baby', title: 'Baby Bliss' },
    { url: '../assest/service gallery/baby/b17.JPG', category: 'baby', title: 'Baby Cuteness' },
    { url: '../assest/service gallery/baby/b18.JPG', category: 'baby', title: 'Baby Angels' },
    { url: '../assest/service gallery/baby/b19.JPG', category: 'baby', title: 'Baby Precious' },
    { url: '../assest/service gallery/baby/b20.JPG', category: 'baby', title: 'Baby Sweetness' },
    
    // Baby Shower Images
    { url: '../assest/service gallery/baby shower/bs1.jpg', category: 'baby', title: 'Baby Shower Celebration' },
    { url: '../assest/service gallery/baby shower/bs2.jpg', category: 'baby', title: 'Baby Shower Event' },
    { url: '../assest/service gallery/baby shower/bs3.JPG', category: 'baby', title: 'Baby Shower Photography' },
    { url: '../assest/service gallery/baby shower/bs4.JPG', category: 'baby', title: 'Baby Shower Moments' },
    { url: '../assest/service gallery/baby shower/bs5.JPG', category: 'baby', title: 'Baby Shower Joy' },
    
    // Birthday Images
    { url: '../assest/service gallery/birthday/bd1.jpeg', category: 'videography', title: 'Birthday Celebration' },
    { url: '../assest/service gallery/birthday/bd2.jpeg', category: 'videography', title: 'Birthday Party' },
    { url: '../assest/service gallery/birthday/bd3.jpeg', category: 'videography', title: 'Birthday Event' },
    { url: '../assest/service gallery/birthday/bd4.jpeg', category: 'videography', title: 'Birthday Photography' },
    { url: '../assest/service gallery/birthday/bd5.jpeg', category: 'videography', title: 'Birthday Moments' },
    { url: '../assest/service gallery/birthday/bd6.jpeg', category: 'videography', title: 'Birthday Fun' },
    { url: '../assest/service gallery/birthday/bd7.jpeg', category: 'videography', title: 'Birthday Joy' },
    { url: '../assest/service gallery/birthday/bd8.jpeg', category: 'videography', title: 'Birthday Memories' },
    
    // Corporate Images
    { url: '../assest/service gallery/corp/c1.jpeg', category: 'corporate', title: 'Corporate Event' },
    { url: '../assest/service gallery/corp/c2.jpeg', category: 'corporate', title: 'Corporate Photography' },
    { url: '../assest/service gallery/corp/c3.jpeg', category: 'corporate', title: 'Business Event' },
    { url: '../assest/service gallery/corp/c4.jpeg', category: 'corporate', title: 'Corporate Session' },
    { url: '../assest/service gallery/corp/c5.jpeg', category: 'corporate', title: 'Professional Photography' },
    
    // Drone Images
    { url: '../assest/service gallery/drone/d1.jpeg', category: 'drone', title: 'Aerial Photography' },
    { url: '../assest/service gallery/drone/d2.jpeg', category: 'drone', title: 'Drone Shoots' },
    { url: '../assest/service gallery/drone/d3.jpeg', category: 'drone', title: 'Aerial View' },
    { url: '../assest/service gallery/drone/d4.jpeg', category: 'drone', title: 'Drone Cinematography' },
    { url: '../assest/service gallery/drone/d5.jpeg', category: 'drone', title: 'Aerial Landscape' }
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
