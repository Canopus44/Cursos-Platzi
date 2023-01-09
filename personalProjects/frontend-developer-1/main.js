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
const shoppingCart = document.querySelector(".product-detail");
navbarShoppingCart.addEventListener("click", toggleShoppingCart);

// Functions
function toggleDesktopMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  if (!isShoppingCartClosed) {
    toggleShoppingCart();
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
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
}
