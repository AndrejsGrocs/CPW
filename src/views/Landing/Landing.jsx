import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import SearchMenu from '../../components/SearchMenu/SearchMenu';

export default function Landing() {
  const [image, setImage] = useState('');
  const [imageData, setImageData] = useState();
  const [facts, setFacts] = useState(null);

  //****************************************** */

  return (
    <div className="sectionContainer">
      <Banner />

      <SearchMenu
        image={image}
        setImage={setImage}
        setImageData={setImageData}
        setFacts={setFacts}
      />

      <Card imageData={imageData} facts={facts} setFacts={setFacts} />
    </div>
  );
}
