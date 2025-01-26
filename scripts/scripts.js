document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const resultDiv = document.getElementById("result");

    // Validate inputs
    if (!birthdate || !gender) {
      resultDiv.textContent = "Please fill in all fields.";
      resultDiv.style.color = "red";
      return;
    }

    const date = new Date(birthdate);
    const dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ...

    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    let akanName;
    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
    }

    resultDiv.textContent = `Your Akan name is ${akanName}!`;
    resultDiv.style.color = "#007bff";
  });
