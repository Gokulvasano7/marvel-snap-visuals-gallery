
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'marvelsnapsnpk@gmail.com',
      action: 'mailto:marvelsnapsnpk@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 80984 49639',
      action: 'tel:+918098449639'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91 80984 49639',
      action: 'https://wa.me/918098449639'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: 'No.2, Bathrakalaiyamman kovil complex, Kolumam main road, Neikkarapatti, Palani. 624615',
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/marvelsnapsnpk',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@marvelsnaps',
      color: 'hover:text-red-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New Contact Form Submission from Marvel Snaps Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/918098449639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Get In <span className="text-marvel-yellow">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding Photography</SelectItem>
                      <SelectItem value="event">Event Photography</SelectItem>
                      <SelectItem value="drone">Drone Photography</SelectItem>
                      <SelectItem value="videography">Videography</SelectItem>
                      <SelectItem value="family">Family & Baby Shoots</SelectItem>
                      <SelectItem value="commercial">Commercial Photography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  placeholder="Preferred Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
                <Textarea
                  placeholder="Tell us about your project and requirements *"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-marvel-yellow text-black hover:bg-yellow-400 py-3"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.message}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-marvel-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          {item.action ? (
                            <a 
                              href={item.action}
                              target={item.action.startsWith('http') ? '_blank' : '_self'}
                              rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-gray-600 hover:text-marvel-yellow transition-colors"
                            >
                              {item.info}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.info}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-marvel-yellow rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-marvel-yellow">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our studio in Palani</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.123456789!2d77.123456!3d10.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marvel Snaps Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
