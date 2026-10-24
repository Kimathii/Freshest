// data/companies.js

const companies = [
  // 1. Target
  {
    store: "Target",
    name: "Target",
    slogan: "EXPECT MORE, PAY LESS",
    phone: "(800) 925-6278",
    locations: [
      { address: "860 Broadway, New York, NY 10003", state: "NY" },
      { address: "111 Yale St, Houston, TX 77007", state: "TX", zip: "77007" },
      { address: "2391 S Wayside Dr, Houston, TX 77023", state: "TX", zip: "77023" },
      { address: "1980 Freedom Pkwy, Washington, IL 61571", state: "IL", zip: "61571" },
      { address: "4252 Highway 54, Osage Beach, MO 65065", state: "MO", zip: "65065" },
      { address: "100 N Main St, Manville, NJ 08835", state: "NJ", zip: "08835" },
      { address: "2827 S Buckner Blvd, Dallas, TX 75227", state: "TX", zip: "75227" },
      { address: "6001 Mahoning Ave, Austintown, OH 44515", state: "OH", zip: "44515" },
      { address: "1131 N Beale Rd, Marysville, CA 95901", state: "CA", zip: "95901" }
    ],
    products: [
      // Target keeps its own products (no Righteous Felon — moved to Costco)
      { name: "Tylenol Extra Strength Caplets (100 ct)", price: 14.99 },
      { name: "The Honest Company Diapers, Size 4 (25 ct)", price: 14.99 }
    ]
  },

  // 2. The Vitamin Shoppe
  {
    store: "The Vitamin Shoppe",
    name: "The Vitamin Shoppe",
    slogan: "Everyone is deserving of good health",
    phone: "(203) 877-4281",
    locations: [
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" }
    ],
    products: [
      // Pure Encapsulations: Magnesium Glycinate 180 capsules — repeat 3 times @ $54.99 each
      {
        name: "Pure Encapsulations Magnesium Glycinate - Supports Healthy Muscle Function, Relaxation, Cardiovascular Wellness (180 Capsules)",
        price: 54.99
      }
    ]
  },

  // 3. Walmart
  {
    store: "Walmart",
    name: "Walmart",
    slogan: "",
    phone: "(800) 672-4399",
    locations: [
      { address: "838 Sunrise Hwy, Bay Shore, NY 11706", state: "NY" },
      { address: "1575 Niagara Falls Blvd, Amherst, NY 14228", state: "NY" },
      { address: "100 Amsterdam Commons, Amsterdam, NY 12010", state: "NY" },
      { address: "4300 Veterans Memorial Dr, Batavia, NY 14020", state: "NY" },
      { address: "495 Boston Post Rd, Port Chester, NY 10573", state: "NY" },
      { address: "1520 Forest Ave, Staten Island, NY 10302", state: "NY" },
      { address: "307 Independence Plz, Selden, NY 11784", state: "NY" },
      { address: "345 Rockaway Tpke, Lawrence, NY 11559", state: "NY" },
      { address: "160-08 Jamaica Ave, Jamaica, NY 11432", state: "NY" },
      { address: "9100 International Dr, Orlando, FL 32819", state: "FL" }
    ],
    products: [
      // SheaMoisture Deodorant — x3 @ $35.00 each
      { "name": "SheaMoisture Fresh Coconut & Hibiscus Antiperspirant Stick (2.6 oz)", "price": 35.00 },
      { "name": "SheaMoisture Whole Body Deodorant Spray (4 oz)", "price": 35.00 },

      // Merrick Purrfect Bistro Cat Food — spend $10, x3
      { "name": "Merrick Purrfect Bistro Grain Free Real Chicken Recipe Dry Cat Food (4 lb)", "price": 10.49 },
      { "name": "Merrick Purrfect Bistro Grain Free Real Salmon Recipe Dry Cat Food (4 lb)", "price": 10.49 },
      { "name": "Merrick Purrfect Bistro Wet Cat Food Pouches Variety Pack (3 oz, 12 ct)", "price": 10.99 },
      { "name": "Merrick Purrfect Bistro Grain Free Real Chicken Recipe Pate Wet Cat Food (5.5 oz, 12 ct)", "price": 10.99 },

      // NextStar Flea and Tick Topical — x2 @ $70.99 each
      { "name": "NextStar Flea & Tick Topical for Cats over 3.5 lbs (6-dose, 6-month supply)", "price": 70.99 },
      { "name": "NextStar Flea & Tick Topical for Dogs 5-22 lbs (6-dose, 6-month supply)", "price": 70.99 },
      { "name": "NextStar Flea & Tick Topical for Dogs 23-44 lbs (6-dose, 6-month supply)", "price": 70.99 },
      { "name": "NextStar Flea & Tick Topical for Dogs 45-88 lbs (6-dose, 6-month supply)", "price": 70.99 },

      // OneTouch Delica Plus Lancets 33g 100ct — x3
      { "name": "OneTouch Delica Plus Lancets 33 Gauge, 100 ct", "price": 19.99 },

      // Qunol Menopause Products — x3 @ $33.33 each
      { "name": "Qunol Menopause Relief EstroG-100 (60 ct)", "price": 33.33 },
      { "name": "Qunol Menopause Relief with Cognizin Citicoline (60 ct)", "price": 33.33 },

      // PetArmor Extend Flea & Tick Collar for Dogs — x1
      { "name": "PetArmor Extend Flea & Tick Collar for Dogs (up to 18 lbs, 8-month protection)", "price": 25.99 },
      { "name": "PetArmor Extend Flea & Tick Collar for Dogs (over 18 lbs, 8-month protection)", "price": 25.99 },

      // IBgard Peppermint Oil Capsules — x3
      { "name": "IBgard Abdominal Comfort, Peppermint Oil Capsules (12 ct)", "price": 10.97 },
      { "name": "IBgard Abdominal Comfort, Peppermint Oil Capsules (48 ct)", "price": 27.97 }
    ]
  },

  // 4. Sam's Club
  {
    store: "Sam's Club",
    name: "Sam's Club",
    slogan: "Great brands. Members. Savings.",
    phone: "(888) 746-7726",
    locations: [
      { address: "1225 Concord Ave, Concord, CA 94520", state: "CA" },
      { address: "8250 Power Inn Rd, Sacramento, CA 95828", state: "CA" },
      { address: "6336 College Grove Way, San Diego, CA 92115", state: "CA" },
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" },
      { address: "7147 Greenback Ln, Citrus Heights, CA 95621", state: "CA" }
    ],
    products: [
      { name: "Cetaphil Moisturizing Cream for Dry to Very Dry Skin, Unscented (16 oz, 2 pk)", price: 19.46 }
    ]
  },

  // 5. Kroger
  {
    store: "Kroger",
    name: "Kroger",
    slogan: "Fresh for Everyone",
    phone: "(800) 576-4377",
    locations: [
      { address: "7580 Beechmont Ave, Cincinnati, OH 45255", state: "OH" },
      { address: "590 Cascade Ave SW, Atlanta, GA 30310", state: "GA" },
      { address: "7747 Kirby Dr, Houston, TX 77030", state: "TX" },
      { address: "3165 S 2nd St, Louisville, KY 40208", state: "KY" },
      { address: "5713 Edmondson Pike, Nashville, TN 37211", state: "TN" },
      { address: "1375 Chambers Rd, Columbus, OH 43212", state: "OH" },
      { address: "3361 Kentucky Ave, Indianapolis, IN 46221", state: "IN" },
      { address: "4901 Maple Ave, Dallas, TX 75235", state: "TX" },
      { address: "4264 Summer Ave, Memphis, TN 38122", state: "TN" },
      { address: "26400 Ford Rd, Dearborn Heights, MI 48127", state: "MI" }
    ],
    products: [
      { name: "Orgain Collagen Peptides + Prebiotics & Probiotics, Unflavored (1 lb)", price: 32.00 }
    ]
  },

  // 6. Tractor Supply
  {
    store: "Tractor Supply",
    name: "Tractor Supply",
    slogan: "tractorsupply.com",
    phone: "(800) 555-0199",
    locations: [
      { address: "2195 Hamner Ave, Norco, CA 92860", state: "CA" },
      { address: "3747 E Palmdale Blvd, Palmdale, CA 93550", state: "CA" },
      { address: "397 W Los Angeles Ave, Moorpark, CA 93021", state: "CA" },
      { address: "27826 Clinton Keith Rd, Murrieta, CA 92562", state: "CA" },
      { address: "42625 Jackson St, Indio, CA 92203", state: "CA" },
      { address: "6710 Colony St, Bakersfield, CA 93307", state: "CA" },
      { address: "9060 S Rainbow Blvd, Las Vegas, NV 89139", state: "NV" },
      { address: "8535 E Speedway Blvd, Tucson, AZ 85710", state: "AZ" },
      { address: "10870 Balls Ford Rd, Manassas, VA 20109", state: "VA" }
    ],
    products: [
      // Royal Canin Cat items — x3 @ $65.00 each
      { name: "Royal Canin Urinary Care (Adult)", price: 65.00 },
      { name: "Royal Canin Senior Cat Formula", price: 65.00 },

      // Dog products
      { name: "Royal Canin Medium Adult", price: 99.99 },
      { name: "Royal Canin German Shepherd Adult", price: 99.99 },
      { name: "Royal Canin Wet Food tin", price: 49.99 },
      { name: "Eukanuba Adult Large Breed", price: 74.99 },
      { name: "Eukanuba Medium Breed Puppy", price: 64.99 }
    ]
  },

  // 7. CVS
  {
    store: "CVS",
    name: "CVS",
    slogan: "cvs.com",
    phone: "(800) 746-7287",
    locations: [
      { address: "1440 Broadway, Floors 1 & 2, New York, NY 10018", state: "NY" },
      { address: "5 Pennsylvania Plaza, New York, NY 10001", state: "NY" },
      { address: "320 5th Ave, New York, NY 10001", state: "NY" },
      { address: "420 5th Ave, New York, NY 10018", state: "NY" },
      { address: "81 8th Ave, New York, NY 10011", state: "NY" }
    ],
    products: [
      // Farmacy — x3
      { name: "Farmacy Honey Halo", price: 48.00 },
      { name: "Farmacy Green Clean", price: 39.00 },
      { name: "Farmacy Honey Milk Essence", price: 34.00 },
      { name: "Farmacy Brighten Up Toner", price: 34.00 },

      // Burt's Bees
      { name: "Burt's Bees Lip Balm 4-Pack", price: 13.79 },
      { name: "Burt's Bees Micellar Cleansing Water, 8 oz", price: 9.99 },
      { name: "Burt's Bees Boosted Lip Balm", price: 7.99 },
      { name: "Burt's Bees Hydrating Clary Sage Sheet Mask", price: 3.49 },
      { name: "Burt's Bees Tinted Lip Balm", price: 7.99 },

      // OLLY items
      { name: "OLLY Calm Body Wash (17 fl oz)", price: 12.99 },
      { name: "OLLY Calm Body Serum (8 oz)", price: 10.00 }
    ]
  },

  // 8. Costco — Righteous Felon Beef Sticks, x3
  {
    store: "Costco",
    name: "Costco",
    slogan: "Quality you can count on.",
    phone: "(800) 774-2678",
    locations: [
      { address: "1250 N Coral Way, Miami, FL 33145", state: "FL" },
      { address: "2975 El Camino Real, Santa Clara, CA 95051", state: "CA" },
      { address: "400 El Camino Real, South San Francisco, CA 94080", state: "CA" },
      { address: "1801 W Jefferson St, Joliet, IL 60435", state: "IL" },
      { address: "1500 Technology Dr, San Jose, CA 95110", state: "CA" },
      { address: "2001 N Interstate 35, Round Rock, TX 78664", state: "TX" },
      { address: "3700 W Desert Inn Rd, Las Vegas, NV 89102", state: "NV" },
      { address: "12850 Foothill Blvd, Sylmar, CA 91342", state: "CA" },
      { address: "200 Costco Way, Issaquah, WA 98027", state: "WA" }
    ],
    products: [
      { name: "Righteous Felon O.G. Hickory Beef Sticks (1 oz, 9 ct)", price: 14.99 },
      { name: "Righteous Felon Honey Heist BBQ Beef Sticks (1 oz, 9 ct)", price: 14.99 }
    ]
  },

  // 9. PetSmart — Blue Buffalo, select one of each @ x1 ($32.99)
  {
    store: "PetSmart",
    name: "PetSmart",
    slogan: "Where Pets Are Family",
    phone: "(888) 839-9638",
    locations: [
      { address: "475 Gateway Dr, Brooklyn, NY 11239", state: "NY" },
      { address: "2001 NW 117th Ave, Miami, FL 33172", state: "FL" },
      { address: "3201 S Las Vegas Blvd, Las Vegas, NV 89109", state: "NV" },
      { address: "1600 E Camelback Rd, Phoenix, AZ 85016", state: "AZ" },
      { address: "2501 N Germantown Pkwy, Memphis, TN 38133", state: "TN" },
      { address: "5001 Peachtree Blvd, Atlanta, GA 30341", state: "GA" },
      { address: "600 Dekalb Pike, Blue Bell, PA 19422", state: "PA" },
      { address: "13901 N Dale Mabry Hwy, Tampa, FL 33618", state: "FL" }
    ],
    products: [
      { name: "Blue Buffalo Wilderness Bone Broth Boosted Adult Indoor with Chicken", price: 32.99 },
      { name: "Blue Buffalo Wilderness Bone Broth Boosted Adult with Salmon", price: 32.99 }
    ]
  },

  // 10. Whole Foods
  {
    store: "Whole Foods",
    name: "Whole Foods",
    slogan: "Whole Foods Market",
    phone: "(800) 555-0199",
    locations: [
      { address: "10 Columbus Circle, New York, NY 10019", state: "NY" },
      { address: "299 SE 3rd Avenue, Miami, FL 33131", state: "FL" },
      { address: "255 E Grand Avenue, Chicago, IL 60611", state: "IL" },
      { address: "788 S Grand Avenue, Los Angeles, CA 90017", state: "CA" },
      { address: "6701 Red Road, Coral Gables, FL 33143", state: "FL" }
    ],
    products: [
      // Solgar — constant, x3 @ $37.99
      { name: "Solgar Omega 3 950mg EPA and DHA Triple Strength", price: 37.99 },
      // Oars + Alps — select one, x3 @ $25.00
      { name: "Oars + Alps Hydrating Antioxidant Sunscreen", price: 25.00 },
      { name: "Oars + Alps Go Stick", price: 25.00 },
      { name: "Oars + Alps Everyday Anti Aging Moisturiser", price: 25.00 },
      { name: "Oars + Alps Matte Sunscreen Face Stick", price: 25.00 }
    ]
  }
];

export default companies;
