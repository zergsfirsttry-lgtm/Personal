const startButton = document.getElementById('start-button');
const startHint = document.getElementById('start-hint');
const restaurantTypes = [
  'ramen',
  'tacos',
  'pizza',
  'thai food',
  'burgers',
  'sushi',
  'indian food',
  'mediterranean food'
];

startButton.addEventListener('click', () => {
  const restaurantType = restaurantTypes[Math.floor(Math.random() * restaurantTypes.length)];
  const mapsQuery = encodeURIComponent(`${restaurantType} restaurant open now near me`);
  window.location.assign(`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`);
  startButton.textContent = 'Decision made';
  startHint.textContent = 'Google Maps is finding an open restaurant nearby.';
  startButton.setAttribute('aria-label', 'Decision made. Google Maps is finding an open restaurant nearby.');
});
