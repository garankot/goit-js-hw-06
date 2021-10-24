const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsArr = [];

ingredients.map(ingredient => {
  const lists = document.createElement("li")
  lists.textContent = ingredient
  lists.classList.add('item')
  listsArr.push(lists)
})
document.querySelector('#ingredients').append(...listsArr)
