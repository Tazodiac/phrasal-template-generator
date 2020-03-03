var pickColour;
var pickCreature;
var pickAdj;
var pickPast;
var pickStory;

alert('Let’s make a story together!');

while (!pickColour) {
  pickColour = prompt('A colour (orange, indigo, ect.)');
}

while (!pickCreature) {
  pickCreature = prompt('A creature (dragon, moth, etc.)');
}

while (!pickAdj) {
  pickAdj = prompt('An adjective (beautiful, super, etc.)');
}

while (!pickPast) {
  pickPast = prompt('A past tense verb (ran, burped, etc.)');
}

while (!['a', 'b', 'c'].includes(pickStory)) {
  pickStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning \n Enter the letter below:');
}

document.documentElement.style.setProperty('--colour', pickColour);

if (pickStory == 'a') {
  document.write(`After snacking on <span>${pickAdj}</span> treats, the <span>${pickColour}</span> bellied <span>${pickCreature}</span> <span>${pickPast}</span> for hours.`);
}

if (pickStory == 'b') {
  document.write(`Amelia <span>${pickPast}</span> through the <span>${pickAdj}</span> <span>${pickColour}</span> nebula escaping the space <span>${pickCreature}</span>.`);
}

if (pickStory == 'c') {
  document.write(`Jackson chose his <span>${pickAdj}</span>, <span>${pickColour}</span> <span>${pickCreature}</span> card and <span>${pickAdj}</span> it to the table knowing he won.`);
}
