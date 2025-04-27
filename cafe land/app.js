// Pages Definition
let cartItems = [];  // 🛒 Store cart products here

const pages = [
    { id: 'welcome', title: 'Welcome' },
    { id: 'home', title: 'Home' },
    { id: 'cart', title: 'Cart' },
    { id: 'profile', title: 'Profile' },
    { id: 'order', title: 'order' }
    
  ];
  
  // Navbar Setup
  const navbar = document.getElementById('navbar');
  pages.forEach(page => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${page.id}">${page.title}</a>`;
    navbar.appendChild(li);
  });
  // Function to render the cart items dynamically
function renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    
    if (!cartContainer) return;
  
    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    } else {
      let cartHTML = `
        <ul class="cart-list">
          ${cartItems.map(item => `
            <li class="cart-item">
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-details">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
              </div>
            </li>
          `).join('')}
        </ul>
        <div class="cart-summary">
          <p>Total: ₹${cartItems.reduce((sum, item) => sum + item.price, 0)}</p>
          <button onclick="checkout()">Proceed to Checkout</button>
        </div>
      `;
      cartContainer.innerHTML = cartHTML;
    }
  }
  
  // Dummy checkout function
  function checkout() {
    alert("Order placed! ☕✨");
    cartItems = []; // Clear cart
    navigate('home');
  }
  
  
  // Pages Content
  const pageTemplates = {
    welcome: `
      <section class="welcome-page">
        <h1>Welcome to Cafe-Land</h1>
        <p>Sip. Smile. Create.</p>
         <button onclick="location.href='#home'">Go to Home</button>
            <button onclick="location.hash='signin'">Login</button>
      </section>
    `,
    signin: `
      <section class="form-page">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Enter Email" required>
          <input type="password" placeholder="Enter Password" required>
          <button type="submit">Sign In</button>
        </form>
        <p style="text-align:center; margin-top:10px;">
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
      </section>
    `,
    signup: `
      <section class="form-page">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Enter Email" required>
          <input type="password" placeholder="Enter Password" required>
          <input type="password" placeholder="Confirm Password" required>
          <button type="submit">Sign Up</button>
        </form>
        <p style="text-align:center; margin-top:10px;">
          Already have an account? <a href="#signin">Sign In</a>
        </p>
      </section>
    `,
   
    home: `
  <section class="hero-section">
  <div class="hero-content">
    <h1>Freshly Brewed, Just for You</h1>
    <p>Experience the finest coffee made with love. From espresso to iced coffee, we've got your cravings covered.</p>
  </div>
</section>


<section class="menu-page">
  <h1>Menu</h1>

  <div class="search-bar">
  <input type="text" id="searchInput" placeholder="Search for products..." />
</div>

<div class="filter">
  <label for="sortByPrice">Sort by Price: </label>
  <select id="sortByPrice">
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
  </select>
</div>


  <div class="categories">
    <button>Cold Coffee</button>
    <button>Hot Coffee</button>
    <button>Frappuccino</button>
    <button>Iced Coffee</button>
  </div>

  <div class="product-grid">
    <div class="product-card">
      <img src="pic/Brewcoffee.jpeg" alt="Cold Brew">
      <h3>Cold Brew</h3>
      <p>₹230</p>
      <button>Add to Cart</button>
    </div>
    <div class="product-card">
      <img src="pic/frappuccino.jpeg" alt="Frappuccino">
      <h3>Frappuccino</h3>
      <p>₹400</p>
      <button>Add to Cart</button>
    </div>
    <div class="product-card">
      <img src="pic/icedcoffee.jpeg" alt="Iced Coffee">
      <h3>Iced Coffee</h3>
      <p>₹200</p>
      <button>Add to Cart</button>
    </div>
    <div class="product-card">
      <img src="pic/Americano.jpeg" alt="Iced Americano">
      <h3>Iced Americano</h3>
      <p>₹150</p>
      <button>Add to Cart</button>
    </div>
  </div>
</section>
`,

cart: `

<section class="cart-page">
  <h1>Your Cart</h1>
  <h2 id="cartCounter">Items in Cart: 0</h2>
  <p id="emptyMessage" style="margin-top:20px;">Your Cart is Empty</p>

  <div id="cartContainer"></div>

  <div class="product-list">
    <!-- Cold Brew -->
    <div class="cart-item">
      <img src="pic/Brewcoffee.jpeg" alt="Cold Brew" class="coffee-img" />
      <h3>Cold Brew</h3>
      <p>₹230</p>
      <button onclick="addToCart('Cold Brew', 230, 'pic/Brewcoffee.jpeg')">Add Cold Brew</button>
      <div class="quantity-control">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
    </div>

    <!-- Frappuccino -->
    <div class="cart-item">
      <img src="pic/frappuccino.jpeg" alt="Frappuccino" class="coffee-img" />
      <h3>Frappuccino</h3>
      <p>₹400</p>
      <button onclick="addToCart('Frappuccino', 400, 'pic/frappuccino.jpeg')">Add Frappuccino</button>
      <div class="quantity-control">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
    </div>

    <!-- Iced Coffee -->
    <div class="cart-item">
      <img src="pic/icedcoffee.jpeg" alt="Iced Coffee" class="coffee-img" />
      <h3>Iced Coffee</h3>
      <p>₹200</p>
      <button onclick="addToCart('Iced Coffee', 200, 'pic/icedcoffee.jpeg')">Add Iced Coffee</button>
      <div class="quantity-control">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
    </div>

    <!-- Iced Americano -->
    <div class="cart-item">
      <img src="pic/Americano.jpeg" alt="Iced Americano" class="coffee-img" />
      <h3>Iced Americano</h3>
      <p>₹150</p>
      <button onclick="addToCart('Iced Americano', 150, 'pic/Americano.jpeg')">Add Iced Americano</button>
      <div class="quantity-control">
        <button class="decrease">-</button>
        <span class="quantity">1</span>
        <button class="increase">+</button>
      </div>
    </div>
  </div>
  
</section>


`,

profile: `
<section class="profile-page">
  <h1>My Profile</h1>
  <div class="profile-card">
    <img src="pic/download (1).jpeg" alt="Profile Picture" class="profile-pic">
    <h2 id="profileName">Sherry</h2>
    <p id="profileLocation">📍 Bangalore, India</p>
    <p id="profileFavorite">☕ Favorite: Cold Brew</p>
    <div class="loyalty-badge">
      ⭐ 120 Cups Earned
    </div>
    <button class="edit-profile-btn" onclick="openEditProfile()">Edit Profile</button>
  </div>

  <!-- Hidden Popup Form -->
  <div id="editProfilePopup" class="popup-form hidden">
    <div class="popup-content">
      <h2>Edit Profile</h2>
      <input type="text" id="editName" placeholder="Enter your name">
      <input type="text" id="editLocation" placeholder="Enter location">
      <input type="text" id="editFavorite" placeholder="Favorite coffee">
      <button onclick="saveProfile()">Save</button>
      <button onclick="closeEditProfile()" class="cancel-btn">Cancel</button>
    </div>
  </div>
</section>
`
,
order: `
<section class="order-page">
  <h1>Track Your Order</h1>
  
  <div class="order-tracker">
    <div class="step completed">✅ Order Confirmed</div>
    <div class="step">⏳ Preparing Coffee</div>
    <div class="step">🏍 Out for Delivery</div>
    <div class="step">📦 Delivered</div>
  </div>
  
  <button onclick="startOrderTracking()">Start Tracking</button>
</section>
`


  };
  
  // Router
  function router() {
    const hash = window.location.hash.replace('#', '') || 'welcome';
    const content = document.getElementById('content');
    content.innerHTML = pageTemplates[hash] || `<h2>Page Not Found</h2>`;
  }
  
  // Listen to hash changes
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  function addToCart(name, price, image) {
  cartItems.push({ name, price, image });
  alert(`${name} added to cart!`);
}

