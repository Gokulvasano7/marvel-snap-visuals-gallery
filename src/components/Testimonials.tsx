
import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  description: string;
}

interface TestimonialsProps {
  showAll?: boolean;
  title?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "December 2024",
    rating: 5,
    description: "Marvel Snaps captured our wedding day perfectly! The team was professional, creative, and made us feel comfortable throughout the shoot. The photos are absolutely stunning and we couldn't be happier with the results."
  },
  {
    id: 2,
    name: "Raj Patel",
    date: "November 2024",
    rating: 5,
    description: "Exceptional service for our corporate event photography. The team delivered high-quality images that perfectly represented our brand. Their attention to detail and professionalism was outstanding."
  },
  {
    id: 3,
    name: "Anita Kumar",
    date: "October 2024",
    rating: 5,
    description: "Amazing baby photoshoot experience! The photographers were so patient with our little one and created beautiful memories we'll treasure forever. Highly recommended for family photography."
  },
  {
    id: 4,
    name: "Vikram Singh",
    date: "September 2024",
    rating: 5,
    description: "The drone photography for our pre-wedding shoot was breathtaking! Marvel Snaps team has incredible creativity and technical skills. The aerial shots added a magical touch to our album."
  },
  {
    id: 5,
    name: "Meera Nair",
    date: "August 2024",
    rating: 5,
    description: "Outstanding portrait photography session. The team made me feel confident and captured my personality beautifully. The lighting and composition were perfect in every shot."
  },
  {
    id: 6,
    name: "Arjun Reddy",
    date: "July 2024",
    rating: 5,
    description: "Marvel Snaps delivered beyond our expectations for our anniversary celebration. The candid shots were natural and emotional, capturing genuine moments we'll cherish forever."
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="bg-gradient-to-br from-yellow-100/80 to-yellow-200/60 backdrop-blur-lg border border-yellow-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h3>
          <span className="text-sm text-gray-600 bg-white/50 px-2 py-1 rounded-full">
            {testimonial.date}
          </span>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < testimonial.rating
                  ? 'text-yellow-500 fill-yellow-500'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed flex-grow">
          {testimonial.description}
        </p>
      </div>
    </Card>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ showAll = false, title = "What Our Clients Say" }) => {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their amazing experiences with Marvel Snaps
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {displayTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {showAll && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
