
import generateReceipt from './generateReceipt.js';

console.log("Starting Third Target verification...");

let thirdTargetCount = 0;
let successCount = 0;
let failureCount = 0;

for (let i = 0; i < 200; i++) {
    const receipt = generateReceipt();

    if (receipt.company === 'Target') {
        const items = receipt.items;

        // Check if this is the third Target (has Seedlip, Knob Creek, or Canadian)
        const hasThirdTargetProducts = items.some(item =>
            item.name.includes("Seedlip") ||
            item.name.includes("Knob Creek") ||
            item.name.includes("Canadian")
        );

        if (hasThirdTargetProducts) {
            thirdTargetCount++;
            let isSuccess = true;

            // 1. Total items should be 3
            if (items.length !== 3) {
                console.error(`FAILURE: Third Target receipt has ${items.length} items, expected 3.`);
                isSuccess = false;
            }

            // 2. Check for Seedlip (Qty 3)
            const seedlip = items.find(i => i.name.includes("Seedlip"));
            if (!seedlip || seedlip.quantity !== 3) {
                console.error(`FAILURE: Seedlip product missing or wrong quantity. Found: ${seedlip ? seedlip.quantity : 'None'}`);
                isSuccess = false;
            }

            // 3. Check for Knob Creek (Qty 3)
            const knobCreek = items.find(i => i.name.includes("Knob Creek"));
            if (!knobCreek || knobCreek.quantity !== 3) {
                console.error(`FAILURE: Knob Creek product missing or wrong quantity. Found: ${knobCreek ? knobCreek.quantity : 'None'}`);
                isSuccess = false;
            }

            // 4. Check for Canadian (Qty 3)
            const canadian = items.find(i => i.name.includes("Canadian"));
            if (!canadian || canadian.quantity !== 3) {
                console.error(`FAILURE: Canadian product missing or wrong quantity. Found: ${canadian ? canadian.quantity : 'None'}`);
                isSuccess = false;
            }

            if (isSuccess) {
                successCount++;
            } else {
                failureCount++;
                console.log(JSON.stringify(items, null, 2));
            }
        }
    }
}

console.log(`Verification Complete.`);
console.log(`Total Third Target Receipts generated: ${thirdTargetCount}`);
console.log(`Successful Third Target Receipts: ${successCount}`);
console.log(`Failed Third Target Receipts: ${failureCount}`);

if (thirdTargetCount > 0 && failureCount === 0) {
    console.log("SUCCESS: All Third Target receipts match usage requirements.");
} else if (thirdTargetCount === 0) {
    console.warn("WARNING: No Third Target receipts generated in 200 runs.");
} else {
    console.error("FAILURE: Some Third Target receipts were incorrect.");
}
