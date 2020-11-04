import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories ({ isHidden }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <ul>
      {categories.map(category =>
        <Category
          {...category}
          key={category.id}
          isHidden={isHidden}
        />
      )}
    </ul>
  );
};

function Category ({ name, id, resources, isHidden }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    setIsClicked(!isClicked);
  };

  const tabIndex = isHidden ? 0 : -1;

  return (
    <li className='nav-avg'>
      <button
        className='a-like-btn'
        onClick={handleClick}
        tabIndex={tabIndex}
      >
        {name}
      </button>
      {isClicked &&
        <Subcategory
          id={id}
          resources={resources}
          isHidden={isHidden}
        />}
    </li>
  );
};

function Subcategory ({ id, resources, isHidden }) {
  const tabIndex = isHidden ? 0 : -1;

  return (
    <ul>
      {resources.map((res) => (
        <li key={res.id} className='nav-sub'>
          <Link
            to={`portfolio/${id}/${res.id}`}
            tabIndex={tabIndex}
          >
            {res.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
