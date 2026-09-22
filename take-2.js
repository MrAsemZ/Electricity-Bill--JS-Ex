//on the basis that the bill pricing is distributed on all the tiers.

function calculateElectricityBill(previousReading, currentReading) {
  let tier1 = 0;
  let tier2 = 0;
  let tier3 = 0;
  let consumption = currentReading - previousReading;

  const fixedFees = 2.5;

  if (previousReading <= currentReading) {
    if (consumption <= 300) {
      tier1 = consumption * 0.05;
    } else {
      tier1 = 300 * 0.05;
      if (consumption <= 600) {
        tier2 = (consumption - 300) * 0.1;
      } else {
        tier2 = 300 * 0.1;
        tier3 = (consumption - 600) * 0.2;
      }
    }
  } else {
    console.log("Invalid meter reading");
  }

  console.log("Detailed Invoice : ");
  console.log("Total consumption : " + consumption);
  console.log("tier1 : " + tier1);
  console.log("tier2 : " + tier2);
  console.log("tier3 : " + tier3);
  console.log("fixed Fees : " + fixedFees);
  console.log(
    "the final total amount : " + (tier1 + tier2 + tier3 + fixedFees),
  );
}

calculateElectricityBill(300, 9000);

//////////////////////////////////
//     JS Electricity Exercise  //
//      By Asem Al-Zaghal       //
//          Take 2              //
//////////////////////////////////