document.getElementById("item_login_btn").onclick = function() {
    location.href = "./login_signup.html";
};

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
    item_image.src = "data:image/png;base64," + image;

    item.appendChild(item_name);
    item.appendChild(item_price);
    item.appendChild(item_image);

    let items = document.getElementsByClassName("items")[0];
    items.appendChild(item);
}