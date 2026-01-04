// src/components/MovieCard.tsx
import React from 'react';

interface MovieCardProps {
  imageUrl: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative w-40 h-60 md:w-48 md:h-72 flex-shrink-0 cursor-pointer group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <p className="text-white text-sm font-semibold truncate">{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;