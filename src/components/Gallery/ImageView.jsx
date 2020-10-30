import React from 'react';
import { useParams } from 'react-router-dom';

import Image from './Image';

export default function ImageView ({ resource }) {
  const { name } = useParams();
  console.log(name);
  const image = resource.find(obj => obj.name === name);

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <Image id={image.id} name={image.name} />
    </div>
  );
}
