import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <ul>
      {categories.map(category =>
        <Category {...category} key={category.id} />
      )}
    </ul>
  );
};

function Category ({ name, id, resources }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    setIsClicked(!isClicked);
  };

  return (
    <li className='nav-avg'>
      <a onClick={handleClick}>{name}</a>
      {isClicked && <Subcategory id={id} resources={resources} />}
    </li>
  );
};

function Subcategory ({ id, resources }) {
  return (
    <ul>
      {resources.map((res) => (
        <li key={res.id} className='nav-sub'>
          <Link to={`portfolio/${id}/${res.id}`}>
            {res.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
