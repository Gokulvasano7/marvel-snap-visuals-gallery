
import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Instagram, Award, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import studio from '@/assest/videos/studio.webm'; // Assuming you have a studio image in your assets

const About = () => {
  const [isMuted, setIsMuted] = useState(true);

  const stats = [
    { number: '500+', label: 'Projects', icon: Camera },
    { number: '100+', label: 'Weddings', icon: Award },
    { number: '150+', label: 'Commercial', icon: Users },
    { number: '1000+', label: 'Happy Clients', icon: Award }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Lead Photographer',
      description: 'With over 8 years of experience in wedding and portrait photography, Rajesh brings artistic vision and technical expertise to every shoot.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      instagram: '@rajesh_marvelsnaps'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      description: 'Priya specializes in conceptual photography and videography, creating stunning visual narratives that capture emotions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b69c?w=400',
      instagram: '@priya_creative'
    },
    {
      name: 'Arjun Patel',
      role: 'Drone Specialist',
      description: 'Expert in aerial photography and cinematography, Arjun captures breathtaking perspectives from above.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      instagram: '@arjun_aerials'
    }
  ];

  const additionalTeam = [
    { name: 'Sneha Reddy', role: 'Event Photographer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
    { name: 'Vikram Singh', role: 'Video Editor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' },
    { name: 'Meera Joshi', role: 'Assistant Photographer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted={isMuted} 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={studio} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <Button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-24 right-8 bg-black/50 text-white hover:bg-black/70"
          size="icon"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
            Marvel Snaps
          </h1>
          <p className="text-xl md:text-2xl italic">
            "Photography is the push button of life"
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-marvel-yellow rounded-lg flex items-center justify-center mr-6">
                  <span className="font-bold text-2xl text-black">M</span>
                </div>
                <h2 className="text-4xl font-bold text-black">Our Story</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are passionate storytellers dedicated to capturing your precious moments through our lens. 
                  Founded with a vision to transform fleeting moments into timeless memories, Marvel Snaps has 
                  become a trusted name in photography and videography.
                </p>
                <p>
                  Our journey began with a simple belief: every moment has a story worth telling. From intimate 
                  wedding ceremonies to grand celebrations, from corporate events to personal milestones, we 
                  approach each project with creativity, professionalism, and an eye for detail.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your vision and bringing it to life 
                  through our artistic expertise. We don't just take photographs; we create visual narratives 
                  that resonate with emotions and preserve memories for generations to come.
                </p>
                <p>
                  With state-of-the-art equipment and a team of skilled professionals, we ensure that every 
                  frame captures the essence of your special moments. Our diverse portfolio spans across 
                  weddings, events, commercial shoots, and artistic projects.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600" 
                alt="Our Story"
                className="w-full rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-marvel-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Achievements
            </h2>
            <p className="text-gray-300">Numbers that speak for our dedication and quality</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="w-16 h-16 bg-marvel-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-marvel-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals who bring creativity, expertise, and passion to every project
            </p>
          </div>

          <div className="space-y-16 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover-lift"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold mb-2 text-black">{member.name}</h3>
                  <p className="text-xl text-marvel-yellow mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                  <a 
                    href={`https://instagram.com/${member.instagram.substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-black hover:text-marvel-yellow transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>{member.instagram}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalTeam.map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-marvel-yellow">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
