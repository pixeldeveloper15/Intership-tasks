// document.addEventListener("DOMContentLoaded", function () {
//     const plans = document.querySelectorAll('.plan');
//     const currencyDropdown = document.getElementById('currency');

//     // Add click event listener to each plan
//     plans.forEach(plan => {
//         plan.addEventListener('click', function () {
//             plans.forEach(p => p.classList.remove('highlight'));
//             this.classList.add('highlight');
//         });
//     });

//     // Add hover effect for plans
//     plans.forEach(plan => {
//         plan.addEventListener('mouseover', function () {
//             this.classList.add('hover');
//         });

//         plan.addEventListener('mouseout', function () {
//             this.classList.remove('hover');
//         });
//     });

//     // Add change event listener to currency dropdown
//     currencyDropdown.addEventListener('change', function () {
//         const selectedCurrency = this.value;
//         updatePrices(selectedCurrency);
//     });

//     // Function to update prices based on selected currency
//     function updatePrices(currency) {
//         plans.forEach(plan => {
//             const priceElement = plan.querySelector('.price');
//             const currentPrice = priceElement.innerText;
//             const newPrice = currentPrice.replace(/\d+/g, match => {
//                 const numericValue = parseInt(match);
//                 return isNaN(numericValue) ? match : numericValue * getExchangeRate(currency);
//             });
//             priceElement.innerText = newPrice + currency;
//         });
//     }

//     // Function to get exchange rate (you can replace this with real exchange rate logic)
//     function getExchangeRate(currency) {
//         switch (currency) {
//             case '€':
//                 return 0.85; // Example exchange rate for EUR to USD
//             case '£':
//                 return 0.75; // Example exchange rate for GBP to USD
//             default:
//                 return 1; // USD to USD (no conversion)
//         }
//     }
// });
