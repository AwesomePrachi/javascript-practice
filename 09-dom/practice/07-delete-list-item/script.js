const taskList = document.querySelector("#taskList");
const itemCount = document.querySelector("#itemCount");
const emptyMessage = document.querySelector("#emptyMessage");

function updateListStatus() {
    const totalItems = taskList.children.length;

    itemCount.textContent =
        `${totalItems} ${totalItems === 1 ? "item" : "items"}`;

    emptyMessage.hidden = totalItems > 0;
}

taskList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-btn");

    if (!deleteButton || !taskList.contains(deleteButton)) {
        return;
    }

    const listItem = deleteButton.closest("li");

    if (!listItem || listItem.classList.contains("removing")) {
        return;
    }

    listItem.classList.add("removing");

    listItem.addEventListener("animationend", (event) => {
        if (event.target !== listItem) {
            return;
        }

        listItem.remove();
        updateListStatus();
    }, { once: true });
});

updateListStatus();