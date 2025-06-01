
import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Users, Award, Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    category: '',
    eventDetails: '',
    personNames: '',
    duration: '',
    time: '',
    venue: '',
    message: '',
    acceptTerms: false
  });

  const services = [
    { title: 'Wedding Shoots', icon: Heart, description: 'Capture your special day with elegance' },
    { title: 'Event Shoots', icon: Camera, description: 'Professional event photography' },
    { title: 'Drone Shoots', icon: Play, description: 'Aerial photography and videography' },
    { title: 'Videography', icon: Play, description: 'Cinematic video production' },
    { title: 'Baby Shoots', icon: Heart, description: 'Precious moments with your little ones' },
    { title: 'Ad Films', icon: Camera, description: 'Commercial photography and films' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Weddings Captured' },
    { number: '150+', label: 'Commercial Shoots' },
    { number: '1000+', label: 'Happy Clients' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500',
    'https://images.unsplash.com/photo-1525258801921-35ba50f0ddfc?w=500',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500'
  ];

  const handleBookingSubmit = () => {
    const message = `New Booking Request from Marvel Snaps Website
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Category: ${formData.category}
Event Details: ${formData.eventDetails}
Person Names: ${formData.personNames}
Duration: ${formData.duration}
Time: ${formData.time}
Venue: ${formData.venue}
Additional Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918098449639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/1062a8ed-c8c5-471b-86e8-f96695647fb1.png")'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-marvel-yellow curved-section-outward">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
            Welcome to Marvel Snaps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400" 
                alt="Photography 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform rotate-2"
              />
            </div>
            <div className="hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400" 
                alt="Photography 2"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400" 
                alt="Photography 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform -rotate-2"
              />
            </div>
          </div>

          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            We are passionate storytellers dedicated to capturing your precious moments through our lens. 
            Every photograph is a window to a beautiful memory, crafted with love and artistic vision.
          </p>

          <Button 
            onClick={() => window.location.href = '/about'}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3"
          >
            View Our Story
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-marvel-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold text-marvel-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional photography and videography services tailored to capture your most precious moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-marvel-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/services'}
              className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3"
            >
              View More Services
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Gallery
            </h2>
            <p className="text-lg text-gray-600">A glimpse into our portfolio of captured moments</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="hover-lift cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.location.href = '/gallery'}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-marvel-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create beautiful memories together
          </p>
          
          {!showBookingForm ? (
            <Button 
              onClick={() => setShowBookingForm(true)}
              className="bg-marvel-yellow text-black hover:bg-yellow-400 text-lg px-8 py-3"
            >
              Book Now
            </Button>
          ) : (
            <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Booking Form</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input
                  placeholder="Email (optional)"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Input
                  placeholder="Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
                <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Category *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding Shoots</SelectItem>
                    <SelectItem value="event">Event Shoots</SelectItem>
                    <SelectItem value="drone">Drone Shoots</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="baby">Baby Shoots</SelectItem>
                    <SelectItem value="commercial">Ad Films</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
                <Input
                  placeholder="Time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
                <Input
                  placeholder="Person Names (optional)"
                  value={formData.personNames}
                  onChange={(e) => setFormData({...formData, personNames: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Place/Venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({...formData, venue: e.target.value})}
                  className="mb-4"
                />
                <Textarea
                  placeholder="Event Details"
                  value={formData.eventDetails}
                  onChange={(e) => setFormData({...formData, eventDetails: e.target.value})}
                  className="mb-4"
                />
                <Textarea
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <Checkbox 
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                />
                <label htmlFor="terms" className="text-sm">
                  I accept the Terms & Conditions
                </label>
              </div>
              <Button 
                onClick={handleBookingSubmit}
                disabled={!formData.name || !formData.phone || !formData.category || !formData.acceptTerms}
                className="w-full bg-marvel-yellow text-black hover:bg-yellow-400"
              >
                Book Now
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
