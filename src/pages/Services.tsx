
import React from 'react';
import { Camera, Heart, Play, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      icon: Heart,
      description: 'Capture your special day with elegance and emotion',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Candid moments'],
      price: 'Starting from ₹25,000',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600',
      category: 'wedding'
    },
    {
      title: 'Event Photography',
      icon: Camera,
      description: 'Professional coverage for all your special events',
      features: ['Corporate events', 'Birthday parties', 'Anniversaries', 'Cultural celebrations'],
      price: 'Starting from ₹15,000',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
      category: 'event'
    },
    {
      title: 'Drone Photography',
      icon: Play,
      description: 'Stunning aerial perspectives for your memories',
      features: ['Aerial shots', '4K video recording', 'Landscape photography', 'Property coverage'],
      price: 'Starting from ₹8,000',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600',
      category: 'drone'
    },
    {
      title: 'Videography',
      icon: Play,
      description: 'Cinematic video production and storytelling',
      features: ['Wedding films', 'Event highlights', 'Commercial videos', 'Documentary style'],
      price: 'Starting from ₹20,000',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600',
      category: 'commercial'
    },
    {
      title: 'Baby & Family Shoots',
      icon: Heart,
      description: 'Precious moments with your little ones',
      features: ['Newborn photography', 'Family portraits', 'Maternity shoots', 'Milestone photos'],
      price: 'Starting from ₹10,000',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
      category: 'family'
    },
    {
      title: 'Commercial Photography',
      icon: Award,
      description: 'Professional photography for business needs',
      features: ['Product photography', 'Corporate headshots', 'Brand campaigns', 'Ad films'],
      price: 'Starting from ₹12,000',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      category: 'commercial'
    }
  ];

  const handleViewPhotos = (category: string) => {
    window.location.href = `/service-gallery?category=${category}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography and videography services tailored to capture your most precious moments
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-marvel-yellow rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-marvel-yellow rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-marvel-yellow mb-4">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="w-full bg-black text-white hover:bg-gray-800"
                    >
                      Book Now
                    </Button>
                    <Button 
                      onClick={() => handleViewPhotos(service.category)}
                      variant="outline"
                      className="w-full border-marvel-yellow text-marvel-yellow hover:bg-marvel-yellow hover:text-black"
                    >
                      View Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-marvel-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Marvel Snaps?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We bring passion, creativity, and professionalism to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-marvel-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Quality</h3>
              <p className="text-gray-300">
                High-end equipment and expert editing for stunning results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-marvel-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-300">
                Skilled photographers with years of experience in the industry
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-marvel-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Touch</h3>
              <p className="text-gray-300">
                We understand your vision and bring it to life with creativity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Session?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your photography needs and create something amazing together
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
