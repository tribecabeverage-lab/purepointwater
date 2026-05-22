'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  {
    name: 'John DeYonker',
    bio: 'Perhaps the tallest guy in the water game, invested in water in 2020 and has been hooked on clean water since.',
    image: '/JD image final.png',
  },
  {
    name: 'Dylan Tracy',
    bio: '6\'7″ outdoorsman who\'s always with his steel canteen.',
    image: '/Dylan Image.png',
  },
];

export default function TeamSlider() {
  const [currentMember, setCurrentMember] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % team.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={team[currentMember].image}
                      alt={team[currentMember].name}
                      className="w-full h-full object-cover object-center rounded-l-lg"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {team[currentMember].name}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {team[currentMember].bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {team.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentMember ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentMember(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}