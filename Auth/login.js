// Get the login form and response message element
const loginForm = document.getElementById('loginForm');
const responseMessage = document.getElementById('responseMessage');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send login credentials to the backend
  try {
    const response = await fetch('http://localhost:3700/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // Send email and password to backend
      credentials: 'include', // Include cookies in the request
    });

    const data = await response.json();

    if (response.ok) {
      responseMessage.style.color = 'green';
      responseMessage.textContent = 'Login successful!';

      localStorage.setItem('user', JSON.stringify(data.data)); // Store logged-in user data

      setTimeout(() => {
        window.location.href = '../index.html'; // Redirect to the main page
      }, 2000); // 2-second delay before redirect
    } else {
      responseMessage.style.color = 'red';
      responseMessage.textContent = data.message || 'Login failed!';
    }
  } catch (error) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'An error occurred. Please try again.';
    console.error(error);
  }
});
