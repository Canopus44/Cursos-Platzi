// Menu for desktop
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
navbarEmail.addEventListener("click", toggleDesktopMenu);

// Menu for mobile
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
burgerMenu.addEventListener("click", toggleMobileMenu);

// Shoping cart
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartContainer");
navbarShoppingCart.addEventListener("click", toggleShoppingCart);

// Product detail
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

// Functions
function toggleDesktopMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  if (!isShoppingCartClosed) {
    toggleShoppingCart();
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  closeProductDetail();
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  if (!isShoppingCartClosed) {
    toggleShoppingCart();
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    toggleMobileMenu();
  }
  shoppingCart.classList.toggle("inactive");

  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
}

const productList = makeRandomProduct();

function makeRandomProduct() {
  const products = [];
  for (let index = 0; index < 20; index++) {
    products.push({
      name: "Item" + index,
      price: Math.floor(Math.random() * 1000) + 1,
      image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
  }
  return products;
}

function renderProducts(productList) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + product.price;

    const productName = document.createElement("p");
    productName.textContent = product.name;

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    const productAddToCart = document.createElement("figure");
    const productAddToCartImage = document.createElement("img");
    productAddToCartImage.src = "./icons/bt_add_to_cart.svg";

    productAddToCart.appendChild(productAddToCartImage);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productAddToCart);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

function openProductDetail() {
  shoppingCart.classList.add("inactive");
  productDetail.classList.remove("inactive");
}

// Close product detail
productDetailClose.addEventListener("click", closeProductDetail);
function closeProductDetail() {
  productDetail.classList.add("inactive");
}
