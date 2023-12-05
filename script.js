

    // Reference the state and city select elements
    var stateSelect = document.getElementById("state")
    var citySelect = document.getElementById("city")

    // Define a JavaScript object with city data for each state
    var cityData = 
    { 
      Tamilnadu: ["Select city","Chennai", "Coimbatore", "Madurai", "Trichy","Dindigul"],
      Kerala: ["Select city","Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
      Karnataka: ["Select city","Bengaluru", "Mysuru", "Hubli", "Mangaluru"],
        // Add more state-city mappings as needed
    }

    // Function to populate the city dropdown based on the selected state
    function populateCities() {
        var selectedState = stateSelect.value
        var cities = cityData[selectedState]
        // Clear the city dropdown
        citySelect.innerHTML = "";

        // Populate the city dropdown with new options
        if (cities) {
            for (var i = 0; i < cities.length; i++) {
                var option = document.createElement("option")
                option.text = cities[i]
                option.value = cities[i]
                citySelect.appendChild(option)
            }
        }
    }

    // Add an event listener to the state dropdown to trigger city population
    stateSelect.addEventListener("change", populateCities)

    // Initial population of the city dropdown based on the default state
    populateCities()

//zip code
    function validateZipCode() {
        let zipCodeInput = document.getElementById('zipCodeInput');
        let zipCodeError = document.getElementById('zipCodeError');
        
        if (zipCodeInput.value.length > 6) {
          zipCodeInput.value = zipCodeInput.value.slice(0, 6);
          zipCodeError.textContent = 'Maximum length is 6 digits.';
        } else {
          zipCodeError.textContent = '';
        }
      }
//date DISABLE IN FUTURE
      const incident= document.getElementById('incident');
    
      incident.addEventListener('input', function () {
      const selectedDate = new Date(this.value);
      const today = new Date();

      if (selectedDate > today) {
        alert('Please select a date in the past or today.');
        this.value = ''; // Clear the input field
      }
    });
//date DISABLE IN PAST
    const datePicker = document.getElementById('datePicker');
    
    datePicker.addEventListener('input', function () {
    const selectedDate = new Date(this.value);
    const today = new Date();

    if (selectedDate < today) {
      alert('Please select a date in the future or today.');
      this.value = ''; // Clear the input field
    }
  });
