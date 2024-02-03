let shoppingListItems = [];
const shoppingList = document.getElementById('shopping-list-items');

function updateItems() {
  // const shoppingList = document.getElementById('shopping-list-items');
  shoppingList.innerHTML = '';
  for (const item of shoppingListItems) {
    // This creates a new list item
    const listItem = document.createElement('li');
    // this one sets the content of the list item to an item from the array
    listItem.innerText = item;
    // this one adds the list item to the document.
    shoppingList.appendChild(listItem);
  }
}

function clearList() {
  shoppingListItems = [];
  updateItems();
}

function addItem() {
  let input = document.getElementById('new-item-text'); // "value"
  const item = input.value;

  shoppingListItems.push(item);
  updateItems();
  input.value = '';
}
