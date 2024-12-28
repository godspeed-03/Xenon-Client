const registerForm = document.getElementById('registerForm');
const responseMessage = document.getElementById('responseMessage');


registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const formData = new FormData();
  formData.append('fullName', document.getElementById('name').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('password', document.getElementById('password').value);
  formData.append('avatar', document.getElementById('avatar').files[0]);

  try {
    // Send POST request to backend
    const response = await fetch('http://localhost:3700/api/v1/user/register', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.status === 201) {
      responseMessage.style.color = 'green';
      responseMessage.textContent = 'Registration successful! Redirecting to OTP verification...';

      setTimeout(() => {
        window.location.href = './verify.html?email=' + encodeURIComponent(data.data.email);
      }, 2000); // Redirect after 2 seconds delay
    } else {
      responseMessage.style.color = 'red';
      responseMessage.textContent = data.message || 'Registration failed!';
    }
  } catch (error) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'An error occurred. Please try again.';
    console.error(error);
  }
});
