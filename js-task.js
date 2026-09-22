// Write a JavaScript function to calculate the monthly electricity bill for a house based on a tiered pricing system. The function should receive the "previous reading" and "current reading" of the electricity meter, calculate the total bill, and print a detailed breakdown.

// Data & Calculation Rules:

//     Consumption: Calculated by subtracting the previous reading from the current reading.

//     Tiered Pricing System:

//         Tier 1 (1 to 300 kWh): 0.05 JOD per kWh.

//         Tier 2 (301 to 600 kWh): 0.10 JOD per kWh.

//         Tier 3 (Above 600 kWh): 0.20 JOD per kWh.

//     Fixed Fees (always added to the final bill):

//         Meter Rent: 1.5 JOD.

//         TV Tax: 1.0 JOD.

//         (Total Fixed Fees = 2.5 JOD)

// Requirements:

//     Create a function named calculateElectricityBill(previousReading, currentReading).

//     Validate that the current reading is greater than or equal to the previous reading (if not, print an error message like: "Invalid meter reading").

//     Calculate the total consumption and distribute it correctly across the tiers.

//     Print a "Detailed Invoice" containing: Total consumption, the cost of each tier, fixed fees, and the final total amount.

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

calculateElectricityBill(550, 2070);