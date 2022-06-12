document.getElementById("item_login_btn").onclick = function() {
    location.href = "./login_signup.html";
};

function getItems() {
    let category_id = window.localStorage.getItem("category_id");
    let url =
        "http://127.0.0.1:8000/api/v1/user/items_by_category?id=" + category_id;
    axios({
        method: "get",
        url: url,
    }).then(function(response) {
        console.log(response.data["items"].length);
        for (let i = 0; i < response.data["items"].length; i++) {
            createItem(
                response.data["items"][i]["id"],
                response.data["items"][i]["name"],
                response.data["items"][i]["price"],
                response.data["items"][i]["image"]
            );
            console.log(response.data["items"][i]["name"]);
        }
    });
}

function createItem(id, name, price, image) {
    let item = document.createElement("div");
    item.setAttribute("id", id);
    item.setAttribute("class", "category_item");

    let item_name = document.createElement("h2");
    item_name.setAttribute("class", "item_name");
    item_name.innerHTML = name;

    let item_price = document.createElement("h2");
    item_price.setAttribute("class", "item_price");
    item_price.innerHTML = price;

    let item_image = document.createElement("img");
    item_image.src = "data:assets/png;base64," + image;

    let favorite_icon = document.createElement("i");
    favorite_icon.setAttribute("class", "fa fa-heart");

    item.appendChild(item_name);
    item.appendChild(item_price);
    item.appendChild(item_image);
    item.appendChild(favorite_icon);

    let items = document.getElementsByClassName("items")[0];
    items.appendChild(item);
    console.log(items);
}
getItems();