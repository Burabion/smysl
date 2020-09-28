

let phrases = [

  { text: 'в праздниках', image: 'Photo/prazdnikah.JPG' },
  { text: 'в удачных фотках:)', image: 'Photo/в удачных фотографиях.jpg' },
  { text: 'в воспоминаних', image: 'Photo/воспоминаний1.jpg' },
  { text: 'в тепле', image: 'Photo/в тепле.jpg' },
  { text: 'в стараниях сделать удачное фото:)', image: 'Photo/старание сделать удачное фото).JPG' },
  { text: 'в смехе', image: 'Photo/в смехе.JPG' },
  { text: 'в еде', image: 'Photo/еде1.jpg' },
  { text: 'воспоминаниях', image: 'Photo/воспоминаний 2.jpg' },
  { text: 'в желаний сделать приятное', image: 'Photo/желаний сделать приятное 2.JPG' },
  { text: 'в поцелуе', image: 'Photo/поцелуй2.jpg' },
  { text: 'в еде', image: 'Photo/еде2.jpg' },
  { text: 'в радости', image: 'Photo/в радости.jpg' }
];


function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
//for (let i = 0; i <= 2; i = i + 1) {
//  smoothly(phrase, 'textContent', phrases[i].text);
//  smoothly(image, 'src', phrases[i].image);
//}
