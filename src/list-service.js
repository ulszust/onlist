const data = [
  {
    name: "moja lista 1",
    items: [
      { product: "jabłko", quantity: "1" },
      { product: "mleko", quantity: "500ml" },
    ],
    boughtItems: [
      { product: "chusteczki", quantity: "3" },
      { product: "herbata", quantity: "78463" },
    ],
  },
  {
    name: "moja lista 2",
    items: [
      { product: "chleb", quantity: "2" },
      { product: "parówki", quantity: "3" },
    ],
    boughtItems: [{ product: "ser", quantity: "5" }],
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

export function editListItem(name, product, updatedProduct, updatedQuantity) {
  const currentList = data.find((it) => it.name === name);
  const toUpdateIndex = currentList.items.findIndex(
    (it) => it.product === product
  );
  currentList.items.splice(toUpdateIndex, 1, {
    product: updatedProduct,
    quantity: updatedQuantity,
  });
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

export function removeBoughtItem(name, product) {
  const currentList = data.find((it) => it.name === name);
  const deleteBoughtItemIndex = currentList.boughtItems.findIndex(
    (it) => it.product === product
  );
  currentList.boughtItems.splice(deleteBoughtItemIndex, 1);
}

export function findListByNameOrProduct(query) {
  const listsByName = data.filter((list) => list.name?.includes(query));
  const listsByProduct = data.filter((list) =>
    list.items.find((item) => item.product?.includes(query))
  );
  return [...new Set(listsByName.concat(listsByProduct))];
}
