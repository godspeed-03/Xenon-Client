const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

const otpForm = document.getElementById("otpForm");
const responseMessage = document.getElementById("responseMessage");

otpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const otp = document.getElementById("otp").value;

  try {
    const response = await fetch(
      "https://xenon-backend-1p9n.onrender.com/api/v1/user/verifyotp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
        credentials: "include",
      }
    );

    const data = await response.json();

    if (response.ok) {
      responseMessage.style.color = "green";
      responseMessage.textContent = "Login successful!";

      localStorage.setItem("user", JSON.stringify(data.data)); // Store logged-in user data

      setTimeout(() => {
        window.location.href = "../index.html"; // Redirect to the main page
      }, 2000); // 2-second delay before redirect
    } else {
      responseMessage.style.color = "red";
      responseMessage.textContent = data.message || "Verification failed!";
    }
  } catch (error) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "An error occurred. Please try again.";
    console.error(error);
  }
});
