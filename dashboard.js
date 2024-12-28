const user = JSON.parse(localStorage.getItem("user"));
const userData = user.loggedInUser

console.log(userData)

if (userData) {
  document.getElementById("fullName").textContent = userData.fullName;
  document.getElementById("email").textContent = userData.email;

  const verificationStatus = userData.isVerified
    ? "Verified"
    : "Not Verified";
  document.getElementById("verificationStatus").textContent =
    verificationStatus;

  document.getElementById("avatar").src = userData.avatar;

  document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("user");

    document.cookie =
      "userAccessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie =
      "userRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    localStorage.removeItem("user");
    window.location.href = "./index.html";
  });
} else {
  window.location.href = "./index.html";
}
