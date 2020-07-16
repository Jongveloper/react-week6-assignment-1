import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (restaurant === null || restaurant === undefined) {
    return (
      <h1>Loading...</h1>
    );
  }

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>

  );
}
