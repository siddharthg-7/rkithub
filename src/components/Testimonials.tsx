import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amit Kumar',
      role: 'Java Developer',
      company: 'TCS',
      review: 'The Java Full Stack course was excellent. The trainer had deep knowledge and the real-time projects helped me clear my interviews with confidence.',
      avatar: 'AK',
    },
    {
      name: 'Priya Sharma',
      role: 'Python Developer',
      company: 'Infosys',
      review: 'I joined the Python course with no coding background. The step-by-step approach and patience of the trainer made it easy for me to learn.',
      avatar: 'PS',
    },
    {
      name: 'Rahul Verma',
      role: 'MERN Stack Developer',
      company: 'Wipro',
      review: 'Great place to learn web development. The placement assistance is real, they helped me prepare my resume and scheduled interviews.',
      avatar: 'RV',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07294D] font-sans">What Our Students Say</h2>
          <p className="text-gray-600 mt-2 font-sans">Hear from our successfully placed students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm mb-6 font-sans flex-grow">"{testimonial.review}"</p>

              {/* Student Info */}
              <div className="flex items-center gap-4 border-t border-gray-50 pt-4 mt-auto">
                <div className="w-10 h-10 bg-blue-50 text-[#07294D] rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role} at <span className="font-semibold text-[#07294D]">{testimonial.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
