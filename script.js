// ===========================
// Select Form
// ===========================

const form = document.getElementById("registrationForm");

const passwordInput = document.getElementById("password");

const strengthText = document.getElementById("passwordStrength");

const confirmPasswordInput = document.getElementById("confirmPassword");

const matchMessage = document.getElementById("matchMessage");

const mobileInput = document.getElementById("mobile");

// ===========================
// Password Show / Hide
// ===========================

function togglePassword(inputId, icon){

    const input = document.getElementById(inputId);

    if(input.type === "password"){

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    }

    else{

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}

// ===========================
// Password Strength
// ===========================

passwordInput.addEventListener("input", function(){

    const password = passwordInput.value;

    if(password.length === 0){

        strengthText.innerHTML = "";

    }

    else if(password.length < 6){

        strengthText.innerHTML = "🔴 Weak Password";
        strengthText.className = "strength-text weak";

    }

    else if(password.length < 10){

        strengthText.innerHTML = "🟡 Medium Password";
        strengthText.className = "strength-text medium";

    }

    else{

        strengthText.innerHTML = "🟢 Strong Password";
        strengthText.className = "strength-text strong";

    }

});

// ===========================
// Password Match
// ===========================

function checkPasswordMatch(){

    if(confirmPasswordInput.value === ""){

        matchMessage.innerHTML = "";

        return;

    }

    if(passwordInput.value === confirmPasswordInput.value){

        matchMessage.innerHTML = "✅ Passwords Match";

        matchMessage.className = "match-text match";

    }

    else{

        matchMessage.innerHTML = "❌ Passwords Do Not Match";

        matchMessage.className = "match-text not-match";

    }

}

passwordInput.addEventListener("input", checkPasswordMatch);

confirmPasswordInput.addEventListener("input", checkPasswordMatch);

// ===========================
// Mobile Validation
// ===========================

mobileInput.addEventListener("input", function(){

    this.value = this.value.replace(/[^0-9]/g,"");

    if(this.value.length > 10){

        this.value = this.value.slice(0,10);

    }

});



// ===========================
// Form Submit
// ===========================

form.addEventListener("submit", function(event){

    // Stop page refresh
    event.preventDefault();


    // Get Password Values

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;


    // Password Validation

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }


    // Show Success Popup

    document.getElementById("successPopup").style.display = "flex";


    // Reset Form

    form.reset();

    strengthText.innerHTML = "";

    matchMessage.innerHTML = "";

});


// ===========================
// Close Popup
// ===========================

function closePopup(){

    document.getElementById("successPopup").style.display = "none";

}