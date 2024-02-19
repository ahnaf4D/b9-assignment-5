const selectSeats = document.querySelectorAll(".seat-number");
const seatAdding = document.getElementById("seat-adding");
let totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total-fare");
// Per Bus Fare
const busFare = document.getElementById("per-fare");
const busFareText = busFare.innerText;
const busFareValue = parseInt(busFareText);
// Total Price
let totalPriceText = totalPrice.innerText;
let totalPriceValue = parseInt(totalPriceText);
// Seat Count here
let seatCount = document.getElementById("seat-count");
let seatCountText = seatCount.innerText;
// Seat Remaining
let seatRemain = document.getElementById("seat-left");
const seatCountValue = parseInt(seatCountText);
const selectSeatsArr = Array.prototype.slice.call(selectSeats);
let count = 0;
for (const seat of selectSeatsArr) {
  const allSeat = seat;
  allSeat.addEventListener("click", function (event) {
    count = count + 1;
    allSeat.style.backgroundColor = "#1DD100";
    seatCount.innerText = count;

    const seatCountValue = parseInt(seatCount.innerText);
    seatRemain.innerText -= 1;
    const seatPosition = event.target.innerText;
    let createP = document.createElement("p");
    createP.innerText = `${seatPosition} Economoy 550`;
    createP.classList.add(
      `text-center`,
      `block`,
      `inter-font`,
      `text-[#03071299]`,
      `font-normal`
    );
    seatAdding.classList.add(`text-center`);
    seatAdding.appendChild(createP);
    const finalBusFare = busFareValue * seatCountValue;
    totalPrice.innerText = `${finalBusFare}`;
    grandTotal.innerText = `${finalBusFare}`;
  });
}
