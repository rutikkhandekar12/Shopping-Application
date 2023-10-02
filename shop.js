let url = "https://fakestoreapi.com/products";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  renderData(data);
}

getData();



//rendering
let color = ["Red", "Blue", "Black", "Yellow", "Gray"];

function renderData(data) {
  let inhtml = "";

  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "men's clothing") {
      inhtml += `
          
          <div class="cards">
          <p class="mencard-title " style="font-size: 10px">Men</p>
          <img src="${value.image}" alt="">
          <div class="middle">
              <p>$${value.price}</p>
              <p class="special-p">S,M,L</p>
          </div>
          <p>Colors: ${color[random]}</p>
          <p>Rating: ${value.rating.rate}</p>
          <button type="button" id="addTocard-btn" onclick = "addToCart(${value.id})">Add To Cart</button>
          </div>
          `;

      document.getElementById("mens-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "women's clothing") {
      console.log(value);
      inhtml += `
        
        <div class="cards">
        <p class="title " style="font-size: 10px">Ladies</p>
        <img src="${value.image}" alt="">
        <div class="middle">
            <p>$${value.price}</p>
            <p class="special-p">S,M,L</p>
        </div>
        <p>Colors:  ${color[random]}</p>
        <p>Rating:  ${value.rating.rate}</p>
        <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id})">Add To Cart</button>
        </div>
        `;

      document.getElementById("womens-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    let random = Math.floor(Math.random() * color.length);
    if (value.category === "jewelery") {
      console.log(value);
      inhtml += `
        
        <div class="cards">
        <p class="title " style="font-size: 10px">Jewellery</p>
        <img src="${value.image}" alt="">
        <div class="middle">
            <p>$${value.price}</p>
        </div>
        <p>Colors:  ${color[random]}</p>
        <p>Rating:  ${value.rating.rate}</p>
        <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id})">Add To Cart</button>
        </div>
        `;

      document.getElementById("jewellerys-cards").innerHTML = inhtml;
    }
  });

  inhtml = " ";
  data.forEach((value, index) => {
    if (value.category === "electronics") {
      console.log(value);
      inhtml += `

      
      <div class="cards">
      <p class="title " style="font-size: 10px">Electronics</p>
      <img src="${value.image}" alt="">
      <div class="middle">
          <p>$${value.price}</p>
      </div>
      <p>Rating: ${value.rating.rate}</p>
      <button type="button" id="addTocard-btn" onclick = "AddToCart(${value.id})">Add To Cart</button>
      </div>
      `;

      document.getElementById("electronics-cards").innerHTML = inhtml;
    }
  });
}

//addtocard


//search funtionality

  
function searchProducts() {

  const searchInput = document.getElementById("search").value.toLowerCase();

  if(searchInput === null){
    document.body.style.display = "block";
  }
  const productTitles = document.querySelectorAll(".shopping-cards");
  console.log("api data : ",productTitles )

  productTitles.forEach((product) => {
      const title = product.textContent.toLowerCase();
      if (title.includes(searchInput)) {
          product.style.display = "block"; // Show matching products
      } else {
          product.style.display = "none"; // Hide non-matching products
      }
  });
}

document.getElementById("search").addEventListener("input", searchProducts);


//filter products

// function filterProduct(value) {
//   const buttons = document.querySelectorAll('.other-tag');
//   console.log('val',value)
//   buttons.forEach((btn) => {
//       if (value.toLowerCase() === btn.textContent.toLowerCase()) {
//         console.log('in')
//           btn.classList.add('active');
//       } else {
//         btn.classList.remove('active'); // corrected here
//       }
//   });

//   const productTitles = document.querySelectorAll(".shopping-cards");
//   console.log("api data : ",productTitles )

   
//   productTitles.forEach((product) => {
//     const title = product.textContent.toLowerCase();

    
//   if(value.toLowerCase() === title.toLowerCase()){
//     product.style.display = "block"; 
//   }
//   else{
//     product.style.display = "none";
//   }
// });
// }


// window.onload = function () {
//   filterProduct('All'); // Corrected to 'All'
// }

