// Function to fetch recommended properties from the backend
async function fetchRecommendedProperties() {
  try {
    const response = await fetch(
      "http://localhost:3700/api/v1/user/getrecomdation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recommended properties");
    }

    const data = await response.json();

    displayRecommendedProperties(data.recommendedProperties);
  } catch (error) {
    console.error("Error fetching recommended properties:", error);
    document.getElementById("recomended").innerHTML =
      "<p>Failed to load recommendations.</p>";
  }
}

function displayRecommendedProperties(properties) {
  const recommendedSection = document.getElementById("recomended");
  recommendedSection.innerHTML = ""; 
  if (properties.length === 0) {
    recommendedSection.innerHTML =
      "<p>No recommendations available at this time.</p>";
    return;
  }

  // Loop through each property and create HTML elements to display
  properties.forEach((property) => {
    const propertyCard = document.createElement("div");
    propertyCard.classList.add("property-card");
    propertyCard.innerHTML = `
        <h3>${property.Property_Name}</h3>
        <p><strong>City:</strong> ${property.City_name}</p>
        <p><strong>Price:</strong> ${property.Price}</p>
        <p><strong>Status:</strong> ${property.Status}</p>
        <button class="view-button" onclick="viewProperty(${property._id})">View Details</button>
      `;
    recommendedSection.appendChild(propertyCard);
  });
}

function viewProperty(propertyId) {
  window.location.href = `/property-details.html?id=${propertyId}`;
}

// Call the function to fetch recommended properties on page load
document.addEventListener("DOMContentLoaded", fetchRecommendedProperties);
