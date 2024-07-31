let currentDate = new Date();
console.log('Current Date and Time:', currentDate);

function formatDateMMDDYYYY(date) {
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  let year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
console.log('Formatted Date (MM/DD/YYYY):', formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}
console.log('Formatted Date (Month Day, Year):', formatDateLong(currentDate));