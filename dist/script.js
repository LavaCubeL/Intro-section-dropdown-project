const featuresButton = document.querySelector('#features-button');
const featuresArrow = document.querySelector('#features-arrow');
const featuresDropdown = document.querySelector('#features-dropdown');
const companyButton = document.querySelector('#company-button');
const companyArrow = document.querySelector('#company-arrow');
const companyDropdown = document.querySelector('#company-dropdown');

// Adds an event listener to the features button to toggle the visibility of the dropdown and rotate the arrow
featuresButton.addEventListener('click', () => {
  featuresDropdown.classList.toggle('hidden');
  featuresArrow.classList.toggle('rotate-180');
});

// Adds an event listener to the company button to toggle the visibility of the dropdown and rotate the arrow
companyButton.addEventListener('click', () => {
  companyDropdown.classList.toggle('hidden');
  companyArrow.classList.toggle('rotate-180');
});



// Get references to the button and sidebar elements
// Get references to the button and sidebar elements

// Get references to the button and sidebar elements
const menuButton = document.querySelector('#menu-button');
const sidebar = document.querySelector('#sidebar');

const testingArrow  = document.querySelector('#features-button1')

const companyArrow2 = document.querySelector('#company-arrow1');



const testSlidedown = document.querySelector('#features-dropdown-1')
// Adds an event listener to the button element
menuButton.addEventListener('click', () => {
  // Toggle the translate-x-full class on the sidebar element
  sidebar.classList.toggle('translate-x-full');

});

testingArrow.addEventListener('click', () => {

  companyArrow2.classList.toggle('rotate-180');
})
const menuContent = document.querySelector('#dP-1');

testingArrow.addEventListener('click', () => {
  // Toggle the max-h-0 class to show/hide the features dropdown
menuContent.classList.toggle('max-h-0');
});

const companyArrow3 = document.querySelector('#company-arrow-2');


companyArrow3.addEventListener('click', () => {
  // Toggle the max-h-0 class to show/hide the features dropdown
  companyArrow3.classList.toggle('rotate-180');
});

const menuContent2 = document.querySelector('#dP-2');
companyArrow3.addEventListener('click', () => {
  // Toggle the max-h-0 class to show/hide the features dropdown
  menuContent2.classList.toggle('max-h-0');
});

const closeButton = document.querySelector('#close-button');

closeButton.addEventListener('click', () => {
  // Closes the sidebar
  document.getElementById('sidebar').classList.toggle('translate-x-full');
});