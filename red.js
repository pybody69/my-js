// Function to get a cookie's value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  // Function to set a cookie's value
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }
  
  // Start the redirection process
  function startRedirect() {
    let visits = parseInt(getCookie("visits") || "0");
    visits += 1;
    setCookie("visits", visits, 365);
  
    let delay = 5000 + (visits * 1000); // Increase delay based on visits (5 to 60 seconds)
    if (delay > 60000) delay = 60000; // Max delay of 1 minute
  
    let countdown = delay / 1000;
    const timer = document.getElementById("timer");
  
    const interval = setInterval(() => {
      countdown--;
      timer.textContent = countdown;
      if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = "${targetURL}";
      }
    }, 1000);
  }
  
  // Add event listener for the redirect button
  document.getElementById("redirectBtn").addEventListener("click", startRedirect);
  
