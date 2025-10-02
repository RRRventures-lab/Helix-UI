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
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-9xl font-black text-blue-600 mb-8 tracking-wider">
            HELIX RECORDS
          </h1>
          <div className="flex justify-end pr-16">
            <div className="flex flex-col space-y-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Releases Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            RECENT RELEASES
          </h2>
          
          {/* Releases Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12">
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            HELIX RECORDS
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              established in April 2022, is a multi-territory independent home for
              the world's best new electronic dance music.
            </p>
            <p>
              The electronic dance music label has already signed several high-profile new artists including renowned electronic duo Snakehips, dance icon Jamie Jones, drum and bass legend Netsky, Dutch artist/producer San Holo, British-Australian band AR/CO, party rockers Two Friends, legendary house DJ/producer Marshall Jefferson who is one half of Grammy-nominated Ten City, Latin house hot shot Andruss, and many more noteworthy artists.
            </p>
            <p>
              Founded by Patrick Moxey, Helix has cultivated a diverse and eclectic roster, showcasing the best and brightest talents from across the globe. As Helix Records continues to evolve and expand its influence, one thing remains clear: this is more than just a record label—it's a movement.
            </p>
          </div>
        </div>
      </section>

      {/* Merch Preview Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            SHOP HELIX MERCH
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center max-w-4xl mx-auto">
            {/* T-Shirt */}
            <div className="text-center group">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center"
                  alt="Helix Records Disco Ball T-Shirt" 
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Disco Logo Tee</h3>
              </div>
            </div>

            {/* Sweater */}
            <div className="text-center group">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center"
                  alt="Helix Records Disco Ball Sweater" 
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Disco Logo Crewneck</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;