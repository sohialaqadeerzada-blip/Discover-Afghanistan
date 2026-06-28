function showMessage(){
    alert("welcome to Explore Afghanistan");
}

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function(){

  document.body.classList.toggle("dark-mode");

});

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

  const value =
  searchInput.value.toLowerCase();

  const cards =
  document.querySelectorAll(".card");

  cards.forEach(function(card){

    const title =
    card.querySelector("h3").textContent.toLowerCase();

    if(title.includes(value)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

});

function showKabulInfo(){

  document.getElementById("kabulInfo").innerHTML =

  "Famous Places:<br><br>" +

  "🌳 Babur Garden<br>" +

  "🏛 Darul Aman Palace<br>" +

  "🌊 Qargha Lake";

}

function showBadakhshanInfo(){

  document.getElementById("badakhshanInfo").innerHTML =

  "Famous Places:<br><br>" +

  "🏔 Wakhan Corridor<br>" +

  "⛰ Pamir Mountains<br>" +

  "💧 Zorkul Lake";

}

function showBamyanInfo(){

  document.getElementById("bamyanInfo").innerHTML =

  "Famous Places:<br><br>" +

  "💙 Band-e-Amir<br>" +

  "🗿 Buddhas of Bamyan<br>" +

  "🐉 Dragon Valley";

}
function showHeratInfo(){

  document.getElementById("heratInfo").innerHTML =

  "Famous Places:<br><br>" +

  "🏰 Herat Citadel<br>" +

  "🕌 Friday Mosque<br>" +

  "🗼 Musalla Minarets";

}

function showMazarInfo(){

  document.getElementById("mazarInfo").innerHTML =

  "Famous Places:<br><br>" +

  "🕌 Blue Mosque<br>" +

  "🏛 Takht-e-Rostam<br>" +

  "🎉 Nawroz Festival";

}


function topFunction(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}



const images = [
  "images/kabul1.jpg",
  "images/badakhshan1.jpg",
  "images/bamyan1.jpg",
  "images/herat1.jpg",
  "images/mazar1.jpg"
];

let currentImage = 0;

function nextImage(){

  currentImage++;

  if(currentImage >= images.length){
    currentImage = 0;
  }

  document.getElementById("sliderImage").src =
  images[currentImage];
}

function prevImage(){

  currentImage--;

  if(currentImage < 0){
    currentImage = images.length - 1;
  }

  document.getElementById("sliderImage").src =
  images[currentImage];
}

setInterval(nextImage, 3000);

let kabulRating = 0;

function rateKabul(){

  kabulRating++;

  document.getElementById("kabulRating").textContent =
  kabulRating;

}

let badakhshanRating = 0;

function rateBadakhshan(){

  badakhshanRating++;

  document.getElementById("badakhshanRating").textContent =
  badakhshanRating;

}

let bamyanRating = 0;

function rateBamyan(){

  bamyanRating++;

  document.getElementById("bamyanRating").textContent =
  bamyanRating;

}
let heratRating = 0;

function rateHerat(){

  heratRating++;

  document.getElementById("heratRating").textContent =
  heratRating;

}
let mazarRating = 0;

function rateMazar(){

  mazarRating++;

  document.getElementById("mazarRating").textContent =
  mazarRating;

}


let visitors = 0;

visitors++;

document.getElementById("visitorCount").textContent =
visitors;
const langBtn = document.getElementById("langBtn");

let isEnglish = true;

langBtn.addEventListener("click", function(){

  if(isEnglish){

    document.getElementById("heroTitle").textContent =
    "افغانستان را کشف کنید";

    document.getElementById("heroText").textContent =
    "زیبایی کابل، بدخشان، بامیان، هرات و مزار شریف را کشف کنید.";

    document.querySelector(".destinations h2").textContent =
    "مقصدهای مشهور";

    document.querySelector(".gallery h2").textContent =
    "گالری تصاویر";

    document.querySelector(".about h2").textContent =
    "درباره افغانستان";

    document.querySelector(".contact h2").textContent =
    "تماس با ما";
    document.getElementById("kabulName").textContent = "کابل";
document.getElementById("badakhshanName").textContent = "بدخشان";
document.getElementById("bamyanName").textContent = "بامیان";
document.getElementById("heratName").textContent = "هرات";
document.getElementById("mazarName").textContent = "مزار شریف";
    document.getElementById("homeLink").textContent = "خانه";
document.getElementById("aboutLink").textContent = "درباره ما";
document.getElementById("contactLink").textContent = "تماس با ما";
document.getElementById("searchTitle").textContent =
"جستجوی شهر";

document.getElementById("exploreBtn").textContent =
"اکنون کاوش کنید";

document.getElementById("learnBtn").textContent =
"بیشتر بدانید";

document.getElementById("visitorTitle").textContent =
"بازدیدکنندگان";

document.getElementById("visitorText").innerHTML =
"مجموع بازدیدکنندگان: <span id='visitorCount'>"+visitors+"</span>";

document.getElementById("reviewTitle").textContent =
"نظرات بازدیدکنندگان";

document.getElementById("weatherTitle").textContent =
"آب و هوای افغانستان";

document.getElementById("attractionTitle").textContent =
"جاذبه‌های مشهور";

document.getElementById("sendBtn").textContent =
"ارسال پیام";

   document.getElementById("destinationLink").textContent =
"مقصدها";

document.getElementById("galleryLink").textContent =
"گالری";
document.getElementById("locationTitle").textContent =
"موقعیت افغانستان";

document.getElementById("videoTitle").textContent =
"ویدیوی افغانستان";

document.getElementById("attractionTitle").textContent =
"جاذبه‌های مشهور";
document.getElementById("PhotoTitle").textContent =
"گالری تصاویر";

document.getElementById("sliderTitle").textContent =
"اسلایدر تصاویر";

document.getElementById("aboutTitle").textContent =
"درباره افغانستان";

document.getElementById("locationTitle").textContent =
"موقعیت افغانستان";

document.getElementById("videoTitle").textContent =
"ویدیوی افغانستان";
document.getElementById("aboutTitle").textContent =
"درباره افغانستان";
document.getElementById("kabulName").textContent = "کابل";
document.getElementById("badakhshanName").textContent = "بدخشان";
document.getElementById("bamyanName").textContent = "بامیان";
document.getElementById("heratName").textContent = "هرات";
document.getElementById("mazarName").textContent = "مزار شریف";


document.getElementById("aboutText").textContent =
"افغانستان کشوری زیبا با تاریخ، فرهنگ و طبیعت غنی است.";

document.getElementById("kabulText").textContent =
"پایتخت افغانستان و قلب کشور.";

document.getElementById("badakhshanText").textContent =
"مشهور به دهلیز واخان و کوه‌های پامیر.";

document.getElementById("bamyanText").textContent =
"دره‌ای تاریخی با طبیعت و فرهنگ غنی.";

document.getElementById("heratText").textContent =
"یکی از تاریخی‌ترین شهرهای افغانستان.";

document.getElementById("mazarText").textContent =
"محل مسجد آبی و یکی از مراکز فرهنگی کشور.";
document.getElementById("kabulBtn").textContent =
"بیشتر بخوانید";

document.getElementById("badakhshanBtn").textContent =
"بیشتر بخوانید";

document.getElementById("bamyanBtn").textContent =
"بیشتر بخوانید";

document.getElementById("heratBtn").textContent =
"بیشتر بخوانید";

document.getElementById("mazarBtn").textContent =
"بیشتر بخوانید";

    langBtn.textContent = "English";

    isEnglish = false;

  }else{

    document.getElementById("heroTitle").textContent =
    "Discover Afghanistan";

    document.getElementById("heroText").textContent =
    "Explore the beauty of Kabul, Badakhshan, Bamyan, Herat and Mazar-e-Sharif.";

    document.querySelector(".destinations h2").textContent =
    "Popular Destinations";

    document.querySelector(".gallery h2").textContent =
    "Photo Gallery";

    document.querySelector(".about h2").textContent =
    "About Afghanistan";

    document.querySelector(".contact h2").textContent =
    "Contact Us";

    
document.getElementById("destinationLink").textContent =
"Destinations";

document.getElementById("galleryLink").textContent =
"Gallery";
document.getElementById("aboutTitle").textContent =
"About Afghanistan";

document.getElementById("aboutText").textContent =
"Afghanistan is a beautiful country with rich history, culture and natural landscapes.";

document.getElementById("kabulText").textContent =
"The capital city of Afghanistan and the heart of the country.";

document.getElementById("badakhshanText").textContent =
"Famous for the Wakhan Corridor and the beautiful Pamir Mountains.";

document.getElementById("bamyanText").textContent =
"A historic valley known for culture, mountains and natural beauty.";

document.getElementById("heratText").textContent =
"One of Afghanistan's most historic cities, rich in art and culture.";

document.getElementById("mazarText").textContent =
"Home to the famous Blue Mosque and one of the country's cultural centers.";
document.getElementById("kabulBtn").textContent =
"Read More";

document.getElementById("badakhshanBtn").textContent =
"Read More";

document.getElementById("bamyanBtn").textContent =
"Read More";

document.getElementById("heratBtn").textContent =
"Read More";

document.getElementById("mazarBtn").textContent =
"Read More";

document.getElementById("homeLink").textContent = "Home";
document.getElementById("aboutLink").textContent = "About";
document.getElementById("contactLink").textContent = "Contact";
document.getElementById("kabulName").textContent = "Kabul";
document.getElementById("badakhshanName").textContent = "Badakhshan";
document.getElementById("bamyanName").textContent = "Bamyan";
document.getElementById("heratName").textContent = "Herat";
document.getElementById("mazarName").textContent = "Mazar-e-Sharif";

document.getElementById("searchTitle").textContent =
"Search Destination";

document.getElementById("exploreBtn").textContent =
"Explore Now";

document.getElementById("learnBtn").textContent =
"Learn More";

document.getElementById("visitorTitle").textContent =
"Visitors";

document.getElementById("visitorText").innerHTML =
"Total Visitors: <span id='visitorCount'>" + visitors + "</span>";

document.getElementById("reviewTitle").textContent =
"Visitor Reviews";

document.getElementById("weatherTitle").textContent =
"Weather in Afghanistan";

document.getElementById("locationTitle").textContent =
"Location of Afghanistan";

document.getElementById("videoTitle").textContent =
"Explore Afghanistan Video";

document.getElementById("PhotoTitle").textContent =
"Photo Gallery";

document.getElementById("sliderTitle").textContent =
"Image Slider";

document.getElementById("contactTitle").textContent =
"Contact Us";

document.getElementById("sendBtn").textContent =
"Send Message";

document.getElementById("destTitle").textContent =
"Popular Destinations";

document.getElementById("attractionTitle").textContent =
"Popular Attractions";

    langBtn.textContent = "فارسی";

    isEnglish = true;
  }

});
function showKabulInfo(){

  if(isEnglish){

    document.getElementById("kabulInfo").innerHTML =
    "Famous Places:<br><br>" +
    "🌳 Babur Garden<br>" +
    "🏛 Darul Aman Palace<br>" +
    "🌊 Qargha Lake";

  }else{

    document.getElementById("kabulInfo").innerHTML =
    "جاهای مشهور:<br><br>" +
    "🌳 باغ بابر<br>" +
    "🏛 قصر دارالامان<br>" +
    "🌊 بند قرغه";

  }

}
function showBadakhshanInfo(){

  if(isEnglish){

    document.getElementById("badakhshanInfo").innerHTML =
    "Famous Places:<br><br>" +
    "🏔 Wakhan Corridor<br>" +
    "⛰ Pamir Mountains<br>" +
    "💧 Zorkul Lake";

  }else{

    document.getElementById("badakhshanInfo").innerHTML =
    "جاهای مشهور:<br><br>" +
    "🏔 دهلیز واخان<br>" +
    "⛰ کوه‌های پامیر<br>" +
    "💧 دریاچه زرکول";

  }

}
function showBamyanInfo(){

  if(isEnglish){

    document.getElementById("bamyanInfo").innerHTML =
    "Famous Places:<br><br>" +
    "💙 Band-e-Amir<br>" +
    "🗿 Buddhas of Bamyan<br>" +
    "🐉 Dragon Valley";

  }else{

    document.getElementById("bamyanInfo").innerHTML =
    "جاهای مشهور:<br><br>" +
    "💙 بند امیر<br>" +
    "🗿 بوداهای بامیان<br>" +
    "🐉 دره اژدها";

  }

}
function showHeratInfo(){

  if(isEnglish){

    document.getElementById("heratInfo").innerHTML =
    "Famous Places:<br><br>" +
    "🏰 Herat Citadel<br>" +
    "🕌 Friday Mosque<br>" +
    "🗼 Musalla Minarets";

  }else{

    document.getElementById("heratInfo").innerHTML =
    "جاهای مشهور:<br><br>" +
    "🏰 قلعه هرات<br>" +
    "🕌 مسجد جامع هرات<br>" +
    "🗼 مناره‌های مصلی";

  }

}
function showMazarInfo(){

  if(isEnglish){

    document.getElementById("mazarInfo").innerHTML =
    "Famous Places:<br><br>" +
    "🕌 Blue Mosque<br>" +
    "🏛 Takht-e Rostam<br>" +
    "🎉 Nawroz Festival";

  }else{

    document.getElementById("mazarInfo").innerHTML =
    "جاهای مشهور:<br><br>" +
    "🕌 مسجد آبی<br>" +
    "🏛 تخت رستم<br>" +
    "🎉 جشن نوروز";

  }

}
function toggleMenu(){

  document.getElementById("navMenu")
  .classList.toggle("active");

}

function sendMessage(event){

  event.preventDefault();

  alert("Thank you! Your message has been sent.");

}