export async function fetchRegions() {
  const url = '/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants'
    + `?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurantDetail({ restaurantId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants/${restaurantId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
