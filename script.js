const generateButton = document.getElementById('generate');
const storyPara = document.getElementById('story');
const customName = document.getElementById('customName');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle', 'turned into a slug and crawled away'];

generateButton.addEventListener('click', () => {
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  let story = `It was a hot day, and ${xItem} went to ${yItem}. Then they ${zItem}. It was hilarious!`;

  // If user entered a name, replace 'xItem' with it
  if (customName.value.trim() !== '') {
    story = story.replace(xItem, customName.value.trim());
  }

  storyPara.textContent = story;
});
