function login() {
    document.getElementById("login_btn").onclick = function() {
        location.href = "./pages/login_signup.html";
    };
}
login();

function createCategory(id, name) {
    let category_name = document.createElement("h2");
    category_name.setAttribute("id", id);
    category_name.innerHTML = name;

    let category = document.getElementsByClassName("category-names")[1];
    category.appendChild(category_name);
}