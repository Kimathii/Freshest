import generateReceipt from './generateReceipt.js';

console.log("Starting Walmart Receipt Verification...");

let totalRuns = 1000;
let successCount = 0;
let failureCount = 0;

for (let i = 0; i < totalRuns; i++) {
  const receipt = generateReceipt();
  const items = receipt.items;
  let isSuccess = true;

  // 1. Company must be Walmart
  if (receipt.company !== 'Walmart') {
    console.error(`FAILURE: Generated company was ${receipt.company}, expected Walmart`);
    isSuccess = false;
  }

  // 2. Line item count must be between 2 and 4
  if (items.length < 2 || items.length > 4) {
    console.error(`FAILURE: Receipt has ${items.length} items, expected between 2 and 4.`);
    isSuccess = false;
  }

  // 3. Olay product must be present and quantity must be between 1 and 3
  const olayItem = items.find(item => item.name.includes("Olay"));
  if (!olayItem) {
    console.error("FAILURE: Olay product is missing from receipt.");
    isSuccess = false;
  } else if (olayItem.quantity < 1 || olayItem.quantity > 3) {
    console.error(`FAILURE: Olay quantity is ${olayItem.quantity}, expected between 1 and 3.`);
    isSuccess = false;
  }

  // 4. Other items must be Native, Old Spice, or Stella Rosa, with random quantities
  const otherItems = items.filter(item => !item.name.includes("Olay"));
  for (const item of otherItems) {
    const isKnownBrand = item.name.includes("Native") || item.name.includes("Old Spice") || item.name.includes("Stella Rosa");
    if (!isKnownBrand) {
      console.error(`FAILURE: Unknown item brand found: ${item.name}`);
      isSuccess = false;
    }
    if (item.quantity < 1 || item.quantity > 5) {
      console.error(`FAILURE: Quantity of ${item.name} is ${item.quantity}, expected random between 1 and 5.`);
      isSuccess = false;
    }
  }

  // 5. Ensure all items are unique categories (no duplicate brands)
  const brands = items.map(item => {
    if (item.name.includes("Olay")) return "Olay";
    if (item.name.includes("Native")) return "Native";
    if (item.name.includes("Old Spice")) return "Old Spice";
    if (item.name.includes("Stella Rosa")) return "Stella Rosa";
    return "Unknown";
  });
  const uniqueBrands = new Set(brands);
  if (uniqueBrands.size !== brands.length) {
    console.error(`FAILURE: Duplicate brands on receipt: ${brands.join(", ")}`);
    isSuccess = false;
  }

  if (isSuccess) {
    successCount++;
  } else {
    failureCount++;
    console.log("Failed Receipt items:", JSON.stringify(items, null, 2));
    break; // stop on first failure to show logs
  }
}

console.log(`Verification Complete.`);
console.log(`Total Runs: ${totalRuns}`);
console.log(`Success Count: ${successCount}`);
console.log(`Failure Count: ${failureCount}`);

if (failureCount === 0) {
  console.log("SUCCESS: Walmart receipt generator conforms perfectly to all rules!");
} else {
  console.error("FAILURE: Some Walmart receipts failed validation.");
  process.exit(1);
}
