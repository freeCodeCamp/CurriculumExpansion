const currentDate = new Date();
console.log('Current Date and Time:', currentDate);

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
console.log('Formatted Date (MM/DD/YYYY):', formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
console.log('Formatted Date (Month Day, Year):', formatDateLong(currentDate));