import React from 'react';

import { Code, Smartphone, Bot, Globe } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div
   
    className="bg-[#142532] cardsrvc rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
  >
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#21ebd6] text-[#142532]">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-[#21ebd6]">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Crafting bespoke, responsive websites that captivate and convert.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Building intuitive, powerful mobile applications for iOS and Android.',
    },
    {
      icon: Bot,
      title: 'Web Scraping & Automation',
      description: 'Harnessing data and streamlining processes with cutting-edge automation.',
    },
    {
      icon: Globe,
      title: 'Domain Consultancy',
      description: 'Strategic guidance on domain acquisition, management, and optimization.',
    },
  ];

  return (
    <section id='services' className="py-20 bg-[#142532]">
      <div className="container mx-auto px-4">
        <h2
        
         
          className="text-5xl font-bold text-center font-scnd mb-16 text-[#21ebd6]"
        >
         My Provided Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
   
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

