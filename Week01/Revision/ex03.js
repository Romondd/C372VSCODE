const pets = [
  { name: "chester", paymentStatus: "APPROVED" },
  { name: "mochi", paymentStatus: "PENDING" },
  { name: "mira", paymentStatus: "DECLINED" }
];

// a) Display Mochi's payment status.
const mochi = pets[1];
console.log("Mochis payment status: " + mochi.paymentStatus);

// b) Display the payment details for each pet using a loop.
for (const pet of pets) {
  if (pet.paymentStatus === "APPROVED") {
    console.log("Pet-care service for " + pet.name + " confirmed");
  } else if (pet.paymentStatus === "PENDING") {
    console.log("payment for " + pet.name + " is being processed");
  } else if (pet.paymentStatus === "DECLINED") {
    console.log("payment for " + pet.name + " unsuccessful");
  }
}
