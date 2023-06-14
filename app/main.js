const search = prompt("Search Here : ");

const searchResult = bloodDonars.filter(
  (data) =>
    data.bloodGroup === search ||
    data.phoneNumber === search ||
    data.donationHistry === search ||
    data.isAvailable === search
);

console.table(searchResult);
