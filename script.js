function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@)[a-zA-Z0-9@]+$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain an uppercase letter, a number, and no special characters (other than @).");
      return false;
    }
  
    return true;
  }
