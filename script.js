document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Generate unique ID
    const uniqueId = "NPH-" + gender + Date.now().toString(36).toUpperCase();
    
    // Get name and email
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Display success message and unique ID
    document.getElementById("uniqueId").innerText = uniqueId;
    document.getElementById("successMessage").style.display = "block";
    
    // Store participant data
    localStorage.setItem("userId", uniqueId);
    localStorage.setItem("userName", name);
  
    // Reset the form
    document.getElementById("registrationForm").reset();
  });
  
  // Function to print participant tag
  function printTag() {
    const participantName = localStorage.getItem("userName");
    const participantId = localStorage.getItem("userId");
  
    document.getElementById("participantName").innerText = participantName;
    document.getElementById("participantId").innerText = participantId;
  
    // Display the tag for printing
    const tag = document.getElementById("printableTag");
    tag.style.display = "block";
  
    // Print the tag
    window.print();
    
    // Hide the tag after printing
    tag.style.display = "none";
  }
  