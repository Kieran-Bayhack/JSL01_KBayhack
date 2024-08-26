function validateSyntax() {
    let regEx = /^pet_[A-Za-z0-9]+$/; //create variable to hold Regex - 
    let input = document.getElementById('petInput').value; //create variable to store user input
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (regEx.test(input)) {
            result = "Valid Syntax ✅";
        }
        else {
            result = "Invalid syntax ❌";
        }

            document.getElementById('result').innerText = result;
}


