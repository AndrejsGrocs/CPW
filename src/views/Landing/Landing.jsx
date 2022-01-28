import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import SearchMenu from '../../components/SearchMenu/SearchMenu';

export default function Landing() {
  const [searchInput, setSearchInput] = useState(null);
  const [facts, setFacts] = useState(null);
  const [imageFromEdamam, setImageFromEdamam] = useState(null);
  const [productTitle, setProductTitle] = useState('');

  return (
    <div className="sectionContainer">
      <Banner />

      <SearchMenu
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setImageFromEdamam={setImageFromEdamam}
        setFacts={setFacts}
        setProductTitle={setProductTitle}
      />

      {facts !== null ? (
        <Card
          imageFromEdamam={imageFromEdamam}
          setImageFromEdamam={setImageFromEdamam}
          facts={facts}
          setFacts={setFacts}
          productTitle={productTitle}
        />
      ) : null}

      <h2></h2>
      <h3></h3>
    </div>
  );
}
