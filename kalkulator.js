function calculateCarbon() {
    let power = parseFloat(document.getElementById("electronic").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let days = parseFloat(document.getElementById("days").value);
    let period = document.getElementById("period").value;
    let emissionFactor = 0.92; // kg CO2 per kWh

    let daysInPeriod = period === "perhari" ? 1 : period === "perbulan" ? 30 : 365;

    if (!isNaN(power) && !isNaN(hours) && !isNaN(days)) {
        let energyConsumption = (power * hours * daysInPeriod) / 1000; // kWh dalam periode tertentu
        let carbonFootprint = energyConsumption * emissionFactor; // kg CO2 dalam periode tertentu
        document.getElementById("result").innerText = 
            `Jejak karbon: ${carbonFootprint.toFixed(2)} kg CO2 ${period}`;
    } else {
        document.getElementById("result").innerText = "Silakan isi semua bidang dengan angka yang valid.";
    }
}

function calculateElectricityCarbon() {
    let regionFactor = parseFloat(document.getElementById("region").value);
    let kwh = parseFloat(document.getElementById("kwh").value);
    let householdKwh = parseFloat(document.getElementById("household_kwh").value);

    if (!isNaN(regionFactor) && !isNaN(kwh) && !isNaN(householdKwh)) {
        let individualCarbon = kwh * regionFactor;
        let householdCarbon = householdKwh * regionFactor;
        document.getElementById("result").innerText = 
            `Jejak karbon individu: ${individualCarbon.toFixed(2)} kg CO2/bulan\n` + 
            `Jejak karbon rumah tangga: ${householdCarbon.toFixed(2)} kg CO2/bulan`;
    } else {
        document.getElementById("result").innerText = "Silakan masukkan konsumsi listrik dengan benar.";
    }
}