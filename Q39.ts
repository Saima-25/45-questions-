/* Write a function called city_country() that takes in the name of a city and its country.
   The function should return a string formatted like this:

 "Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city_name: string, country_name: string) {
  return `${city_name}, ${country_name} `;
}

console.log(city_country("Makkah", "KSA"));
console.log(city_country("Rafah", "Palestine"));
console.log(city_country("Muree", "Pakistan"));
