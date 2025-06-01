import React from 'react';
import { Card, CardContent } from "@/components/ui/card"

const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning wedding photography that tells your unique love story.',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Couple portraits'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      category: 'wedding'
    },
    {
      title: 'Event Photography',
      description: 'Professional event photography for corporate events, parties, and special occasions.',
      features: ['Corporate events', 'Birthday parties', 'Anniversary celebrations', 'Award ceremonies'],
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
      category: 'event'
    },
    {
      title: 'Drone Photography',
      description: 'Aerial photography and videography services for breathtaking perspectives.',
      features: ['Aerial shots', 'Real estate photography', 'Event coverage', 'Landscape photography'],
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600',
      category: 'drone'
    },
    {
      title: 'Commercial Photography',
      description: 'Professional commercial photography for businesses, products, and advertising.',
      features: ['Product photography', 'Corporate headshots', 'Brand photography', 'Marketing materials'],
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600',
      category: 'commercial'
    },
    {
      title: 'Baby Photography',
      description: 'Precious moments with your little ones captured beautifully.',
      features: ['Newborn photography', 'Baby milestones', 'Family portraits', 'Maternity shoots'],
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
      category: 'baby'
    },
    {
      title: 'Portrait Photography',
      description: 'Professional portrait photography for individuals and families.',
      features: ['Individual portraits', 'Family sessions', 'Professional headshots', 'Lifestyle photography'],
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
      category: 'portrait'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional photography services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-md" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
