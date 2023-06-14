// Function to get donors ready to donate
function getReadyToDonateDonors() {
  const currentDate = new Date();

  const result = bloodDonars.filter((donor) => {
    const lastDonationDate = new Date(donor.lastDonationDate);
    const daysSinceLastDonation = Math.floor(
      (currentDate - lastDonationDate) / (1000 * 60 * 60 * 24)
    );
    return daysSinceLastDonation >= 120;
  });

  return result;
}

const readyToDonateDonors = getReadyToDonateDonors();
console.table(readyToDonateDonors);