function openEditProfile() {
    document.getElementById('editProfilePopup').classList.remove('hidden');
  }
  
  function closeEditProfile() {
    document.getElementById('editProfilePopup').classList.add('hidden');
  }
  
  function saveProfile() {
    const newName = document.getElementById('editName').value.trim();
    const newLocation = document.getElementById('editLocation').value.trim();
    const newFavorite = document.getElementById('editFavorite').value.trim();
  
    if (newName) {
      document.getElementById('profileName').textContent = newName;
    }
    if (newLocation) {
      document.getElementById('profileLocation').textContent = `📍 ${newLocation}`;
    }
    if (newFavorite) {
      document.getElementById('profileFavorite').textContent = `☕ Favorite: ${newFavorite}`;
    }
  
    closeEditProfile();
  }
  function startOrderTracking() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;
  
    function nextStep() {
      if (currentStep < steps.length) {
        steps[currentStep].classList.add('completed');
        currentStep++;
        setTimeout(nextStep, 2000); // 2 seconds between steps
      } else {
        alert("Your Coffee has been Delivered! ☕📦 Enjoy!");
      }
    }
  
    nextStep();
  }
  function addToCart(name, price, imageUrl) {
    const cartContainer = document.getElementById('cartContainer');
  
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item-added');
  
    cartItem.innerHTML = `
      <img src="${imageUrl}" alt="${name}" style="width:100%; height:auto; border-radius:10px; margin-bottom:10px;">
      <h3>${name}</h3>
      <p>Price: ₹${price}</p>
    `;
  
    cartContainer.appendChild(cartItem);
  }
  function addToCart(name, price, imageUrl) {
    const cartContainer = document.getElementById('cartContainer');
  
    // Create a new div for the cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item-added');
  
    // Create image
    const itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.alt = name;
    itemImage.style.width = "100%";
    itemImage.style.height = "auto";
    itemImage.style.borderRadius = "10px";
    itemImage.style.marginBottom = "10px";
  
    // Create name heading
    const itemName = document.createElement('h3');
    itemName.textContent = name;
  
    // Create price paragraph
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ₹${price}`;
  
    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
  
    // Remove function on button
    removeBtn.addEventListener('click', function() {
      cartContainer.removeChild(cartItem);
    });
  
    // Add everything into the cartItem div
    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeBtn);
  
    // Finally add cartItem into the cartContainer
    cartContainer.appendChild(cartItem);
  }
  function updateCartCounter() {
    const cartContainer = document.getElementById('cartContainer');
    const cartCounter = document.getElementById('cartCounter');
    const itemCount = cartContainer.children.length;
    cartCounter.textContent = `Items in Cart: ${itemCount}`;
  }
  
  function addToCart(name, price, imageUrl) {
    const cartContainer = document.getElementById('cartContainer');
  
    // Create a new div for the cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item-added');
  
    // Create image
    const itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.alt = name;
    itemImage.style.width = "100%";
    itemImage.style.height = "auto";
    itemImage.style.borderRadius = "10px";
    itemImage.style.marginBottom = "10px";
  
    // Create name heading
    const itemName = document.createElement('h3');
    itemName.textContent = name;
  
    // Create price paragraph
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ₹${price}`;
  
    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
  
    // Remove function on button
    removeBtn.addEventListener('click', function() {
      cartContainer.removeChild(cartItem);
      updateCartCounter(); // Update counter after removing
    });
  
    // Add everything into the cartItem div
    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeBtn);
  
    // Finally add cartItem into the cartContainer
    cartContainer.appendChild(cartItem);
  
    updateCartCounter(); // Update counter after adding
  }
  function updateCartCounter() {
    const cartContainer = document.getElementById('cartContainer');
    const cartCounter = document.getElementById('cartCounter');
    const itemCount = cartContainer.children.length;
    cartCounter.textContent = `Items in Cart: ${itemCount}`;
  
    // Add pop animation
    cartCounter.classList.remove('pop'); // Reset any existing animation
    void cartCounter.offsetWidth;        // Trick to re-trigger animation
    cartCounter.classList.add('pop');     // Add pop class
  }
  function updateCartCounter() {
    const cartContainer = document.getElementById('cartContainer');
    const cartCounter = document.getElementById('cartCounter');
    const emptyMessage = document.getElementById('emptyMessage');
    const itemCount = cartContainer.children.length;
    
    cartCounter.textContent = `Items in Cart: ${itemCount}`;
  
    // Pop animation for counter
    cartCounter.classList.remove('pop');
    void cartCounter.offsetWidth;
    cartCounter.classList.add('pop');
  
    // Show or hide empty message
    if (itemCount === 0) {
      emptyMessage.style.display = 'block'; // Show message
    } else {
      emptyMessage.style.display = 'none';  // Hide message
    }
  }
  function addToCart(name, price, imageUrl) {
    const cartContainer = document.getElementById('cartContainer');
  
    // Create a new div for the cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item-added');
  
    // Create image
    const itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.alt = name;
    itemImage.style.width = "100%";
    itemImage.style.height = "auto";
    itemImage.style.borderRadius = "10px";
    itemImage.style.marginBottom = "10px";
  
    // Create name heading
    const itemName = document.createElement('h3');
    itemName.textContent = name;
  
    // Create price paragraph
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: ₹${price}`;
    itemPrice.classList.add('item-price');
  
    // Quantity control div
    const quantityControl = document.createElement('div');
    quantityControl.classList.add('quantity-control');
  
    // Quantity buttons
    const decreaseBtn = document.createElement('button');
    decreaseBtn.classList.add('decrease');
    decreaseBtn.textContent = '-';
  
    const quantitySpan = document.createElement('span');
    quantitySpan.classList.add('quantity');
    quantitySpan.textContent = '1'; // Default quantity is 1
  
    const increaseBtn = document.createElement('button');
    increaseBtn.classList.add('increase');
    increaseBtn.textContent = '+';
  
    // Add quantity control buttons to the div
    quantityControl.appendChild(decreaseBtn);
    quantityControl.appendChild(quantitySpan);
    quantityControl.appendChild(increaseBtn);
  
    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
  
    // Handle decrease quantity
    decreaseBtn.addEventListener('click', function() {
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
        updateCartSummary();
      }
    });
  
    // Handle increase quantity
    increaseBtn.addEventListener('click', function() {
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
      updateCartSummary();
    });
  
    // Handle remove item
    removeBtn.addEventListener('click', function() {
      cartContainer.removeChild(cartItem);
      updateCartSummary(); // Update cart summary after removal
    });
  
    // Append everything to cart item
    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(quantityControl);
    cartItem.appendChild(removeBtn);
  
    // Add the cart item to the cart container
    cartContainer.appendChild(cartItem);
  
    updateCartSummary(); // Update cart summary after adding
  }
  
  function updateCartSummary() {
    const cartContainer = document.getElementById('cartContainer');
    const totalItems = cartContainer.children.length;
  
    // Calculate total price
    const totalPrice = Array.from(cartContainer.children).reduce((total, item) => {
      const price = parseFloat(item.querySelector('.item-price').textContent.replace('₹', ''));
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      return total + (price * quantity);
    }, 0);
  
    // Update the cart summary (you can customize this part as per your design)
    document.getElementById('cartSummary').innerHTML = `
      <h3>Cart Summary</h3>
      <p>Total Items: ${totalItems}</p>
      <p>Total Price: ₹${totalPrice.toFixed(2)}</p>
      <button id="checkoutBtn">Proceed to Checkout</button>
    `;
  }
  // Listen for changes in the search input field
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase(); // Convert input to lowercase
  filterProducts(searchTerm); // Call filter function with the search term
});

function filterProducts(term) {
  const productCards = document.querySelectorAll('.product-card'); // Get all product cards

  productCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase(); // Get product name
    // If the product name includes the search term, show the card; otherwise, hide it
    if (productName.includes(term)) {
      card.style.display = "block"; // Show product card
    } else {
      card.style.display = "none"; // Hide product card
    }
  });
}
// Get the dropdown select element
const sortByPrice = document.getElementById('sortByPrice');

// Add an event listener to the dropdown
sortByPrice.addEventListener('change', function () {
  const sortValue = sortByPrice.value; // Get selected sorting option
  sortProducts(sortValue); // Call the function to sort the products
});

// Function to sort products based on the selected option
function sortProducts(order) {
  const productCards = Array.from(document.querySelectorAll('.product-card')); // Get all product cards
  const sortedCards = productCards.sort((a, b) => {
    const priceA = parseInt(a.querySelector('p').textContent.replace('₹', '')); // Get price from product A
    const priceB = parseInt(b.querySelector('p').textContent.replace('₹', '')); // Get price from product B
    return order === 'lowToHigh' ? priceA - priceB : priceB - priceA; // Sort based on price order
  });

  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = ''; // Clear current product grid

  // Reappend sorted products to the grid
  sortedCards.forEach(card => productGrid.appendChild(card));
}
function openEditProfile() {
    document.getElementById('editProfilePopup').classList.remove('hidden');
  }
  
  function closeEditProfile() {
    document.getElementById('editProfilePopup').classList.add('hidden');
  }
  
  function saveProfile() {
    const newName = document.getElementById('editName').value;
    const newLocation = document.getElementById('editLocation').value;
    const newFavorite = document.getElementById('editFavorite').value;
  
    if (newName) document.getElementById('profileName').innerText = newName;
    if (newLocation) document.getElementById('profileLocation').innerText = `📍 ${newLocation}`;
    if (newFavorite) document.getElementById('profileFavorite').innerText = `☕ Favorite: ${newFavorite}`;
  
    closeEditProfile();
  }
  