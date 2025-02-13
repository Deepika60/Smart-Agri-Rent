function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username.length>0 && password.length>0)
    {
        alert("Login Successful");
        window.location.href = "equipments.html";
    } else {
        alert("Invalid credentials");
    }
}

function showDetails(name,avail, mileage, rent, returnDate) {
    document.getElementById("equipment-details").classList.remove("hidden");
    document.getElementById("equip-name").innerText = name;
    document.getElementById("equip-avail").innerText = avail;
    document.getElementById("equip-mileage").innerText = mileage;
    document.getElementById("equip-rent").innerText = rent;
    document.getElementById("equip-return").innerText = returnDate;
}

function bookEquipment() {
    let available=document.getElementById("equip-avail").innerText.trim();
    
    if(available==='A') {
        document.getElementById("qr-code").classList.remove("hidden");
        document.getElementById("qr-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PayNow";
    } else {
        alert("Equipment not available");
    }
}