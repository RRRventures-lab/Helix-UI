import React from 'react';
import { ExternalLink } from 'lucide-react';

const ReleaseCard = ({ release }) => {
  return (
    <div className="group cursor-pointer">
      <a 
        href={release.spotifyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
          <div className="aspect-square">
            <img 
              src={release.artwork} 
              alt={`${release.artist} - ${release.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
          </div>
        </div>
        
        {/* Track Info */}
        <div className="mt-3 px-1">
          <h3 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {release.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {release.artist}
          </p>
        </div>
      </a>
    </div>
  );
};