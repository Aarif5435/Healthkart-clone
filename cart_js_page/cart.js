let cartitem = document.querySelector("#cartItem")
let data = JSON.parse(localStorage.getItem("productdata"))

function display(data) {
    cartitem.innerHTML = []
    data.forEach(el => {
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.src = el.image;
        let title = document.createElement("h4")
        title.innerText = el.title
        let price = document.createElement("p")
        price.innerText = el.price;
    });
}

function paymentfun() {
    window.location.href = "./payment.html"
}