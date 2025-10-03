import React from 'react';

const ReleaseCard = ({ release }) => {
  return (
    <div className="group cursor-pointer">
      <a 
        href={release.spotifyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden">
          <div className="aspect-square">
            <img 
              src={release.artwork} 
              alt={`${release.artist} - ${release.title}`}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
              loading="lazy"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReleaseCard;