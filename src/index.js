
// index.js
const ramenMenu = document.getElementById("ramen-menu");
let detailImage = document.getElementById("detail-image");
let nameD = document.getElementById("name-d");
let restaurant= document.getElementById("restaurant-d");
let rating = document.getElementById("rating-display");
let comment = document.getElementById("comment-display");
// Callback
const handleClick = (ramen) => {
  detailImage.src = ramen.image;
  nameD.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;

}
   // Add code
 const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", (event) => {
  event.preventDefault();

  const newObject = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value,
  };
  addImage(newObject);
  event.target.reset();

 });
};
//Grab the ramen menu
//GET request for ramen bar
function displayRamens() {
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramenR => newImages(ramenR));
  
 }
// append images to 
function newImages (imgRamen) {
  imgRamen.forEach((ramen) => addImage(ramen));
  }
  
function addImage (imgUrl){
  const ramenIm = document.createElement("img");
  ramenIm.src = imgUrl.image;
  ramenMenu.append(ramenIm);
  ramenIm.addEventListener("click", () => handleClick(imgUrl));
}


 
const main = () => {
  displayRamens();
  addSubmitListener();
  // handleClick;

  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
