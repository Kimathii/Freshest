// data/companies.js
// Only 3 brands: Eukanuba Pet Food, Pure Encapsulations, Bacardi Ocho

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
      { name: "Righteous Felon O.G. Hickory Beef Sticks, 1 oz, 9 ct", price: 13.99 }
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
      { name: "Pure Encapsulations O.N.E. Multivitamin, 30 capsules", price: 25.00 }
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
      // Pepsi
      { "name": "Pepsi Zero Sugar 12-pack", "price": 5.98 },

      // Chicken
      { "name": "Freshness Guaranteed Boneless Skinless Chicken Breasts (4.7-6.1 lb tray)", "price": 11.72 },
      { "name": "Tyson All Natural Fresh Boneless Skinless Chicken Breasts (1.75-3.0 lb tray)", "price": 8.21 },
      { "name": "Great Value All Natural Frozen Boneless Skinless Chicken Breasts (3 lb)", "price": 8.94 },
      { "name": "Chicken thighs", "price": 10.99 },
      { "name": "Chicken tenders", "price": 10.99 },
      { "name": "Chicken wings", "price": 10.99 },
      { "name": "Whole chicken", "price": 10.99 },

      // SheaMoisture Deodorant
      { "name": "SheaMoisture Fresh Coconut & Hibiscus Antiperspirant Stick (2.6 oz)", "price": 9.97 },
      { "name": "SheaMoisture Whole Body Deodorant Spray (4 oz)", "price": 9.97 },

      // Always products (prices adjusted to 15.99 if below 15)
      { "name": "Always Ultra Thin Size 2 Super Pads with Wings (16 ct)", "price": 15.99 },
      { "name": "Always Ultra Thin Overnight Pads, Size 4 (13 ct)", "price": 15.99 },
      { "name": "Always Ultra Thin Size 2 Long Super Pads (42 ct)", "price": 15.99 },

      // Merrick Dog Treats
      { "name": "Merrick Oven Baked Peanut Butter Dog Treats (11 oz)", "price": 7.98 },
      { "name": "Merrick Power Bites Soft Dog Treats (6 oz)", "price": 7.98 },
      { "name": "Merrick Fresh Kisses Large Dental Dog Treats (11.5 oz, 7 ct)", "price": 15.98 },
      { "name": "Merrick Healthy Bites", "price": 10.99 },
      { "name": "Merrick Lil’ Plates Treats", "price": 10.99 },

      // Blue Buffalo Wilderness Bone Broth Boosted Dry Cat Food (5 lb)
      { "name": "Blue Buffalo Wilderness Bone Broth Boosted Adult Indoor Cat Food, Chicken (5 lb)", "price": 10.99 },
      { "name": "Blue Buffalo Wilderness Bone Broth Boosted Adult Indoor Cat Food, Salmon (5 lb)", "price": 10.99 },

      // NextStar Flea and Tick Topical
      { "name": "NextStar Flea & Tick Topical for Cats over 3.5 lbs (1-month)", "price": 17.97 },
      { "name": "NextStar Flea & Tick Topical for Dogs 5-22 lbs (1-month)", "price": 17.97 },
      { "name": "NextStar Flea & Tick Topical for Dogs 23-44 lbs (2-pack, 3-month)", "price": 34.96 },
      { "name": "NextStar Flea & Tick Topical for Dogs 45-88 lbs (2-pack, 3-month)", "price": 34.96 },

      // OneTouch products
      { "name": "OneTouch Verio Flex Blood Glucose Meter", "price": 22.58 },
      { "name": "OneTouch Verio Reflect Blood Glucose Meter", "price": 29.86 },
      { "name": "OneTouch Verio Test Strips (60 ct)", "price": 33.48 },
      { "name": "OneTouch Verio Test Strips (30 ct)", "price": 18.98 },
      { "name": "OneTouch Ultra Test Strips (60 ct)", "price": 38.98 },
      { "name": "OneTouch Ultra 2 Blood Glucose Monitoring System", "price": 23.99 },
      { "name": "OneTouch Delica Lancing Device Kit", "price": 23.99 },
      { "name": "OneTouch Delica Plus Lancets (100 ct)", "price": 23.99 },
      { "name": "OneTouch UltraSoft Lancets (100 ct)", "price": 23.99 },
      { "name": "OneTouch Ultra Control Solution", "price": 23.99 },
      { "name": "OneTouch Verio Control Solution", "price": 23.99 },
      { "name": "OneTouch Verio Reflect System Value Pack", "price": 23.99 }
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
      // Previous items (Burt's Bees)
      { name: "Burt’s Bees Lip Balm 4-Pack", price: 13.79 },
      { name: "Burt’s Bees Micellar Cleansing Water, 8 oz", price: 9.99 },
      { name: "Burt’s Bees Boosted Lip Balm", price: 7.99 },
      { name: "Burt’s Bees Hydrating Clary Sage Sheet Mask", price: 3.49 },
      { name: "Burt’s Bees Tinted Lip Balm", price: 7.99 },

      // OLLY items
      { name: "OLLY Calm Body Wash (17 fl oz)", price: 12.99 },
      { name: "OLLY Calm Body Serum (8 oz)", price: 10.00 }
    ]
  }
];

export default companies;
