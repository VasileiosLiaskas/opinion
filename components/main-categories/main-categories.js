const mainCategories=[
    { "id": 1,  "title": "Ροή ειδήσεων" },
    { "id": 2,  "title": "Θέμα The Opinion" },
    { "id": 3,  "title": "Πολιτική" },
    { "id": 4,  "title": "Κοινωνία" },
    { "id": 5,  "title": "Τοπικά" },
    { "id": 6,  "title": "Money & Market" },
    { "id": 7,  "title": "Κόσμος" },
    { "id": 8,  "title": "Αθλητισμός" },
    { "id": 9,  "title": "Πολιτισμός" },
    { "id": 10, "title": "Viral" },
    { "id": 11, "title": "Health" },
    { "id": 12, "title": "Travel" }
]

export function loadCategories() {
    const ul = document.querySelector(".main-categories ul");
    if (!ul) return;



    mainCategories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category.title;
        li.setAttribute("data-id", category.id);
        li.classList.add("category-item");
        ul.appendChild(li);
    });
}

