let list = [];

const input = document.getElementById("textBox");
const ul = document.getElementById("ulList");

// Form
document.getElementById("formTask").addEventListener("submit", event => {
	event.preventDefault();
});

// Update List
updateList();

function updateList() {
	ul.innerHTML = "";
	list.slice().reverse().forEach(item => {
		const li = document.createElement("li");
		li.classList.add("list-group-item", "list-group-item-action", "d-flex", "justify-content-between", "align-items-center");
		li.innerHTML = item;

		const buttonRemove = document.createElement("button");
		buttonRemove.classList.add("btn", "btn-danger");
		buttonRemove.innerHTML = "<i class='bi bi-dash-lg'></i>";
		buttonRemove.addEventListener("click", () => ul.removeChild(li));

		li.appendChild(buttonRemove);
		ul.prepend(li);
	});
}

// Add Fist
document.getElementById("addFirst").addEventListener("click", () => {
	list.unshift(input.value);
	updateList();
});

// Add Last
document.getElementById("addLast").addEventListener("click", () => {
	list.push(input.value);
	updateList();
});

// Remove All
document.getElementById("removeAll").addEventListener("click", () => {
	list = [];
	updateList();
});

// Remove First
document.getElementById("removeFirst").addEventListener("click", () => {
	list.shift();
	updateList();
});

// Remove Last
document.getElementById("removeLast").addEventListener("click", () => {
	list.pop();
	updateList();
});

// Remove Duplicates
document.getElementById("removeDuplicates").addEventListener("click", () => {
	list = [...new Set(list)];
	updateList();
});

// Sort Alphabetically
document.getElementById("sortAlphabetically").addEventListener("click", () => {
	list.sort();
	updateList();
});

// Sort Alphabetically (Z-A)
document.getElementById("sortAlphabeticallyAlt").addEventListener("click", () => {
	list.sort().reverse();
	updateList();
});

// Sort Reverse
document.getElementById("sortReverse").addEventListener("click", () => {
	list.reverse();
	updateList();
});
