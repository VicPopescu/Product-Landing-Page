const is_explorer =
  navigator.userAgent.indexOf("MSIE") > 0 ||
  !!navigator.userAgent.match(/Trident.*rv\:11\./);
if (is_explorer) {
  alert(
    "Stop living in the past...the future is free! Why you ask for the IEmpossible..."
  );
}
const reviews = [
  {
    id: "grumpy",
    iconUrl: "https://pbs.twimg.com/media/DYLuNt2UQAEqaOs.jpg",
    quote: "I hate it. I really do. But I hate you more."
  },
  {
    id: "graham",
    iconUrl:
      "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzM5ODM4OTg4/alexander-graham-bell-9205497-2-402.jpg",
    quote:
      "I dream of one day ordering pizza over the telephone and also learning what a 'pizza' is."
  },
  {
    id: "jack",
    iconUrl:
      "https://lwlies.com/wp-content/uploads/2017/02/jack-nicholson-about-schmidt-1108x0-c-default.jpg",
    quote:
      "Now I can slam my phone down when I hang up on somebody! Violently pressing 'END CALL' just doesn't do it for me..."
  },
  {
    id: "abraham",
    iconUrl:
      "https://pbs.twimg.com/profile_images/740200432073641984/810BjZ-J_400x400.jpg",
    quote:
      "Don't believe everything you read on the internet just because there's a picture with a quote next to it."
  }
];

/**
 * During initialization
 */
document
  .querySelector(".review-item")
  .getElementsByClassName("tag")[0]
  .classList.add("hover");

/**
 * Handling reviews
 */
const reviewContainer = document.getElementById("reviews-container");
const node = document.getElementsByClassName("review");

var list = document.getElementsByClassName("review-item");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", displayReview, false);
}

function displayReview(event) {
  const target = event.target;
  const parent = findAncestor(event.target, "review-item");
  const id = parent.getAttribute("data-id");
  const review = reviews.find(x => x.id === id);
  const cNode = node[0].cloneNode(true);
  cNode.getElementsByClassName("review-img")[0].src = review.iconUrl;
  cNode.getElementsByClassName("quote")[0].innerHTML = '"' + review.quote + '"';
  node[0].replaceWith(cNode);

  const items = document.getElementsByClassName("review-item");
  for (var i = 0; i < items.length; i++) {
    items[i].getElementsByClassName("tag")[0].classList.remove("hover");
  }
  parent.getElementsByClassName("tag")[0].classList.add("hover");
}

/**
 * Handle menu item selection
 */
var selectedSection = window.location.hash.substring(1);
const menuItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", selectFromNav, false);
  if (menuItems[i].getAttribute("data-linkTo") === selectedSection) {
    menuItems[i].classList.add("selected");
  }
}
function selectFromNav(event) {
  const target = event.target;
  const parent = findAncestor(target, "nav-item");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("selected");
  }
  parent.classList.add("selected");
}
document.querySelector(".nav-logo").addEventListener(
  "click",
  function() {
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("selected");
    }
  },
  false
);

/**
 * Utilities
 */
function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}
