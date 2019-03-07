const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Code here -----------------------------------


//IMAGES 
document.getElementById('logo-img').src = 'img/logo.png';
document.getElementById('cta-img').src = 'img/header-img.png';
document.getElementById("middle-img").src = 'img/mid-page-accent.jpg';


//CTA

let h1Tag = document.querySelector('h1')
h1Tag.innerHTML =  siteContent.cta.h1;


let btnInfo = document.querySelector('button');
btnInfo.innerHTML = siteContent.cta.button;


//Main Content

let topContH4 = document.getElementsByClassName("text-content")


let h4 = Array.from(topContH4);
let contPArray = Array.from(topContH4);

for(let i =0; i < h4.length; i++){
  h4[i].querySelector('h4').id = `h4-${i + 1}`;
  contPArray[i].querySelector('p').id = `p-${i + 1}`;
}

document.getElementById('h4-1').innerHTML = siteContent["main-content"]["features-h4"];
document.getElementById('h4-2').innerHTML = siteContent["main-content"]["about-h4"];
document.getElementById('h4-3').innerHTML = siteContent["main-content"]["services-h4"];
document.getElementById('h4-4').innerHTML = siteContent["main-content"]["product-h4"];
document.getElementById('h4-5').innerHTML = siteContent["main-content"]["vision-h4"];

document.getElementById('p-1').innerHTML = siteContent["main-content"]["features-content"];
document.getElementById('p-2').innerHTML = siteContent["main-content"]["about-content"];
document.getElementById('p-3').innerHTML = siteContent["main-content"]["services-content"];
document.getElementById('p-4').innerHTML = siteContent["main-content"]["product-content"];
document.getElementById('p-5').innerHTML = siteContent["main-content"]["vision-content"];




//Contact

let contactInfo = document.getElementsByClassName("contact");
let contactP;
contactInfo = Array.from(contactInfo);

for(let i = 0; i < contactInfo.length; i++){
  contactInfo[i].querySelector('h4').innerHTML = siteContent["contact"]["contact-h4"];
  contactP = contactInfo[i].querySelectorAll('p');

}

for(let i = 0; i < contactP.length; i++){
  contactP[i].id = `contactP${i +1}`;
}

document.getElementById('contactP1').innerHTML = siteContent["contact"]["address"];
document.getElementById('contactP2').innerHTML = siteContent["contact"]["phone"];
document.getElementById('contactP3').innerHTML = siteContent["contact"]["email"];



//Footer
let footP = document.querySelector('footer');
footP.id = "foot";
console.log(footP.id)

footP = document.getElementById('foot');
footP.querySelector('p').innerHTML = siteContent["footer"]["copyright"];


//Header - Nav

const navInfo = siteContent['nav'];
const headerNav = document.querySelectorAll('a');

headerNav.forEach(function(item, i){
  item.textContent = navInfo[`nav-item-${i + 1 }`];
});


const newATagPatrick = document.createElement('a');
newATagPatrick.innerHTML = 'Patrick';

const nav = document.querySelector('nav');
nav.append(newATagPatrick);

const newATagLuis = document.createElement('a');
newATagLuis.innerHTML = 'Luis';

nav.prepend(newATagLuis);

const navTags = document.querySelectorAll('a');
navTags.forEach(function(currentValue){
  currentValue.style.color = 'green';
});


const allText = document.querySelectorAll('p');

allText.forEach(function(currentValue) {
  currentValue.style.color = 'purple';
});