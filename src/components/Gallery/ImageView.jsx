import React from 'react';
import { useParams } from 'react-router-dom';

import Image from './Image';

export default function ImageView ({ pics }) {
  const { name } = useParams();
  const image = pics.find(obj => obj.name === name);
  console.log(name);

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <Image id={image.id} name={image.name} />
    </div>
  );
}
