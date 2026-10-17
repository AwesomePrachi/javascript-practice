const itemForm = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const emptyMessage = document.querySelector("#emptyMessage");
const itemCount = document.querySelector("#itemCount");

function updateListStatus() {
    const totalItems = itemList.children.length;

    emptyMessage.hidden = totalItems > 0;
    itemCount.textContent = `${totalItems} ${totalItems === 1 ? "item" : "items"}`;
}

itemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemText = itemInput.value.trim();

    if (itemText === "") {
        itemInput.focus();
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    itemList.append(listItem);

    itemInput.value = "";
    updateListStatus();
    itemInput.focus();
});