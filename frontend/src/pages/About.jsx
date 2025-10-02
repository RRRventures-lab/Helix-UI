import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black text-blue-600 mb-12">
            ABOUT HELIX RECORDS
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-700 leading-relaxed space-y-8">
            <p className="text-2xl font-medium text-gray-900 mb-8">
              Established in April 2022, Helix Records is a multi-territory independent home for the world's best new electronic dance music.
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

      {/* Artists Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            OUR ARTISTS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              'Snakehips', 'Jamie Jones', 'Netsky', 'San Holo',
              'AR/CO', 'Two Friends', 'Marshall Jefferson', 'Andruss',
              'Maesic', 'Pocket', 'Motherearth', 'Shimza'
            ].map((artist, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {artist.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{artist}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            OUR VISION
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Helix Records, we believe in the power of electronic music to unite people across cultures, backgrounds, and borders. We're not just releasing tracks—we're crafting experiences that resonate with the soul and move the body. Our commitment is to discover, develop, and deliver the most innovative sounds in electronic dance music.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;