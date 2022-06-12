function login() {
    document.getElementById("login_btn").onclick = function() {
        location.href = "./pages/login_signup.html";
    };
}
login();
getCategories();

function getCategories() {
    axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/v1/user/all_categories",
    }).then(function(response) {
        for (let i = 0; i < response.data["categories"].length; i++) {
            createCategory(
                response.data["categories"][i]["id"],
                response.data["categories"][i]["name"]
            );
            console.log(response.data["categories"][i]["name"]);
        }
    });
}

function createCategory(id, name) {
    let category_name = document.createElement("h2");
    category_name.setAttribute("id", id);
    category_name.innerHTML = name;

    let category = document.getElementsByClassName("category-names")[0];
    category.appendChild(category_name);
}