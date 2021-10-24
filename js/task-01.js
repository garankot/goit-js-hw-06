// Кількість елементів
const allItems = document.querySelectorAll('.item');

function totalCategories (allItems) {
    console.log(`Number of categories: ${allItems.length}`);
}
totalCategories(allItems);

// 
allItems.forEach(item => {
    // console.log(`Number of categories: ${allItems.length}`)
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})