# Electricity-Bill--JS-Ex
A JavaScript Exercise to Calculate Electricity Bill
Here is the requirments- user story:
Write a JavaScript function to calculate the monthly electricity bill for a house based on a tiered pricing system. The function should receive the "previous reading" and "current reading" of the electricity meter, calculate the total bill, and print a detailed breakdown.

*** Data & Calculation Rules:***

    Consumption: Calculated by subtracting the previous reading from the current reading.

    Tiered Pricing System:

         Tier 1 (1 to 300 kWh): 0.05 JOD per kWh.

         Tier 2 (301 to 600 kWh): 0.10 JOD per kWh.

         Tier 3 (Above 600 kWh): 0.20 JOD per kWh.

     Fixed Fees (always added to the final bill):

         Meter Rent: 1.5 JOD.

         TV Tax: 1.0 JOD.

         (Total Fixed Fees = 2.5 JOD)

 Requirements:

     Create a function named calculateElectricityBill(previousReading, currentReading).

     Validate that the current reading is greater than or equal to the previous reading (if not, print an error message like: "Invalid meter reading").

     Calculate the total consumption and distribute it correctly across the tiers.

     Print a "Detailed Invoice" containing: Total consumption, the cost of each tier, fixed fees, and the final total amount.

**The files: (take-1) and (take-2) shows my two takes trying to achieve the required based on my understanding**