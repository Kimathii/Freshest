// utils/generateReceipt.js
import companies from "../data/companies.js";

// State tax rates
const STATE_TAX = {
  KY: 0.06,
  IL: 0.0625,
  NY: 0.04,
  WA: 0.065,
  FL: 0.06,
  CT: 0.0635,
  TX: 0.0625,
  MI: 0.06,
  CA: 0.0725,
  OH: 0.0575,
  GA: 0.04,
  MA: 0.0625,
  TN: 0.07,
  IN: 0.07
};

// ---------------- HELPERS ----------------
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const priceWithVariance = (price) => +(price + (Math.random() * 4 - 2)).toFixed(2);
const shuffleArray = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const generateOrderNumber = () => `#${getRandomInt(10000, 99999)}`;
const formatDate = () => {
  const d = new Date();

  // Randomize date between 1 and 5 days ago
  const daysAgo = getRandomInt(1, 5);
  d.setDate(d.getDate() - daysAgo);

  // move clock back 2 hours
  d.setHours(d.getHours() - 2);

  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
};




// ---------------- GENERATE ITEMS ----------------
const generateItems = (products, companyName) => {
  // Special case for Sam's Club: Cetaphil Moisturizing Cream (Redemptions: 3 -> quantity: 3)
  if (companyName === "Sam's Club") {
    return products.map((product) => {
      const price = priceWithVariance(product.price);
      const quantity = 3;
      return {
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      };
    });
  }

  // Special case for The Vitamin Shoppe: Pure Encapsulations Magnesium Glycinate (Redemptions: 3 -> quantity: 3)
  if (companyName === "The Vitamin Shoppe") {
    return products.map((product) => {
      const price = priceWithVariance(product.price);
      const quantity = 3;
      return {
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      };
    });
  }

  // Special case for Kroger: Orgain Collagen (Redemptions: 3 -> quantity: 3)
  if (companyName === "Kroger") {
    return products.map((product) => {
      const price = priceWithVariance(product.price);
      const quantity = 3;
      return {
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      };
    });
  }

  // Special case for Target
  if (companyName === "Target") {
    let items = [];

    // Check if this is the "Second Target" (Tylenol & Honest)
    // We identify it by checking if the product list contains Tylenol or Honest products
    const isSecondTarget = products.some(p => p.name.includes("Tylenol") || p.name.includes("Honest"));

    // Check if this is the "Third Target" (Seedlip, Knob Creek, Canadian)
    const isThirdTarget = products.some(p => p.name.includes("Seedlip") || p.name.includes("Knob Creek") || p.name.includes("Canadian"));

    // Check if this is the "First Target" (AZO, Dove, Greenies)
    const isFirstTarget = products.some(p => p.name.includes("AZO") || p.name.includes("Dove") || p.name.includes("Greenies"));

    if (isSecondTarget) {
      const tylenolProducts = products.filter(p => p.name.includes("Tylenol"));
      const honestProducts = products.filter(p => p.name.includes("Honest"));

      // 1. One random Tylenol product (Quantity: 3)
      if (tylenolProducts.length > 0) {
        const product = getRandomItem(tylenolProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // 2. One random Honest product (Quantity: 3)
      if (honestProducts.length > 0) {
        const product = getRandomItem(honestProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    } else if (isThirdTarget) {
      const seedlipProducts = products.filter(p => p.name.includes("Seedlip"));
      const knobCreekProducts = products.filter(p => p.name.includes("Knob Creek"));
      const canadianProducts = products.filter(p => p.name.includes("Canadian"));

      // 1. One random Seedlip product (Quantity: 3)
      if (seedlipProducts.length > 0) {
        const product = getRandomItem(seedlipProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // 2. One random Knob Creek product (Quantity: 3)
      if (knobCreekProducts.length > 0) {
        const product = getRandomItem(knobCreekProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // 3. One random Canadian product (Quantity: 3)
      if (canadianProducts.length > 0) {
        const product = getRandomItem(canadianProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    } else if (isFirstTarget) {
      const azoProducts = products.filter(p => p.name.includes("AZO"));
      const doveProducts = products.filter(p => p.name.includes("Dove"));
      const greeniesProducts = products.filter(p => p.name.includes("Greenies"));

      // AZO: 1 random product, qty 3-4
      if (azoProducts.length > 0) {
        const product = getRandomItem(azoProducts);
        const quantity = getRandomInt(3, 4);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Dove: 1 random product, qty 5
      if (doveProducts.length > 0) {
        const product = getRandomItem(doveProducts);
        const quantity = 5;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Greenies: 1 random product, qty 3
      if (greeniesProducts.length > 0) {
        const product = getRandomItem(greeniesProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    } else {
      // Fallback to default random item generation for other Target stores (e.g. Electronics & Accessories)
      const itemCount = 3;
      for (let i = 0; i < itemCount; i++) {
        const product = getRandomItem(products);
        const quantity = getRandomInt(1, 3);
        const price = priceWithVariance(product.price);
        const itemNumber = getRandomInt(10000000, 99999999);
        items.push({
          itemNumber,
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    }

    return shuffleArray(items);
  }

  // Special case for Walmart
  if (companyName === "Walmart") {
    const items = [];

    // Filter products by category
    const sheaProducts = products.filter(p => p.name.includes("SheaMoisture"));
    const merrickProducts = products.filter(p => p.name.includes("Merrick"));
    const nextStarProducts = products.filter(p => p.name.includes("NextStar"));
    const oneTouchProducts = products.filter(p => p.name.includes("OneTouch"));
    const qunolProducts = products.filter(p => p.name.includes("Qunol"));
    const petArmorProducts = products.filter(p => p.name.includes("PetArmor"));
    const ibgardProducts = products.filter(p => p.name.includes("IBgard"));

    // 1. SheaMoisture Deodorant (Redemptions: 3 -> quantity: 3, @ $35 each)
    if (sheaProducts.length > 0) {
      const product = getRandomItem(sheaProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 2. Merrick Purrfect Bistro Cat Food (spend $10, x3 redemption -> quantity: 3)
    if (merrickProducts.length > 0) {
      const product = getRandomItem(merrickProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 3. NextStar Flea and Tick Topical (Redemptions: 2 -> quantity: 2, @ $70.99 each)
    if (nextStarProducts.length > 0) {
      const product = getRandomItem(nextStarProducts);
      const quantity = 2;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 4. OneTouch Delica Plus Lancets 33g 100ct (Redemptions: 3 -> quantity: 3)
    if (oneTouchProducts.length > 0) {
      const product = getRandomItem(oneTouchProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 5. Qunol Menopause Products (NEW OFFER — Redemptions: 3 -> quantity: 3, @ $33.33 each)
    // Pick one randomly from the two Qunol products
    if (qunolProducts.length > 0) {
      const product = getRandomItem(qunolProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 6. PetArmor Extend Flea & Tick Collar for Dogs (Redemptions: 1 -> quantity: 1)
    if (petArmorProducts.length > 0) {
      const product = getRandomItem(petArmorProducts);
      const quantity = 1;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 7. IBgard Peppermint Oil Capsules (Redemptions: 3 -> quantity: 3)
    // Randomly pick either 12ct or 48ct variant
    if (ibgardProducts.length > 0) {
      const product = getRandomItem(ibgardProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // All offers randomly arranged
    return shuffleArray(items);
  }

  // Special case for Costco: Righteous Felon Beef Sticks (Redemptions: 3 -> quantity: 3)
  if (companyName === "Costco") {
    const product = getRandomItem(products);
    const price = priceWithVariance(product.price);
    const quantity = 3;
    return [{
      itemNumber: getRandomInt(10000000, 99999999),
      name: product.name,
      quantity,
      price,
      total: +(price * quantity).toFixed(2)
    }];
  }

  // Special case for PetSmart: NextStar Flea & Tick Topical (Redemptions: 2 -> quantity: 2, @ $70.99 each)
  if (companyName === "PetSmart") {
    const product = getRandomItem(products);
    const price = priceWithVariance(product.price);
    const quantity = 2;
    return [{
      itemNumber: getRandomInt(10000000, 99999999),
      name: product.name,
      quantity,
      price,
      total: +(price * quantity).toFixed(2)
    }];
  }

  // Special case for WholeFoods
  if (companyName === "WholeFoods") {
    const items = [];
    const gardenProducts = products.filter(p => p.name.includes("Garden of Life"));
    const nuunProducts = products.filter(p => p.name.includes("Nuun"));

    // 1 Garden of Life (Quantity: 3)
    if (gardenProducts.length > 0) {
      const product = getRandomItem(gardenProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 1 Nuun (Quantity: 3)
    if (nuunProducts.length > 0) {
      const product = getRandomItem(nuunProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    return items;
  }

  // Special case for CVS
  if (companyName === "CVS") {
    const items = [];
    const ollyProducts = products.filter(p => p.name.includes("OLLY"));
    const otherProducts = products.filter(p => !p.name.includes("OLLY"));

    // OLLY options with redemption 3 each (quantities summing up to 6)
    for (const product of ollyProducts) {
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // Previous CVS items (Burt's Bees: pick 2, quantity: 2 each)
    if (otherProducts.length > 0) {
      const shuffled = [...otherProducts].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 2);
      for (const product of selected) {
        const quantity = 2;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    }

    return shuffleArray(items);
  }

  // Special case for Tractor Supply
  if (companyName === "Tractor Supply") {
    const items = [];
    const eukanubaProducts = products.filter(p => p.name.includes("Eukanuba"));
    const royalCaninProducts = products.filter(p => p.name.includes("Royal Canin"));
    const olayProducts = products.filter(p => p.name.includes("Olay"));

    // Third format: Eukanuba x3 + one random Olay
    if (olayProducts.length > 0) {
      // 1 Eukanuba product (Quantity: 3)
      if (eukanubaProducts.length > 0) {
        const product = getRandomItem(eukanubaProducts);
        const quantity = 3;
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // 1 random Olay product (Quantity: 1)
      const olayProduct = getRandomItem(olayProducts);
      const olayPrice = priceWithVariance(olayProduct.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: olayProduct.name,
        quantity: 1,
        price: olayPrice,
        total: +olayPrice.toFixed(2)
      });

      return items;
    }

    // Original formats: Eukanuba x3 + Royal Canin x1
    // 1 Eukanuba product (Quantity: 3)
    if (eukanubaProducts.length > 0) {
      const product = getRandomItem(eukanubaProducts);
      const quantity = 3;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    // 1 Royal Canin product (Quantity: 1)
    if (royalCaninProducts.length > 0) {
      const product = getRandomItem(royalCaninProducts);
      const quantity = 1;
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber: getRandomInt(10000000, 99999999),
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    return items;
  }

  // Special case for Petco
  if (companyName === "Petco") {
    const items = [];

    // Check if this is Royal Canin Petco or Cesar Petco
    const isRoyalCanin = products.some(p => p.name.includes("Royal Canin"));

    if (isRoyalCanin) {
      // Royal Canin Petco: 1 probiotic + 1 pouch + 1 dry food
      const probioticProducts = products.filter(p => p.name.includes("Probiotics"));
      const pouchProducts = products.filter(p => p.name.includes("Pouch"));
      const dryProducts = products.filter(p => p.name.includes("Dry Dog Food"));

      // Pick 1 random probiotic
      if (probioticProducts.length > 0) {
        const product = getRandomItem(probioticProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 1 random pouch
      if (pouchProducts.length > 0) {
        const product = getRandomItem(pouchProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 1 random dry food
      if (dryProducts.length > 0) {
        const product = getRandomItem(dryProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(product.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: product.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }
    } else {
      // Cesar Petco: 1 bowl product + 2 different 3.5 oz (12 Count Multipack) products
      const bowlProducts = products.filter(p =>
        (p.name.includes("Bowls") || p.name.includes("Meals")) &&
        !p.name.includes("Multipack") &&
        !p.name.includes("Variety Pack")
      );

      const twelveCountProducts = products.filter(p =>
        p.name.includes("3.5 oz (12 Count Multipack)")
      );

      // Pick 1 random bowl product
      if (bowlProducts.length > 0) {
        const bowl = getRandomItem(bowlProducts);
        const quantity = getRandomInt(2, 3);
        const price = priceWithVariance(bowl.price);
        items.push({
          itemNumber: getRandomInt(10000000, 99999999),
          name: bowl.name,
          quantity,
          price,
          total: +(price * quantity).toFixed(2)
        });
      }

      // Pick 2 different random 12-count products
      if (twelveCountProducts.length >= 2) {
        const shuffled = [...twelveCountProducts].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 2);

        for (const product of selected) {
          const quantity = getRandomInt(2, 3);
          const price = priceWithVariance(product.price);
          items.push({
            itemNumber: getRandomInt(10000000, 99999999),
            name: product.name,
            quantity,
            price,
            total: +(price * quantity).toFixed(2)
          });
        }
      }
    }

    return items;
  }

  // Default behavior for other companies
  const itemCount = 3;
  const items = [];

  for (let i = 0; i < itemCount; i++) {
    const product = getRandomItem(products);
    const quantity = getRandomInt(1, 3);
    const price = priceWithVariance(product.price);

    const itemNumber = getRandomInt(10000000, 99999999);

    items.push({
      itemNumber,
      name: product.name,
      quantity,
      price,
      total: +(price * quantity).toFixed(2)
    });
  }

  return items;
};

// ---------------- GENERATE RECEIPT ----------------
const generateReceipt = () => {
  const brand = getRandomItem(companies);

  const store = brand.store || getRandomItem(brand.stores || []);
  const location = getRandomItem(brand.locations || []);

  const items = generateItems(brand.products || [], brand.name);

  const subtotal = +items.reduce((sum, item) => sum + item.total, 0).toFixed(2);

  const taxRate = STATE_TAX[location.state] || 0.06;
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  // Always digital card payment
  const card = total;

  // Random card details
  const cardBrands = ["VISA", "MASTERCARD", "AMERICAN EXPRESS", "DISCOVER"];
  const cardType = getRandomItem(cardBrands);
  const cardLast4 = getRandomInt(1000, 9999);

  // Random approval text
  const approvalPhrases = [
    "EMV Chip | Approved",
    "Chip | Approved",
    "EMV Contact | Approved",
    "Contactless | Approved",
    "EMV Chip-Offline | Approved",
    "Approved - EMV",
  ];
  const approvalText = getRandomItem(approvalPhrases);

  // Random authorization code
  const authCode = (() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const prefix = getRandomItem(["A", "T", "X", "P", ""]);
    return prefix + getRandomInt(10000, 99999) + getRandomItem(letters);
  })();

  const cashiers = ["David R.", "Sarah M.", "Michael T.", "Jessica L.", "John K.", "Emily W.", "Chris P.", "Anna B."];
  const cashier = getRandomItem(cashiers);
  const register = String(getRandomInt(1, 15)).padStart(2, "0");

  return {
    company: brand.name,
    slogan: brand.slogan,
    store,
    phone: brand.phone || "",
    address: location.address,
    orderNumber: generateOrderNumber(),
    date: formatDate(),
    items,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total,
    payments: {
      card,
      cash: 0,
      other: 0
    },
    cardType,
    cardLast4,
    approvalText,
    authCode,
    cashier,
    register
  };
};

export default generateReceipt;