const dresses = [
  {
    title: "Casual T-Shirt",
    desc: "Comfortable cotton T-shirt, perfect for daily wear.",
    price: 499,
    img: "/images/causalTshirt.jpg"
  },
  {
    title: "Denim Jacket",
    desc: "Classic blue denim jacket, great for all seasons.",
    price: 1199,
    img: "/images/denimjacket.jpg"
  },
  {
    title: "Floral Dress",
    desc: "Lightweight floral dress ideal for summer outings.",
    price: 899,
    img: "/images/floraldress.jpg"
  },
  {
    title: "Formal Shirt",
    desc: "Stylish slim-fit shirt suitable for office and meetings.",
    price: 699,
    img: "/images/formal.jpg"
  },
  {
    title: "Hoodie Sweatshirt",
    desc: "Warm hoodie with a soft fleece interior.",
    price: 999,
    img: "/images/hoodie.jpg"
  },
  {
    title: "Traditional Kurta",
    desc: "Ethnic cotton kurta, perfect for festivals and occasions.",
    price: 749,
    img: "/images/kurta.jpg"
  },
  {
    title: "Jeans Pant",
    desc: "Stretchable slim-fit jeans with stylish finish.",
    price: 1099,
    img: "/images/jean.jpg"
  }
];

let currentIndex = 0;

function showDress(index) {
  const card = document.getElementById("dressCard");
  const dress = dresses[index];

  card.innerHTML = `
    <img src="${dress.img}" alt="${dress.title}">
    <h2>${dress.title}</h2>
    <p><strong>₹${dress.price}</strong></p>
    <button onclick="addToCart(event, '${dress.title}')">Add to Cart</button>
  `;
  card.onclick = () => showDetails(index);
}

function addToCart(event, itemName) {
  event.stopPropagation(); // Prevent opening modal
  alert(`${itemName} added to cart!`);
}

function showDetails(index) {
  const cloth = dresses[index];
  document.getElementById("modalImg").src = cloth.img;
  document.getElementById("modalTitle").textContent = cloth.title;
  document.getElementById("modalDesc").textContent = cloth.desc;
  document.getElementById("modalPrice").textContent = cloth.price;
  document.getElementById("detailsModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

function nextDress() {
  currentIndex = (currentIndex + 1) % dresses.length;
  showDress(currentIndex);
}

function prevDress() {
  currentIndex = (currentIndex - 1 + dresses.length) % dresses.length;
  showDress(currentIndex);
}

// Initial display
showDress(currentIndex);
