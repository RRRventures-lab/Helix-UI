import React, { useState } from 'react';
import { mockReleases } from '../data/mockData';
import ReleaseCard from '../components/ReleaseCard';
import { Button } from '../components/ui/button';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [visibleReleases, setVisibleReleases] = useState(10);
  
  const loadMore = () => {
    setVisibleReleases(prev => Math.min(prev + 10, mockReleases.length));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Large HELIX RECORDS Title */}
      <section className="pt-16 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-blue-600 mb-8 tracking-wider leading-none" style={{
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            fontWeight: '900',
            letterSpacing: '0.1em'
          }}>
            HELIX RECORDS
          </h1>
          {/* Decorative dots on the right */}
          <div className="absolute top-1/2 right-4 md:right-8 flex flex-col space-y-3 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Recent Releases Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-12 text-center tracking-wide">
            RECENT RELEASES
          </h2>
          
          {/* Releases Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-12">
            {mockReleases.slice(0, visibleReleases).map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleReleases < mockReleases.length && (
            <div className="text-center">
              <Button 
                onClick={loadMore}
                variant="outline"
                className="px-8 py-3 text-lg font-medium"
              >
                Load More
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-wide">
            HELIX RECORDS
          </h2>
          <div className="text-base text-gray-800 leading-relaxed space-y-4">
            <p>
              <strong>established in April 2022, is a multi-territory independent home for</strong>
            </p>
            <p>
              <strong>the world's best new electronic dance music.</strong>
            </p>
            <p className="mt-6">
              The electronic dance music label has already signed several high-profile new artists including renowned electronic duo Snakehips, dance icon Jamie Jones, drum and bass legend Netsky, Dutch artist/producer San Holo, British-Australian band AR/CO, party rockers Two Friends, legendary house DJ/producer Marshall Jefferson who is one half of Grammy-nominated Ten City, Latin house hot shot Andruss, and many more noteworthy artists.
            </p>
            <p>
              Founded by Patrick Moxey, Helix has cultivated a diverse and eclectic roster, showcasing the best and brightest talents from across the globe. As Helix Records continues to evolve and expand its influence, one thing remains clear: this is more than just a record label—it's a movement.
            </p>
          </div>
          
          {/* Merch Preview Images */}
          <div className="flex justify-center mt-12 space-x-8">
            <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop&crop=center"
                alt="Helix Merch Front" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=250&fit=crop&crop=center"
                alt="Helix Merch Back" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-12 tracking-wide">
            SHOP &nbsp;&nbsp; HELIX MERCH
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* T-Shirt */}
            <div className="text-center group">
              <div className="bg-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center"
                  alt="Helix Records Disco Ball T-Shirt" 
                  className="w-full h-96 object-cover mb-4 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>

            {/* Sweater */}
            <div className="text-center group">
              <div className="bg-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center"
                  alt="Helix Records Disco Ball Sweater" 
                  className="w-full h-96 object-cover mb-4 hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;