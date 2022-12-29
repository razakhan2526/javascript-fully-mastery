// DOM manipulation Document object model
// 1. getElementById
// const heading = document.getElementById('heading'); 
// console.log(heading);
// 2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// console.log(heading);
// 3.getElementsByClassName
// const heading = document.getElementsByClassName('heading');
// console.log(heading);
// 4. querySelector
// const heading = document.querySelector('.heading');
// console.log(heading);
// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// Traverse DOM
// 1. parentNode
// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);
 

// 4. previousElementSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

// Manipulation
// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Why not Meri Jaan!';
// heading.style.color = 'red';
// heading.style.fontSize = '60px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// Create elements
// const heading = document.createElement('h1');
// heading.innerHTML = 'Han meri Jaan!';
// heading.classList.add('title');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);
// console.log(heading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'Ahmed Raza, Frontend Web Developer!';
// heading.insertAdjacentElement('beforebegin', subHeading);
// parent.appendChild(subHeading);

// DOM events

// function offbulb(){
//     document.getElementById('bulb-off').src = 'img/pic_bulboff.gif';
// }
// function Onbulb(){
//     document.getElementById('bulb-off').src = 'img/pic_bulbon.gif';
// }

// Exercise:-

// const bulbImg = document.querySelector('#bulb-img');
// const buttonSwitch = document.querySelector('#btn-switch');

// buttonSwitch.addEventListener('click', function(){
//     if(bulbImg.src.match('bulboff')){
//         bulbImg.src = 'img/pic_bulbon.gif';
//         buttonSwitch.innerHTML = 'Turn off';
//     }else{
//         bulbImg.src = 'img/pic_bulboff.gif';
//         buttonSwitch.innerHTML = 'Turn on';
//     }
// });

// Get document Ids
const root = document.querySelector('#root');
const button = document.querySelector('button');

// Click Button function
button.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(items => { 
        displayImages(items);
    });
});

// Fetch data loop function
function  createItem(item) {
    const card = document.createElement('div');
    card.classList.add('card');

    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;
    
    const title = document.createElement('h4');
    title.innerHTML = item.title;

    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}


// Display Data function
function displayImages(items){
    items.forEach(function(item){
        createItem(item);
    });

    console.log(items);
};