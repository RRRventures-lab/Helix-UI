import React, { useState } from 'react';
import { mockReleases } from '../data/mockData';
import ReleaseCard from '../components/ReleaseCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';

const Releases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredReleases = mockReleases.filter(release =>
    release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    release.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredReleases.length));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black text-blue-600 mb-8">
            RELEASES
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore our complete catalog of electronic music
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              type="text"
              placeholder="Search releases or artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredReleases.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl text-gray-500">No releases found matching your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12">
                {filteredReleases.slice(0, visibleCount).map((release) => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredReleases.length && (
                <div className="text-center">
                  <Button 
                    onClick={loadMore}
                    variant="outline"
                    className="px-8 py-3 text-lg font-medium"
                  >
                    Load More Releases
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Releases;