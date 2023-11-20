const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

// New freelancers
const newFreelancers = [
  { name: "Dr. Newbie", price: 55, occupation: "designer" },
  { name: "Prof. Fresh", price: 60, occupation: "writer" },
  // Add more new freelancers as needed
];

// Function to calculate the average starting price
function calculateAveragePrice(freelancers) {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length;
  return averagePrice.toFixed(2);
}

// Function to update the freelancers list and average starting price
function updateFreelancersList() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = '';

  // Combine the existing freelancers with the new freelancers
  const allFreelancers = [...freelancers, ...newFreelancers];

  allFreelancers.forEach(freelancer => {
    const row = `<tr>
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });

  // Update the average starting price
  const averagePrice = calculateAveragePrice(allFreelancers);
  document.getElementById('averagePrice').textContent = `$${averagePrice}`;
}

// Call the update function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateFreelancersList();
});

// Add a new freelancer every 5 seconds
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * newFreelancers.length);
  const newFreelancer = newFreelancers[randomIndex];
  freelancers.push(newFreelancer);
  updateFreelancersList();
}, 5000);
