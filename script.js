// Initialize map centered on Cardiff (you can change coords)
const map = L.map('map').setView([51.4816, -3.1791], 13);

// Add tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map);

// Example locations
const locations = [
  {
    name: "Cardiff Blood Donation Centre",
    lat: 51.4821,
    lon: -3.1800,
    description: "Give blood and save lives."
  },
  {
    name: "Local Food Bank",
    lat: 51.4845,
    lon: -3.1710,
    description: "Donate canned goods here."
  }
];

// Add markers
locations.forEach(loc => {
  L.marker([loc.lat, loc.lon])
    .addTo(map)
    .bindPopup(`<b>${loc.name}</b><br>${loc.description}`);
});
