const packages = [
  {
    id: 1,
    image: "packages-img/rohtang-pass-tour.jpg",
    title: "Manali Rohtang Pass Adventure Tour Package",
    duration: "04 Nights / 05 Days",
    destination: "Delhi-Manali-Hampta Pass-Delhi",
    price: 3999,
    packageInclusion: {
      accomodation: "03 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },
  {
    id: 2,
    image: "packages-img/hampta-pass.jpg",
    title: "Manali Hampta Pass Adventure Tour Package",
    duration: "04 Nights / 05 Days",
    destination: "Delhi-Manali-Hampta Pass-Delhi",
    price: 4650,
    packageInclusion: {
      accomodation: "03 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },
  {
    id: 3,
    image: "packages-img/kufri-adventure-tour.jpg",
    title: "Shimla kufro Adventure Tour Package",
    duration: "04 Nights / 05 Days",
    destination: "Delhi-Shimla-Kufri-Delhi",
    price: 4800,
    packageInclusion: {
      accomodation: "03 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },
  {
    id: 4,
    image: "packages-img/kasol-trekking-tour.jpg",
    title: "Kasol Trekking Tour Package",
    duration: "03 Nights / 04 Days",
    destination: "Delhi-Kasol-Delhi",
    price: 5850,
    packageInclusion: {
      accomodation: "03 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },
  {
    id: 5,
    image: "packages-img/tosh-trek.jpg",
    title: "Kasol-Kheerganga-Tosh Adventure Tour Package",
    duration: "04 Nights / 05 Days",
    destination: "Delhi-Kasol-Delhi-Delhi",
    price: 6500,
    packageInclusion: {
      accomodation: "04 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },
  {
    id: 6,
    image: "packages-img/malana-trek.jpg",
    title: "Kasol-Malana Trekking Tour Package",
    duration: "04 Nights / 05 Days",
    destination: "Delhi-Kasol-Malana - Delhi",
    price: 7000,
    packageInclusion: {
      accomodation: "04 Days Hotel Accomodation",
      food: "Breakfast & Dinner as per Itinerary",
    },

  },

];

const packageContainer = document.querySelector(".package-container");

window.addEventListener("DOMContentLoaded", function () {
  let displayPackage = packages.map(function (item) {
    //console.log(item);
    return `  <div class="package">
        <div class="package-img">
          <img src=${item.image} alt="package-img" />
        </div>
        <div class="img-text">
          <h2>${item.title}</h2>
        </div>
        <div class="package-price">
          <h2><span>Duration :</span> ${item.duration}</h2>
          <h2><span>Destinations :</span> ${item.destination}</h2>
          <h1>INR : ${item.price}/-</h1>
          <hr />
        </div>
        <ul class="package-icons">
          <li>
            <figure class="flight">
              <img src="packages-img/flight-icon.png" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="packages-img/hotel-icon.png" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="packages-img/sightseeing-icon.png" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="packages-img/meals-icon.png" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="packages-img/transfer-icon.png" />
            </figure>
          </li>
        </ul>
        <div class="lower-hr">
          <hr />
        </div>
        <div class="package-inclusion">
          <h3>PACKAGE INCLUSION:</h3>
          <ul class="inclusion-desc">
            <li>${item.packageInclusion.accomodation}</li>
            <li>${item.packageInclusion.food}</li>
          </ul>
          <a href="#">[+]Read More</a>
        </div>
        <div class="enquire-btn">
          <button type="button">Enquire Now</button>
        </div>
      </div>`
  })
  displayPackage = displayPackage.join("");


  packageContainer.innerHTML = displayPackage;
})



// Social MEdia Icon
const shareIcon = document.getElementById('share-icon');
const shareIcons = document.querySelector('.share-icons');
const shareContainer = document.querySelector('.share-container');

shareIcon.addEventListener("click", function () {
  shareIcons.classList.toggle('active-icon')
})


function moveIcon() {
  shareContainer.classList.toggle('moveIcon')
}

var intervalHandler = null;
intervalHandle = setInterval(moveIcon, 1000);

// shareContainer.addEventListener("click", function () {
//     clearInterval(intervalHandle);

// });

// Popup model
const closeBtn = document.getElementById('no-thanks');
const modalContainer = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

window.addEventListener("DOMContentLoaded", function () {
  modalContainer.classList.add('active');
  overlay.classList.add('active');
})

closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove('active');
  overlay.classList.remove('active');

})

overlay.addEventListener("click", function () {
  modalContainer.classList.remove('active');
  overlay.classList.remove('active');

})

const blinking = document.querySelector(".blinking");
window.addEventListener("DOMContentLoaded", function () {
  setInterval(blink, 2000)

})

function blink() {
  blinking.classList.toggle('active');
}

// slider

const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const sliderClose = document.querySelector('.close-btn');
const navOverlay = document.querySelector('.nav-overlay');

burger.addEventListener('click', () => {
  container.classList.add('slider-active');
  navOverlay.classList.add('active');
})

sliderClose.addEventListener('click', () => {
  container.classList.remove('slider-active');
  navOverlay.classList.remove('active');
})