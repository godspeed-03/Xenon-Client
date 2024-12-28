const userData = JSON.parse(localStorage.getItem("user"));

if (userData) {
  document.getElementById("fullName").textContent = userData.user.fullName;
  document.getElementById("email").textContent = userData.user.email;

  const verificationStatus = userData.user.isVerified
    ? "Verified"
    : "Not Verified";
  document.getElementById("verificationStatus").textContent =
    verificationStatus;

  document.getElementById("avatar").src = userData.user.avatar;

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
