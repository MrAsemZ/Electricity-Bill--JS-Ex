//on the basis that the whole bill be prices as the tier price

function calculateElectricityBill (previousReading, currentReading){
    if (currentReading >= previousReading){
        let consumption = currentReading - previousReading;
        let price;
        let tier;

        if (consumption >= 1 && consumption <= 300){
            price = 0.05;
            tier = "Tier 1, (1-300kWh).";
        }
        else if (consumption >= 301 && consumption <= 600){
            price = 0.1;
            tier = "Tier 2, (301-600kWh).";
        }
        else if (consumption > 600){
            price = 0.2;
            tier = "Tier 3, (more than 600kWh).";
        }
        let bill = consumption * price;
        let fees = 2.5;
        let totalBill = bill + fees;

        console.log("Electricity Invoice");
        console.log("Total consumption = " + consumption + "kWh");
        console.log("Consumption Tier: " + tier + " - Price per kWh = " + price + "JOD");
        console.log("Electricity consupmtion bill: " + bill + "JOD");
        console.log("Fees: Meter Rent: 1.5 JOD, TV Tax: 1.0 JOD. Total Fees = " + fees + "JOD");
        console.log("Total bill = Electricity consumption + Total Fees = " + totalBill + "JOD");

    }
    else{
        console.log("Invalid meter reading");
    }
}

calculateElectricityBill(300, 900);

//////////////////////////////////
//     JS Electricity Exercise  //
//      By Asem Al-Zaghal       //
//          Take 1              //
//////////////////////////////////