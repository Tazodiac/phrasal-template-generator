var pickColour;
var pickCreature;
var pickAdj;
var pickPast;
var pickStory;

alert('Let’s make a story together!');

pickColour = prompt('A colour (orange, indigo, ect.)');
pickCreature = prompt('A creature (dragon, moth, etc.)');
pickAdj = prompt('An adjective (beautiful, super, etc.)');
pickPast = prompt('A past tense verb (ran, burped, etc.)');
pickStory = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning \n Enter the letter below:');

if (pickStory == 'a') {
  document.write(`After snacking on ${pickAdj} treats, the ${pickColour} bellied ${pickCreature} ${pickPast} for hours.`);
}

if (pickStory == 'b') {
  document.write(`Amelia ${pickPast} through the ${pickAdj} ${pickColour} nebula escaping the space ${pickCreature}.`);
}

if (pickStory == 'c') {
  document.write(`Jackson chose his ${pickAdj}, ${pickColour} ${pickCreature} card and ${pickAdj} it to the table knowing he won.`);

}
