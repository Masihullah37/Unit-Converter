
 // STEP 1: Get the HTML elements we need
        const unitInput = document.getElementById("unit-input");
        const convertBtn = document.getElementById("convert-btn");
        const resultsContainer = document.getElementById("conversion-results");

        // STEP 2: Create an array to store all our conversion information
        // This is like a shopping list of all the conversions we want to do
        const conversions = [
            {
                title: "Length (Meter/Feet)",
                fromUnit: "meters",
                toUnit: "feet",
                conversionFactor: 3.28084, // 1 meter = 3.28084 feet
                reverseFactor: 0.3048      // 1 foot = 0.3048 meters
            },
            {
                title: "Volume (Liters/Gallons)", 
                fromUnit: "liters",
                toUnit: "gallons",
                conversionFactor: 0.264172, // 1 liter = 0.264172 gallons
                reverseFactor: 3.78541      // 1 gallon = 3.78541 liters
            },
            {
                title: "Mass (Kilograms/Pounds)",
                fromUnit: "kilos", 
                toUnit: "pounds",
                conversionFactor: 2.20462, // 1 kg = 2.20462 pounds
                reverseFactor: 0.453592    // 1 pound = 0.453592 kg
            }
        ];

        // STEP 3: Function to format numbers (round to 3 decimal places)
        function formatNumber(num) {
            return num.toFixed(3);
        }

        // STEP 4: Function to do all conversions and display results
        function performConversions() {
            // Get the number from the input box
            const inputValue = parseFloat(unitInput.value);
            
            // Clear previous results
            resultsContainer.innerHTML = "";
            
            // STEP 5: Use a for loop to go through each conversion in our array
            // This is why we use a for loop - to repeat the same process for each item
            for (let i = 0; i < conversions.length; i++) {
                // Get the current conversion from our array
                const conversion = conversions[i];
                
                // Do the forward conversion (like meters to feet)
                const forwardResult = inputValue * conversion.conversionFactor;
                
                // Do the reverse conversion (like feet to meters)  
                const reverseResult = inputValue * conversion.reverseFactor;
                
                // Create the result text
                const resultText = `${inputValue} ${conversion.fromUnit} = ${formatNumber(forwardResult)} ${conversion.toUnit} | ${inputValue} ${conversion.toUnit} = ${formatNumber(reverseResult)} ${conversion.fromUnit}`;
                
                // STEP 6: Create HTML to display this result
                const sectionHTML = `
                    <div class="conversion-section">
                        <h3 class="conversion-title">${conversion.title}</h3>
                        <p class="conversion-result">${resultText}</p>
                    </div>
                `;
                
                // Add this section to our results container
                resultsContainer.innerHTML += sectionHTML;
            }
        }

        // STEP 7: Show conversions when page loads
        performConversions();
        
        // STEP 8: Update conversions when button is clicked
        convertBtn.addEventListener("click", performConversions);
      
      
      const img = [
        "images/babypanda.png",
        "images/panda.png",
        "images/sunflower.png"

      ]

      let images = document.getElementById("images")

      function renderImages(){
        let imgsDOM = ""
        for (let i=0; i<img.length; i++){
          imgsDOM += `<img alt="animal images" class="team_img" src ="${img[i]}">`
         
        }
        images.innerHTML = imgsDOM
     
          
       

      }

      renderImages()