import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '⏳', // Replace with actual icon/image
      title: 'Quick Delivery',
      description: 'Get results within 24 hours (48 hours for virtual staging).',
    },
    {
      icon: '🐷', // Replace with actual icon/image
      title: 'No Recurring Fees',
      description: 'Pay per image—no subscriptions, just simple pricing.',
    },
    {
      icon: '🔄', // Replace with actual icon/image
      title: 'Endless Revisions',
      description: 'We guarantee 100% satisfaction with unlimited modifications.',
    },
    {
      icon: '📞', // Replace with actual icon/image
      title: '24/7 Support',
      description: 'Our team is available round the clock via live chat, phone, or email.',
    },
    {
      icon: '🖼️', // Replace with actual icon/image
      title: 'Full Ownership',
      description: 'Your images remain yours—no hidden copyright claims.',
    },
    {
      icon: '🎁', // Replace with actual icon/image
      title: 'Free Sample',
      description: 'Try us out with 3 free enhancements and a day-to-dusk edit.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Premium Editing, Staging & Floor Plan Services at Unbeatable Rates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl transition-transform transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
