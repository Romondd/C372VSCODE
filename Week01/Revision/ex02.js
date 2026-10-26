const paymentStatus = "Approved";

const status = paymentStatus.toLowerCase();

if (status === "approved") {
  console.log("Pet-care service confirmed");
} else if (status === "pending") {
  console.log("Payment is being processed");
} else if (status === "declined") {
  console.log("Payment unsuccessful");
} else {
  console.log("Invalid payment status");
}
