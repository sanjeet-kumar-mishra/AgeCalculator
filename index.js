const dob = document.getElementById("dob");



function calculateAge() {
    const dobval = dob.value;

    if (dobval == "") {
        document.getElementById("result").style.color = "#ff0000";
        document.getElementById("result").innerHTML = "Plaese enter your date of birth";
    } else {
        const currentDate = new Date();
        const inputDate = new Date(dobval);
        const age = currentDate - inputDate;
        const ageInDays = age / (1000 * 60 * 60 * 24);
        const ageInYears = ageInDays / 365.25;
        const monthReminder = ageInDays % 365.25;
        const ageInMonths = monthReminder / 30;
        const daysReminder = monthReminder % 30;
        
        document.getElementById("result").style.color = "#004799";
        
        document.getElementById("result").innerHTML = 
        `Your age is ${Math.round(ageInYears)} years 
        ${Math.round(ageInMonths)} months 
        ${Math.round(daysReminder)} days`;

    }
}