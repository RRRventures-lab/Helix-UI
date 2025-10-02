import React from 'react';
import { mockMerch } from '../data/mockData';
import { Button } from '../components/ui/button';
import { ExternalLink } from 'lucide-react';

const Merch = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black text-blue-600 mb-8">
            SHOP HELIX MERCH
          </h1>
          <p className="text-xl text-gray-600">
            Represent the movement with official Helix Records merchandise
          </p>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mockMerch.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      {item.price}
                    </p>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      Shop Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            WEAR THE MUSIC
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Every piece of Helix merchandise is designed with the same attention to detail and passion that goes into our music. From concert-ready apparel to collector's items, our merch lets you carry the Helix vibe wherever you go.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&crop=center"
                alt="Model wearing Helix merch" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-700 mb-6">
                All our merchandise is crafted with premium materials and sustainable practices. We believe in quality that lasts as long as our music.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View All Items
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Merch;