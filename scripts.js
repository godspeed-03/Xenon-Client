// Function to get the value of a specific cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Check user loginentication based on the presence of both tokens
function checklogin() {
  const loginButton = document.getElementById("loginButton");

  // Check for the presence of both userAccessToken and userRefreshToken
  const accessToken = getCookie("userAccessToken");
  const refreshToken = getCookie("userRefreshToken");

  if (accessToken && refreshToken) {
    loginButton.textContent = "Dashboard";
    loginButton.onclick = () => {
      window.location.href = "./dashboard.html";
    };
  } else {
    // User is not loginenticated, show Login
    loginButton.textContent = "Login";
    loginButton.onclick = () => {
      window.location.href = "./login/login.html"; // Or your login page
    };
  }
}

async function fetchProperties(page = 1, search = "") {
  const limit = 15; // Number of properties per page
  const url = `http://localhost:3700/api/v1/prop/properties?page=${page}&limit=${limit}&search=${search}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.properties.length > 0) {
      displayProperties(data.data.properties);
      renderPagination(data.data.currentPage, data.data.totalPages);
    } else {
      const propertiesContainer = document.getElementById("properties");
      propertiesContainer.innerHTML =
        "<p>No properties found matching your search.</p>";
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
}

// Display the property cards
function displayProperties(properties) {
  const propertiesContainer = document.getElementById("properties");
  propertiesContainer.innerHTML = ""; // Clear the existing content

  properties.forEach((property) => {
    const propertyCard = document.createElement("div");
    propertyCard.classList.add("property-card");
    propertyCard.innerHTML = `
      <h3>Name : ${property.Property_Name}</h3>
      <p>City : ${property.City_name}</p>
      <p>No. of BHK : ${property.No_of_BHK}</p>
      <p>Price : ${property.Price}</p>
      <p>Status : ${property.Status}</p>
    `;
    propertiesContainer.appendChild(propertyCard);
  });
}

// Render the pagination buttons
function renderPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const searchQuery = document.getElementById("searchInput").value.trim();

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.onclick = () => fetchProperties(currentPage - 1, searchQuery);
    paginationContainer.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = () => fetchProperties(currentPage + 1, searchQuery);
    paginationContainer.appendChild(nextButton);
  }
}

// Save search query to the backend
async function saveSearchQuery(searchQuery) {
  try {
    const response = await fetch(
      "http://localhost:3700/api/v1/user/savequery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchQuery }),
        credentials: "include", // Send search query to backend
      }
    );

    const data = await response.json();
    if (data.success) {
      console.log("Search query saved successfully!");
    } else {
      // Log a warning message when the query is already saved
      console.warn(
        "Search query already saved, proceeding to fetch properties."
      );
    }
  } catch (error) {
    console.error("Error saving search query:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checklogin();

  const findButton = document.getElementById("findButton");
  findButton.addEventListener("click", () => {
    const searchQuery = document.getElementById("searchInput").value.trim();

    if (searchQuery) {
      saveSearchQuery(searchQuery);

      fetchProperties(1, searchQuery); // Fetch the first page with the search query
    } else {
      fetchProperties(1, "");
    }
  });

  // Initial fetch with no search query
  fetchProperties(1);
});
