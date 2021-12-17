import React from 'react';
import Card from '../../components/Card';

export default function CardsContainer({ imageData }) {
  return (
    <div className="cards-container">
      {imageData.map((item) => (
        <Card data={item} key={item.imdbID} />
      ))}
    </div>
  );
}
