const currentDate = new Date();
console.log('Current Date and Time:', currentDate);

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
const shortDateFormat = `Formatted Date (MM/DD/YYYY): ${formatDateMMDDYYYY(currentDate)}`;
console.log(shortDateFormat);

function formatDateLong(date) {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
const longDateFormat = `Formatted Date (Month Day, Year): ${formatDateLong(currentDate)}`;
console.log(longDateFormat);