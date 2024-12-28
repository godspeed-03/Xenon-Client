### **Project Overview: Property Recommendation System**

#### **Project Name**: Property Recommendation System

#### **Project Description**:

The **Xenon User Authentication System** is a secure, user-friendly web-based application that allows users to register, log in, and verify their accounts via OTP (One-Time Password). It provides features such as profile management, secure authentication, and a personalized dashboard. This system is designed to offer an intuitive user experience while ensuring security through OTP verification and token-based authentication.

#### **Project Goals**:

*   **User Registration**: Enable users to create an account by providing essential details such as full name, email, password, and an avatar.
    
*   **User Login**: Allow users to log in using their credentials, ensuring secure authentication.
    
*   **OTP Verification**: Provide an additional layer of security by sending an OTP to the user's email for account verification.
    
*   **Personalized Dashboard**: After successful login and verification, users are directed to a personalized dashboard where they can view their profile and account details.
    

### **Key Features**:

1.  **User Registration**:
    
    *   Users can sign up by entering their name, email, password, and uploading an avatar.
        
    *   The system validates the email format and password strength.
        
    *   Upon successful registration, users are redirected to an OTP verification page.
        
2.  **User Login**:
    
    *   Users can log in using their registered email and password.
        
    *   The system checks for correct credentials and verifies the user's email status (verified or unverified).
        
    *   Users are redirected to the dashboard upon successful login.
        
3.  **OTP Verification**:
    
    *   After registration, users receive an OTP (One-Time Password) via email for account verification.
        
    *   Users must input the OTP to verify their account.
        
    *   The verification process ensures that only valid users can access their accounts.
        
4.  **Dashboard**:
    
    *   Once logged in, users are directed to a personalized dashboard where they can view their profile information, including their avatar, email, and verification status.
        
    *   The dashboard provides options to log out and securely exit the application.
        
5.  **Security**:
    
    *   The system uses token-based authentication (JWT) to maintain secure sessions.
        
    *   OTP is used to verify user accounts during registration and re-verification phases.
        
6.  **Responsive Design**:
    
    *   The application’s interface is responsive, offering a smooth user experience across different devices (desktop, tablet, and mobile).
        

### **Technologies Used**:

1.  **Frontend**:
    
    *   **HTML5, CSS3**: For building the structure and styling the web pages.
        
    *   **JavaScript**: For dynamic functionality, including form validation, API calls, and updating the UI based on responses.
        
    *   **Fetch API**: To interact with backend endpoints for registration, login, and OTP verification.
        
    *   **FormData**: For submitting form data (including file uploads like avatars) to the backend.
        
    *   **Responsive Design**: Using CSS media queries to ensure the application works on mobile and desktop devices.
        
2.  **Backend** (API):
    
    *   **Node.js**: Backend server for handling requests, processing data, and sending responses.
        
    *   **Express.js**: Framework used to build RESTful APIs for user authentication and OTP verification.
        
    *   **JWT (JSON Web Tokens)**: For managing secure authentication tokens, which are used for session management and protecting routes.
        
    *   **Nodemailer**: For sending OTPs to users’ email addresses during registration and re-verification.
        
3.  **Database**:
    
    *   **MongoDB**: For storing user data, including profiles, email, passwords (hashed), and avatar information.
        
4.  **Hosting/Deployment**:
    
    *   **Render**: Used to host the backend API.
        
    *   **Netlify/Other Services**: For deploying the frontend application.
        
5.  **Version Control**:
    
    *   **Git/GitHub**: For source control and collaboration.
        

### **User Flow**:

1.  **User Registration**:
    
    *   User submits registration form.
        
    *   Backend stores the user’s data in the database (password is hashed for security).
        
    *   An OTP is generated and sent to the user's email.
        
    *   User is redirected to the OTP verification page.
        
2.  **OTP Verification**:
    
    *   User enters the OTP received in their email.
        
    *   Backend verifies the OTP.
        
    *   If verified, the user is redirected to the login page.
        
    *   If not verified, the user is prompted to try again.
        
3.  **User Login**:
    
    *   User logs in using email and password.
        
    *   The backend checks the credentials and sends back an authentication token (JWT).
        
    *   Upon successful login, the user is redirected to the dashboard.
        
4.  **Dashboard**:
    
    *   The user sees a welcome message, their avatar, email, and verification status.
        
    *   They can log out at any time.
        

### **Setup Instructions**:

#### **Frontend Setup**:

``` bash
git clone https://github.com/godspeed-03/Xenon-Client
    
cd Xenon-Client
    
Run with live server
    
Access the application in your browser at http://localhost:5500.
    
```
        

### **Conclusion**:

The Xenon User Authentication System is a secure and scalable solution for user management. It incorporates important security measures such as OTP verification and token-based authentication, ensuring a safe experience for users. The system is highly customizable, allowing easy integration with different platforms and services.