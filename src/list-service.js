const data = [
  {
    name: "moja lista 1",
    items: [
      { product: "jabłko", quantity: "1" },
      { product: "mleko", quantity: "500ml" },
    ],
    boughtItems: [
      { product: "pep", quantity: "3" },
      { product: "wincyj pepów", quantity: "78463" },
    ],
  },
  {
    name: "moja lista 2",
    items: [
      { product: "chleb", quantity: "2" },
      { product: "parówki", quantity: "3" },
    ],
    boughtItems: [{ product: "klamoty", quantity: "big" }],
  },
];

export function getList(name) {
  if (!name) {
    return [...data];
  }
  return data.find((it) => it.name === name);
}

export function addNewList(name) {
  data.push({ name, items: [] });
}

export function removeList(name) {
  const deleteIndex = data.findIndex((it) => it.name === name);
  data.splice(deleteIndex, 1);
}

export function editList(name, updatedName) {
  const toUpdate = data.find((it) => it.name === name);
  toUpdate.name = updatedName;
}

export function clearList(name) {
  const clearedList = data.find((it) => it.name === name);
  clearedList.items.length = 0;
}

export function addNewListItem(name, product, quantity) {
  const currentList = data.find((it) => it.name === name);
  currentList.items.push({ product, quantity });
}

export function removeListItem(name, product) {
  const currentList = data.find((it) => it.name === name);
  const deleteItemIndex = currentList.items.findIndex(
    (it) => it.product === product
  );
  currentList.items.splice(deleteItemIndex, 1);
}

export function editListItem(name, product, updatedProduct, quantity) {
  const currentList = data.find((it) => it.name === name);
  const toUpdateIndex = currentList.items.findIndex(
    (it) => it.product === product
  );
  currentList.items.splice(toUpdateIndex, 1, { updatedProduct, quantity });
}

export function addBoughtItem(name, product) {
  const currentList = data.find((it) => it.name === name);
  const boughtItemIndex = currentList.items.findIndex(
    (it) => it.product === product
  );
  const boughtItem = currentList.items[boughtItemIndex];
  currentList.boughtItems.push(boughtItem);
  currentList.items.splice(boughtItemIndex, 1);
}
