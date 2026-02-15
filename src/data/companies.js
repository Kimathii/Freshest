// data/companies.js
// Only 3 brands: Eukanuba Pet Food, Pure Encapsulations, Bacardi Ocho

const companies = [
  {
    store: "Target",
    name: "Target",
    slogan: "EXPECT MORE, PAY LESS",
    phone: "(615) 253-0000",
    locations: [
      { "address": "4331 Bardstown Rd, Louisville, KY 40218", "state": "KY" },
      { "address": "1151 S College Ave, Fort Collins, CO 80524", "state": "CO" },
      { "address": "100 S Wabash Ave, Chicago, IL 60603", "state": "IL" },
      { "address": "555 S Main St, Salt Lake City, UT 84111", "state": "UT" },
      { "address": "8001 Maryland Ave, St. Louis, MO 63105", "state": "MO" }
    ],
    products: [
      { "name": "AZO D‑Mannose Urinary Tract Health Ready‑to‑Mix Supplement, Raspberry Lemonade, 10 Packets", "price": 19.77 },
      { "name": "AZO Urinary Pain Relief Maximum Strength Tablets, 24 Count", "price": 8.53 },
      { "name": "AZO Urinary Tract Defense Tablets, 24 Count", "price": 8.37 },
      { "name": "AZO Yeast Plus Dual Relief Tablets, 60 Count", "price": 8.12 },
      { "name": "AZO D‑Mannose Urinary Tract Health Supplement, 120 Count", "price": 29.29 },
      { "name": "AZO Cranberry Urinary Tract Health Supplement, 50 Count", "price": 8.24 },
      { "name": "AZO Dual Protection Urinary & Vaginal Support Supplement, 30 Count", "price": 32.88 },
      { "name": "AZO Cranberry Urinary Tract Health Gummies Supplement, 72 Count", "price": 12.49 },
      { "name": "AZO Cranberry Urinary Tract Health Supplement, 120 Count", "price": 14.48 },
      { "name": "AZO UTI Test Strips, 3 Test Strips", "price": 11.97 },

      // 
      { "name": "Dove Whole Body Deodorant 120ml", "price": 76.00 },

      // 

      { "name": "Greenies Feline Catnip Flavor Dental Treats Mega Size 130g 9.75oz", "price": 6.49 },
    ]
  },


  {
    store: "Target",
    name: "Target",
    slogan: "EXPECT MORE, PAY LESS",
    phone: "(800) 925-6278",
    locations: [
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
      { "name": "Tylenol® Proactive Support® Muscle & Joint Supplements 30 Count", "price": 19.99 },
      { "name": "Tylenol® Proactive Support® Muscle & Joint + Stress Supplements 30 Count", "price": 19.99 },
      { "name": "Tylenol® PRECISE® Cream", "price": 19.99 },
      { "name": "Tylenol® PRECISE® Patch", "price": 19.99 },
      // 
      { "name": "Honest Company Flushable Wipes, 126 Count (Plant‑Based, Fragrance‑Free)", "price": 10.97 },
      { "name": "Honest Company Flushable Wipes, 126 Count (Tropical Leaves)", "price": 10.99 },
      { "name": "Honest Company Flushable Wipes, 42 Count (Plant‑Based, Fragrance‑Free)", "price": 6.00 },
      { "name": "Honest Company Flushable Wipes, 84 Count (2×42 Pack)", "price": 14.00 }
    ]
  },
  // { name: "Royal Canin Size Health Nutrition Mini Adult Dry Dog Food (8.8 lb)", price: 52.99 },
  // { name: "Royal Canin Size Health Nutrition Medium Adult Dry Dog Food (15 lb)", price: 74.99 },
  // { name: "Royal Canin Size Health Nutrition Maxi Adult Dry Dog Food (30 lb)", price: 119.99 },
  // { name: "Royal Canin Breed Health Nutrition German Shepherd Adult Dry Dog Food (30 lb)", price: 134.99 },
  // { name: "Royal Canin Breed Health Nutrition Labrador Retriever Adult Dry Dog Food (30 lb)", price: 129.99 }
  // { name: "Royal Canin Breed Health Nutrition French Bulldog Adult Dry Dog Food (12 lb)", price: 89.99 },
  // { name: "Royal Canin Breed Health Nutrition Chihuahua Adult Dry Dog Food (6 lb)", price: 49.99 },
  // { name: "Royal Canin Veterinary Diet Gastrointestinal Low Fat Dry Dog Food (24 lb)", price: 101.99 },
  // { name: "Royal Canin Veterinary Diet Hydrolyzed Protein Adult HP Dry Dog Food (24 lb)", price: 107.99 },
  // { name: "Royal Canin Veterinary Diet Renal Support Dry Dog Food (24 lb)", price: 104.99 },
  // { name: "Royal Canin Calm Adult Dry Dog Food (24 lb)", price: 99.99 },
  // { name: "Royal Canin Adult Sensitive Stomach Dry Dog Food (24 lb)", price: 97.99 },
  // { name: "Royal Canin Puppy Large Breed Dry Dog Food (30 lb)", price: 103.99 },
  // { name: "Royal Canin Puppy Medium Breed Dry Dog Food (22 lb)", price: 92.99 },
  // { name: "Royal Canin Puppy Small Breed Dry Dog Food (8.8 lb)", price: 54.99 },




  // {
  //   store: "Electronics & Accessories",
  //   name: "Target",
  //   slogan: "Together we are a target",
  //   phone: "(407) 734-7200",
  //   locations: [
  //     { address: "450 S Orange Ave, Orlando, FL 32801", state: "FL" },
  //     { address: "800 N Magnolia Ave, Orlando, FL 32803", state: "FL" },
  //     { address: "25-01 Jackson Ave, Long Island City, NY 11101", state: "NY" },
  //     { address: "139 Flatbush Ave, Brooklyn, NY 11217", state: "NY" },
  //     { address: "88-01 Queens Blvd, Elmhurst, NY 11373", state: "NY" },
  //     { address: "255 Greenwich St, New York, NY 10007", state: "NY" },
  //     { address: "445 Albee Square W, Brooklyn, NY 11201", state: "NY" },
  //     { address: "40-25 82nd St, Elmhurst, NY 11105", state: "NY" },
  //     { address: "700 Exterior St, Bronx, NY 10451", state: "NY" },
  //     { address: "600 Broadway, New York, NY 10012", state: "NY" },
  //     { address: "112 W 34th St, New York, NY 10120", state: "NY" },
  //     { address: "400 Grand St, New York, NY 10002", state: "NY" },
  //     { address: "150 E 86th St, New York, NY 10028", state: "NY" },
  //     { address: "500 E 14th St, New York, NY 10009", state: "NY" },
  //     { address: "1201 3rd Ave, New York, NY 10021", state: "NY" },
  //     { address: "795 Columbus Ave, New York, NY 10025", state: "NY" },
  //     { address: "237 W 42nd St, New York, NY 10036", state: "NY" },
  //     { address: "512 2nd Ave, New York, NY 10016", state: "NY" },
  //     { address: "815 Hutchinson River Pkwy, Bronx, NY 10465", state: "NY" },
  //     { address: "40 W 225th St #50, Bronx, NY 10463", state: "NY" },
  //     { address: "22-11 31st St, Astoria, NY 11105", state: "NY" },
  //     { address: "10 Union Sq E, New York, NY 10003", state: "NY" },
  //     { address: "215 E Fordham Rd, Bronx, NY 10458", state: "NY" },
  //     { address: "838 Sunrise Hwy, Bay Shore, NY 11706", state: "NY" },
  //     { address: "1575 Niagara Falls Blvd, Amherst, NY 14228", state: "NY" },
  //     { address: "100 Amsterdam Commons, Amsterdam, NY 12010", state: "NY" },
  //     { address: "4300 Veterans Memorial Dr, Batavia, NY 14020", state: "NY" },
  //     { address: "495 Boston Post Rd, Port Chester, NY 10573", state: "NY" },
  //     { address: "1520 Forest Ave, Staten Island, NY 10302", state: "NY" },
  //     { address: "307 Independence Plz, Selden, NY 11784", state: "NY" },
  //     { address: "345 Rockaway Tpke, Lawrence, NY 11559", state: "NY" },
  //     { address: "160-08 Jamaica Ave, Jamaica, NY 11432", state: "NY" },
  //     { address: "9100 International Dr, Orlando, FL 32819", state: "FL" }
  //   ],
  //   products: [
  //     { name: "SteelSeries Arctics Nova 3X Lavender", price: 109.99 },
  //     { name: "SteelSeries Arctics Nova 3X White", price: 109.99 },
  //     { name: "SteelSeries Arctics Nova 3X Aqua", price: 109.99 },
  //     { name: "SteelSeries Nova 7X Wireless Headset with Booster Pack", price: 180.99 }
  //   ]
  // },

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
      { "name": "Native Deodorant Stick Coconut & Vanilla ", "price": 32.99 },
      { "name": "Native Sensitive Deodorant Sea Salt & Cedar (baking-soda-free)", "price": 32.99 },
      { "name": "Native Sensitive (aluminum-free)", "price": 32.99 },

      { "name": "Olay Regenerist (Retinol 24) Night cream fragrance free", "price": 33.99 },
      { "name": "Olay Regenerist micro-Sculpting cream", "price": 33.99 },
      { "name": "Olay Super Serum", "price": 33.99 },

      { "name": "Old Spice Gentle Man's Exfoliating Body Wash", "price": 15.99 },
      { "name": "Old Spice Swagger Made By Cedarwood Antiperspirant", "price": 15.99 },
      { "name": "Old Spice Fiji", "price": 15.99 },
      { "name": "Old Spice Gentle Man's Super Hydration Moisturizing Body Wash", "price": 15.99 }

    ]
  },

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
      { "name": "Aperol Aperitivo", "price": 11.07 },
      { "name": "SKYY Vodka", "price": 16.01 },
      { "name": "Wild Turkey Bourbon Whisky", "price": 33.21 },
      { "name": "Campari Bitter", "price": 13.65 },
      { "name": "Courvoisier VSOP Cognac", "price": 88.56 },
      { "name": "Espolon Tequila Blanco", "price": 25.83 },
      { "name": "Grand Marnier Cordon Rouge", "price": 33.21 },
    ]
  },

  {
    store: "WholeFoods",
    name: "WholeFoods",
    slogan: "",
    phone: "(203) 877-4281",
    locations: [
      { address: "4 Union Sq E, New York, NY 10003", state: "NY" },
      { address: "450 W 33rd St, New York, NY 10001", state: "NY" },
      { address: "238 Bedford Ave, Brooklyn, NY 11249", state: "NY" },
      { address: "66 Broadway, New York, NY 10005", state: "NY" },
      { address: "1400 Waterfront Terrace, Weehawken Township, NJ 07086", state: "NJ" },
      { address: "1095 6th Ave, New York, NY 10036", state: "NY" },
      { address: "250 7th Ave, New York, NY 10001", state: "NY" },
      { address: "301 W 50th St, New York, NY 10019", state: "NY" },
      { address: "10 Columbus Cir Ste Sc101, New York, NY 10019", state: "NY" },
      { address: "226 E 57th St, New York, NY 10022", state: "NY" }

    ],
    products: [
      { "name": "Garden of Life Raw Organic Perfect Food Green Superfood Powder, 8.3 oz", "price": 34.29 },
      { "name": "Garden of Life Dr. Formulated Whole Food Magnesium, Raspberry Lemon, 7 oz", "price": 14.87 },
      { "name": "Garden of Life Organic MyKind Men’s Multivitamin, 120 ct", "price": 39.99 },
      { "name": "Garden of Life Organic MyKind Women’s 40+ Gummies, 120 ct", "price": 35.99 },
      { "name": "Garden of Life Dr. Formulated Probiotic 100B, 30 ct", "price": 29.99 },
      // 
      { "name": "Nuun Sport Electrolyte Hydration Drink Mix Tablets, 30 Servings", "price": 17.48 },
      { "name": "Nuun Sport Electrolyte Tablets, 10 count tube", "price": 6.94 },
      { "name": "Nuun Sport + Caffeine Electrolyte Tablets, 10 count", "price": 7.48 },
      { "name": "Nuun Energy Electrolyte Drink Tablets, 8-Pack", "price": 29.96 },
      { "name": "Nuun Zero Sugar Hydration Electrolyte Tablets, 80 servings", "price": 50.83 }
    ]
  },


  // {
  //   store: "Coffee & Beverages",
  //   name: "Sam's Club",
  //   slogan: "Great brands. Members. Savings.",
  //   phone: "(888) 746-7726",
  //   locations: [
  //     { address: "1225 Concord Ave, Concord, CA 94520", state: "CA" },
  //     { address: "8250 Power Inn Rd, Sacramento, CA 95828", state: "CA" },
  //     { address: "6336 College Grove Way, San Diego, CA 92115", state: "CA" },
  //     { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
  //     { address: "250 Summer St, Boston, MA 02210", state: "MA" },
  //     { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" },
  //     { address: "7147 Greenback Ln, Citrus Heights, CA 95621", state: "CA" }
  //   ],
  //   products: [
  //     // { name: "SamsClubMembership", price: 50 },
  //     { name: "NewSamsClubPlusMembership", price: 110 }
  //   ]
  // },

  {
    store: "Target",
    name: "Target",
    slogan: "Expect More. Pay Less.",
    phone: "(877) 738-6742",
    locations: [
      { address: "860 Broadway, New York, NY 10003", state: "NY" },

    ],
    products: [
      { "name": "Seedlip Grove 42 Non-Alcoholic Spirit, 700ml", "price": 29.99 },
      { "name": "Seedlip Spice 94 Non-Alcoholic Spirit, 700ml", "price": 29.99 },

      { "name": "Knob Creek Kentucky Straight Bourbon Whiskey, 750ml", "price": 42.99 },
      { "name": "Knob Creek 12 Year Bourbon, 750ml", "price": 67.99 },
      { "name": "Knob Creek Straight Rye Whiskey, 750ml", "price": 42.99 },

      { "name": "Canadian Club Canadian Whisky, 750ml", "price": 8.99 },
      { "name": "Canadian Club Canadian Whisky, 1L", "price": 17.99 },
      { "name": "Canadian Club Canadian Whisky, 1.75L", "price": 19.99 },
    ]
  },

  //   {
  //     store: "Bacardi Ocho",
  //     name: "Amazon",
  //     slogan: "Work Hard. Have Fun. Make History.",
  //     phone: "(305) 378-3000",
  //     locations: [
  //       { address: "Amazon Returns & Pickup, 3251 20th Ave Suite 340, San Francisco, CA 94132", state: "CA" },
  // { address: "Amazon Hub Locker+ (UC Berkeley Student Union), 2495 Bancroft Way, Berkeley, CA 94720", state: "CA" },
  // { address: "Amazon Hub Locker - Sacramento (Whole Foods), 4315 Arden Wy, Sacramento, CA 95864", state: "CA" },
  // { address: "Amazon Locker - Shirley, Ghirardelli Square, 900 North Point St, San Francisco, CA 94109", state: "CA" },
  // { address: "Amazon Hub Locker - Cenzella, 400 Raleys Towne Ctr at Ross Dress for Less, Rohnert Park, CA 94928", state: "CA" },
  // { address: "Amazon Locker - Anthony, University of the Pacific, 3268 Donner Way, Sacramento, CA 95817", state: "CA" },
  // { address: "Amazon Locker - Arugula (7-Eleven), 281 Washington St, Santa Clara, CA 95050", state: "CA" },
  // { address: "Amazon Locker - Manon (Safeway), 150 E El Camino Real, Sunnyvale, CA 94087", state: "CA" },
  // { address: "Amazon Locker - Showroom (dd's DISCOUNTS), 3700 Klose Way, Richmond, CA 94806", state: "CA" },
  // { address: "Amazon Locker - Claude (Safeway), 1814 19th St, Sacramento, CA 95811", state: "CA" },
  // { address: "Amazon Locker - Acapulco (Ross Dress for Less), 1933 Davis St Ste 120, San Leandro, CA 94577", state: "CA" },
  // { address: "Amazon Hub Locker+ (UCDavis) Davis Memorial Union, One Shields Ave Rm 182, Davis, CA 95616", state: "CA" },
  // { address: "Amazon Counter - 4PX EXPRESS NEWARK (PUDO), 39055 Cedar Blvd #148, Newark, CA 94560", state: "CA" },
  // { address: "Amazon Locker - Magma (Ace Hardware), 1695 Mission St, San Francisco, CA 94103", state: "CA" },
  // { address: "Amazon Locker - Fuzzy (Safeway), 555 E Calaveras Blvd, Milpitas, CA 95035", state: "CA" },
  // { address: "Amazon Hub Locker - Folsom (Safeway), 709 Lincoln Rd W, Vallejo, CA 94590", state: "CA" },
  // { address: "Amazon Locker - Kemah (Safeway), 2851 Del Paso Rd, Sacramento, CA 95835", state: "CA" },
  // { address: "Amazon Locker - Allen, 545 1st Ave, San Mateo, CA 94401", state: "CA" }
  //     ],
  //     products: [
  //        { name: "Bacardí Reserva Ocho (8-Year-Old) bucket", price: 34.99 },
  //   { name: "Bacardí Reserva Ocho Sevillian Orange Cask Finish bucket", price: 36.99 },
  //   { name: "Bacardí Ocho Rye Cask Finish bucket", price: 37.99 },
  //   { name: "Bacardí Spiced Rum bucket", price: 25.28 },
  //   { name: "Bacardí Black Rum bucket", price: 25.28 },
  //   { name: "Bacardí Superior White Rum bucket", price: 25.28 },
  //   { name: "Bacardí Gold Rum bucket", price: 25.28 },
  //   { name: "Bacardí Coconut Rum bucket", price: 25.28 },
  //   { name: "Bacardí Lime Rum bucket", price: 25.28 },
  //   { name: "Bacardí Limón Rum bucket", price: 25.28 },
  //   { name: "Bacardí Tropical Rum bucket", price: 25.28 }
  //     ]
  //   }
];

export default companies;
