var itemList = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "../asset/img/kiwi.jpg",
  },
  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "../asset/img/mango.jpg",
  },
  sp003: {
    name: "Sữa Chua Vị Dưa lưới",
    price: 23000,
    photo: "../asset/img/cantaloupe.jpg",
  },
  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "../asset/img/strawberry.jpg",
  },
  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "../images/sanpham/strawberry.jpg",
  },
  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "../asset/img/blueberry.jpg",
  },
  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "../asset/img/grapes.jpg",
  },
  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "../asset/img/green-apple.jpg",
  },
  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "../asset/img/pineapple.jpg",
  },
};
function addCart(code) {
  var number = parseInt(document.getElementById(code).value);
  var name = itemList[code].name;
  if (number == 0) return;
  if (typeof localStorage[code] === "undefined") {
    window.localStorage.setItem(code, number);
  } else {
    var current = parseInt(window.localStorage.getItem(code));
    if (current + number > 100) {
      window.localStorage.setItem(code, 100);
      alert(
        "Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của " +
          name +
          " này."
      );
      return;
    } else window.localStorage.setItem(code, current + number);
  }
  alert(
    "Đã cập nhật sản phẩm " +
      name +
      " với số lượng " +
      number +
      " vào giỏ hàng. Số lượng sản phẩm " +
      name +
      " đã đặt là " +
      parseInt(window.localStorage.getItem(code)) +
      "."
  );
}
function getDiscountRate() {
  var d = new Date();
  var weekday = d.getDay();
  var totalMins = d.getHours() * 60 + d.getMinutes();
  if (
    weekday >= 1 &&
    weekday <= 3 &&
    ((totalMins >= 420 && totalMins <= 660) ||
      (totalMins >= 780 && totalMins <= 1020))
  )
    return 0.1;
  return 0;
}

function showCart() {
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var container = document
    .getElementById("cartDetail")
    .getElementsByTagName("tbody")[0];
  container.innerHTML = "";

  var sum = 0;
  var totalPreTax = 0;
  var discountRate = getDiscountRate();
  var taxRate = 0.1;
  var discount = 0;
  var tax = 0;
  for (var i = 0; i < window.localStorage.length; i++) {
    if (typeof itemList[localStorage.key(i)] === "undefined") continue;
    var tr = document.createElement("tr");
    var photoCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var priceCell = document.createElement("td");
    var numberCell = document.createElement("td");
    var sumCell = document.createElement("td");
    var removeCell = document.createElement("td");
    var removeLink = document.createElement("a");

    var item = itemList[localStorage.key(i)];
    var number = localStorage.getItem(localStorage.key(i));

    photoCell.style.textAlign = "center";
    photoCell.innerHTML =
      "<img src='" + item.photo + "' class='round-figure' width='100px'/>";

    nameCell.innerHTML = item.name;
    nameCell.style.textAlign = "center";

    priceCell.innerHTML = formatter.format(item.price);
    priceCell.style.textAlign = "center";

    numberCell.innerHTML = number;
    numberCell.style.textAlign = "center";

    sum = number * item.price;
    sumCell.innerHTML = formatter.format(sum);
    sumCell.style.textAlign = "center";

    removeLink.innerHTML = "<i class='fa fa-trash icon-pink'></i>";

    removeLink.setAttribute("href", "#");
    removeLink.setAttribute("data-code", localStorage.key(i));
    removeLink.onclick = function () {
      removeCart(this.dataset.code);
    };
    removeCell.style.textAlign = "center";
    removeCell.appendChild(removeLink);

    tr.appendChild(photoCell);
    tr.appendChild(nameCell);
    tr.appendChild(numberCell);
    tr.appendChild(priceCell);
    tr.appendChild(sumCell);
    tr.appendChild(removeCell);
    container.appendChild(tr);
    totalPreTax += sum;
  }
  var discount = totalPreTax * discountRate;
  var tax = (totalPreTax - discount) * taxRate;
  document.getElementById("bill_pre_tax_total").innerHTML =
    formatter.format(totalPreTax);
  document.getElementById("bill_discount").innerHTML =
    discountRate + " x A = " + formatter.format(discount);
  document.getElementById("bill_tax").innerHTML = formatter.format(tax);
  document.getElementById("bill_total").innerHTML = formatter.format(
    totalPreTax - discount + tax
  );
}

function removeCart(code) {
  if (typeof window.localStorage[code] !== "undefined") {
    window.localStorage.removeItem(code);

    document
      .getElementById("cartDetail")
      .getElementsByTagName("tbody")[0].innerHTML = "";

    showCart();
  }
}
window.onstorage = () => {
  showCart();
};
