
const {
    // declare your model imports here
    // for example, User
    Products,
    Orders,
    Users,
    OrderProducts,
  } = require('.');
  
  const client = require('./client.js');
  
  async function buildTables() {
    try {
      console.log('buildTables started');
      client.connect();
  
      await client.query('DROP TABLE IF EXISTS products CASCADE;');
      await client.query('DROP TABLE IF EXISTS users CASCADE;');
      await client.query('DROP TABLE IF EXISTS orders CASCADE;');
      await client.query('DROP TABLE IF EXISTS order_products CASCADE;');
  
      // build tables in correct order
      console.log('creating products table');
      await client.query(`CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(12,2) NOT NULL,
        "imageURL" TEXT DEFAULT 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        "inStock" BOOLEAN DEFAULT false,
        category VARCHAR(255) NOT NULL,
        origin TEXT NOT NULL,
        roast TEXT NOT NULL,
        size VARCHAR(255) NOT NULL
        )`);
      console.log('creating users table');
      // this users table does not currently check email for format, which is stated in the milestones... May need to check this during createUser function.
      await client.query(`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        "imageURL" TEXT DEFAULT 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) UNIQUE NOT NULL,
        "isAdmin" BOOLEAN NOT NULL DEFAULT FALSE
        )`);
  
      console.log('creating orders table');
      await client.query(`CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        status VARCHAR(255) DEFAULT 'created',
        "userId" INTEGER REFERENCES users(id),
        "datePlaced" DATE
      )`);
  
      console.log('creating order_products table');
      await client.query(`CREATE TABLE order_products (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "orderId" INTEGER REFERENCES orders(id),
        price DECIMAL(12,2) NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0
      )`);
    } catch (error) {
      throw error;
    }
  }
  
  async function populateInitialData() {
    try {
      // create useful starting data by leveraging your
      // Model.method() adapters to seed your db, for example:
      // const user1 = await User.createUser({ ...user info goes here... })
  
      const product1 = await Products.createProduct({
        name: 'Porter',
        description: `This coffee exists for early morning risers.  
           Eye-opening boldness and big body preparing you for whatever lies in front of you.  
           A cup with a full dark chocolate mouthfeel, peanut butter, caramel, and ending with toasted marshmallow
           `,
        price: 20.0,
        inStock: true,
        category: 'Whole Bean',
        origin: 'South America',
        roast: 'Dark',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1626184276816-EIUQPATL1FDJ06338DTD/Guatemala_30387.jpg?format=1000w',
      });
  
      const product2 = await Products.createProduct({
        name: 'Columbia',
        description: `Our “House” drip. Smooth, traditional, rich with snippets of praline and low acidity. 
        This hard-working roast will be at home in your automatic drip machine, your Chemex and your French Press.
        `,
        price: 18.0,
        inStock: false,
        category: 'Ground',
        origin: 'South America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1632506678729-TLXGMMOLZR9QPI5TGA4O/colombia+w+badge.jpg?format=1000w',
      });
  
      const product3 = await Products.createProduct({
        name: 'Uganda',
        description: `This coffee has caramel notes of dried figs, earthy spices, brown sugar and raisins. 
        The taste evokes Bakers chocolate and Brazil nut richness.
        `,
        price: 18.0,
        inStock: true,
        category: 'Whole Bean',
        origin: 'Africa',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1614618598284-TJHFZGZXOTBC8CXTJMEG/2_Uganda_BSC_30165_1500px_Medium.jpg?format=1000w',
      });
  
      const product4 = await Products.createProduct({
        name: 'Decaf Condor',
        description: `
        El Vergel estate made the decision to produce a very high-quality decaffeinated coffee, after seeing that all the coffee used in Colombia to produce "decaf" is a low-quality coffee.
        This decaf coffee forgoes a water, then steam wash. After the bean has expanded it is washed with EA. 
        Additionally; with no heat or pressure being involved in this process - it does not lose its natural sweetness or acidity in the cup.
        `,
        price: 22.0,
        inStock: true,
        category: 'Whole Bean',
        origin: 'South America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1642528430475-TIMZS6CIKTW5ZE3IRCVO/ColumbiaClarosPerdomoMashup_7217.jpg?format=1000w',
      });
  
      const product5 = await Products.createProduct({
        name: 'Burundi Nkaka',
        description: `
        This washing station has been operating since 1979 and supports the crops of over 2400 smallholders in the area.
        The fully washed coffee is grown by smallholders in Ngozi, Burundi.
        This coffee begins with a floral aroma. It has a mouth full of coffee cherry, herbs, and ends with a nice darker chocolate.
        `,
        price: 25.0,
        inStock: true,
        category: 'Ground',
        origin: 'Africa',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1637590550739-Q2A6DD1LWA5O8IK298DZ/Burundi_30240.jpg?format=1000w',
      });
  
      const product6 = await Products.createProduct({
        name: 'Ecuador Honey',
        description: `
        This cup of coffee carries a sweet basil aroma and is bright with citrus and tropical fruits such as lychee, papaya, mango, melon, lemon and red apple. 
        It'll have a rounded body with brown sugar, brown baking spices & anise.
        `,
        price: 92.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'South America',
        roast: 'Medium',
        size: '8 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1624470665648-7U8LKK2TJ7V2JKYLN59B/PanamaHoneyGesha_7294.jpg?format=1000w',
      });
  
      const product7 = await Products.createProduct({
        name: 'Granville Blend FTO',
        description: `
        Medium-Roasted, Certified Fair Trade and Organic blend that's mellow and bright like a nilla wafer with marmalade.
        Toasty, bright and comforting like dried berry granola in milk. The choice for easy drinking.
        `,
        price: 13.5,
        inStock: true,
        category: 'Cold Brew',
        origin: 'North America',
        roast: 'Light',
        size: '10.5 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/t/6/assets/acf.PRODUCT-STORY_Granville.jpg?v=1651025308',
      });
  
      const product8 = await Products.createProduct({
        name: 'Decaf Redline',
        description: `
        Flagship decaf is flavorful like caramel, nuts, and berries with a sweet aftertaste and cheery disposition.
        `,
        price: 11.75,
        inStock: false,
        category: 'Whole Beans',
        origin: 'North America',
        roast: 'Light',
        size: '10.5 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/t/6/assets/acf.PRODUCT-STORY_decafREDLINE.jpg?v=1649100489',
      });
  
      const product9 = await Products.createProduct({
        name: 'La Cordillera',
        description: `
        Classic medium-bodied breakfast brew is easy-drinking and smooth straight up, or pure caramel in milk.
        `,
        price: 11.75,
        inStock: true,
        category: 'Ground',
        origin: 'North America',
        roast: 'Medium',
        size: '10.5 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/t/6/assets/acf.PRODUCT-STORY_laCORDILLERA.jpg?v=1649179323',
      });
  
      const product10 = await Products.createProduct({
        name: 'House Blend',
        description: `
        Sturdy House Blend never disappoints with flavors like vanilla, dark chocolate and pecan.
        `,
        price: 75.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'North America',
        roast: 'Dark',
        size: '5 lb',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/t/6/assets/acf.PRODUCT-STORY_HOUSE.jpg?v=1649178594',
      });
  
      const product11 = await Products.createProduct({
        name: 'French Roast Blend',
        description: `
        Sexy and seductive flavors like molasses, pipe tobacco smoke and swiss baker's chocolate.
        `,
        price: 32.25,
        inStock: true,
        category: 'Whole Beans',
        origin: 'North America',
        roast: 'Dark',
        size: '2 lb',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/t/6/assets/acf.PRODUCT-STORY_FRENCHroast.jpg?v=1649178277',
      });
  
      const product12 = await Products.createProduct({
        name: 'Sumatra Gayonese',
        description: `
        Full Body-Black Pepper-Dark Chocolate
        `,
        price: 14.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'Asia',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://www.bridgeportcoffee.net/wp-content/uploads/2021/01/Sumatra-12oz-600x788.jpg',
      });
  
      const product13 = await Products.createProduct({
        name: 'El Progreso',
        description: `
        Medium Body-Honey-Notes of Milk Chocolate
        `,
        price: 14.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'South America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://www.bridgeportcoffee.net/wp-content/uploads/2021/01/ElProgresoIllustration-600x788.jpg',
      });
  
      const product14 = await Products.createProduct({
        name: 'Ethiopia Yirgacheffe',
        description: `
        Heavy body - Creamy - Rich
        `,
        price: 14.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'Africa',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://www.bridgeportcoffee.net/wp-content/uploads/2021/06/image0-600x788.jpeg',
      });
  
      const product15 = await Products.createProduct({
        name: 'Agua',
        description: `
        Welcome to the world of cleanliness and purity. Like that of the sea jellies, these coffee seeds were soaked in an ocean of water. 
        During the coffees' short swim, fermentation, acting as wisdom, drives acidity, clarity, and focus throughout each tentacle of possibility.
        Notes: Asian Pear, Nutty, Fig Newton 
        `,
        price: 22.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'South America',
        roast: 'Light',
        size: '12 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0294/6861/products/SPPVBag_Front_720x.png?v=1658424147',
      });
  
      const product16 = await Products.createProduct({
        name: 'A Love Supreme',
        description: `
        A Love Supreme is a comfort coffee and a pleasure for palates of all generations. 
        Notes: Cocoa, Walnut, Toffee
        `,
        price: 19.0,
        inStock: false,
        category: 'Whole Beans',
        origin: 'North America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0294/6861/products/ALoveSupremeBag_Front_720x.png?v=1657733774',
      });
  
      const product17 = await Products.createProduct({
        name: '¡Sin Cafeína! (Decaf)',
        description: `
        This is a water processed coffee from Colombia, with notes of plum, dark chocolate and floral. 
        `,
        price: 20.0,
        inStock: true,
        category: 'Ground',
        origin: 'South America',
        roast: 'Dark',
        size: '12 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0294/6861/products/DecafBag_redo__Front_c780d605-b804-4248-b091-7a19aec2d575_720x.png?v=1657819096',
      });
  
      const product18 = await Products.createProduct({
        name: 'Simple Summer',
        description: `
        Simple Summer is back for a 3rd year! A celebration of all the simple joys in life, this 50/50 blend of washed and 
        naturally processed Ethiopian coffees brings us the juice bomb we crave this season. 
        Refreshing hibiscus-like acidity is balanced out by a sweet pastry crust and a long pleasant finish. 
        Put on your 90's hibiscus-print anything, turn on Sheryl Crow's "Soak up the Sun" and you'll be on brand with this brew. 
        `,
        price: 18.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'Africa',
        roast: 'Light',
        size: '12 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0043/6099/4934/products/simplesummer22_1800x1800.jpg?v=1653661278',
      });
  
      const product19 = await Products.createProduct({
        name: 'Costa Rica La Gladiola',
        description: `
        La Gladiola comes from multiple smallholder farms in the north-western part of the Tarrazu valley, Costa Rica. 
        Tarrazu coffee is highly regarded, and is known for growing very clean, high quality coffees.
        Sweet, medium-bodied, and notes of chocolate make La Gladiola an excellent choice for drip coffee.
        `,
        price: 15.5,
        inStock: true,
        category: 'Whole Beans',
        origin: 'South America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0043/6099/4934/products/gladiola_1800x1800.jpg?v=1638280835',
      });
  
      const product20 = await Products.createProduct({
        name: 'Space Cadet',
        description: `
        A long time ago in a galaxy far, far away… the perfect blend of coffees for cold brew was born. We love this blend for cold brew, 
        so much in fact that it's the same coffee we brew in 300 gallon batches for our original and nitro cans. 
        That being said, a Space Cadet isn't bound by the rules of any world but their own, so you can brew this blend up however you'd like! 
        Our team tastes notes of clementine, nougat and burnt sugar.
        `,
        price: 80.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'North America',
        roast: 'Medium',
        size: '5 lb',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0043/6099/4934/products/spacecadet_e551c73d-0e67-49ef-9e7a-d56d1cbd5302_1800x1800.jpg?v=1620147848',
      });
  
      const product21 = await Products.createProduct({
        name: 'Cold Brew',
        description: `
        A blend of high quality coffees from Central America and Africa, we taste notes of clementine, nougat, burnt sugar, with a clean, crisp finish.
        `,
        price: 35.0,
        inStock: true,
        category: 'Cans',
        origin: 'Blend',
        roast: 'Medium',
        size: '12 cans',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0043/6099/4934/products/CB_1800x1800.jpg?v=1640269804',
      });
  
      const product22 = await Products.createProduct({
        name: 'Decaf Cold Brew',
        description: `
        Not all decafs are created equal, and we think our Daydream Decaf Cold Brew is as tasty as our original. 
        While the majority of decaf coffees on the market use chemicals to remove caffeine from the coffee seeds, 
        these Brazilian beans are water-processed, which is chemical free, and preserves the taste and characteristics of the coffee.
        `,
        price: 35.0,
        inStock: true,
        category: 'Cans',
        origin: 'South America',
        roast: 'Medium',
        size: '12 cans',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0043/6099/4934/products/daydreamcans_1800x1800.jpg?v=1651502536',
      });
  
      const product23 = await Products.createProduct({
        name: 'Tabletop',
        description: `
        Tabletop is a blend of our Ethiopia Organic & Ethiopia Natural. Both of which come from the same lot, the only difference is how they are processed after harvesting. 
        The mix of the washed and natural process in this blend lends to a slightly less acidic, more balanced cup. 
        If you haven't tried an Ethiopian coffee before, this is the perfect place to start.
        Notes: Lilac, Citrus, Stone Fruit, Praline
        `,
        price: 20.0,
        inStock: true,
        category: 'Whole Beans',
        origin: 'Africa',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://www.backlotcoffee.com/uploads/1/3/1/3/131339830/s993623203935796114_p25_i2_w3754.jpeg?width=2560?width=800',
      });
  
      const product24 = await Products.createProduct({
        name: 'Flying Squirrel',
        description: `
        Flying Squirrel is our most beloved, tried and true, house blend. 
        Consistently blended with fresh crop harvests from Central & South America, this coffee is comforting, well-balanced, and universal. 
        It is roasted medium, and can be used for Espresso, Cold Brew, or anything you throw at it. 
        `,
        price: 17.5,
        inStock: true,
        category: 'Whole Beans',
        origin: 'South America',
        roast: 'Medium',
        size: '12 oz',
        imageURL:
          'https://www.backlotcoffee.com/uploads/1/3/1/3/131339830/s993623203935796114_p7_i5_w3898.jpeg?width=2560?width=800',
      });
  
      const product25 = await Products.createProduct({
        name: 'Diner Mug',
        description: `
        Classic Backlot Diner Mug - for all your home or work hot drinks!
        Available in dark blue with a white Backlot Coffee logo and white with a blue Backlot Coffee logo.`,
        price: 12.0,
        inStock: true,
        category: 'Gear',
        origin: 'n/a',
        roast: 'n/a',
        size: 'n/a',
        imageURL:
          'https://www.backlotcoffee.com/uploads/1/3/1/3/131339830/s993623203935796114_p36_i8_w2160.jpeg?width=800',
      });
  
      const product26 = await Products.createProduct({
        name: 'Kalita Ceramic Dripper',
        description: `
        This dripper, long favored by baristas on BOTH coasts, holds heat really well and has this funky 3-hole design, 
        which lets the coffee flow just the exact right amount of quickly`,
        price: 34.5,
        inStock: true,
        category: 'Gear',
        origin: 'n/a',
        roast: 'n/a',
        size: 'n/a',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0556/1378/4259/products/Kalita_Ceramic-Dripper_2000x.jpg?v=1646843493',
      });
  
      const product27 = await Products.createProduct({
        name: 'Baratza Encore Grinder',
        description: `
        This prosumer conical burr grinder is ideal for the full spectrum of your coffee needs. 
        Forty different settings allow for exactly the right grind for any extraction technique. 
        This is our favorite home grinder!`,
        price: 170.0,
        inStock: true,
        category: 'Gear',
        origin: 'n/a',
        roast: 'n/a',
        size: 'n/a',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0294/6861/products/pc-baratza-encore-white-2020-WBG-angle__98705_720x.png?v=1612809291',
      });
  
      const product28 = await Products.createProduct({
        name: 'Bonavita Brewer',
        description: `
        Bonavita 8-cup coffee brewer with high-quality stainless steel lined thermal carafe.  
        Brews coffee to the SCAA (Specialty Coffee Association of America) coffee standards of water temperature, contact time, and coffee saturation. 
        1400W thermal block heater achieves proper water temperature quickly. 
        A high-quality thermal carafe maintains coffee temperature longer.
        A perfect cup of coffee. Every time.`,
        price: 180.0,
        inStock: true,
        category: 'Gear',
        origin: 'n/a',
        roast: 'n/a',
        size: 'n/a',
        imageURL:
          'https://cdn.shopify.com/s/files/1/0294/6861/products/bonavita-brewer_460x.png?v=1417727639',
      });
  
      const product29 = await Products.createProduct({
        name: 'Bodum French Press',
        description: `     
        Discover the art of the perfect brew with the CHAMBORD French press coffee maker. 
        The French press system is beloved by coffee aficionados worldwide for its simplicity of brewing and purity of taste. 
        And the CHAMBORD is the original and best French press coffee maker.
        `,
        price: 54.99,
        inStock: true,
        category: 'Gear',
        origin: 'n/a',
        roast: 'n/a',
        size: 'n/a',
        imageURL:
          'https://d9pl0lig74xnv.cloudfront.net/catalog/product/cache/91e9c011f0ac998e686df01a906b8401/1/9/1928-16_3__1.jpg',
      });
  
      const user1 = await Users.createUser({
        firstName: 'Minsung',
        lastName: 'Kim',
        email: '123@gmail.com',
        username: 'minsung',
        password: '123456789',
        isAdmin: true,
      });
  
      const user2 = await Users.createUser({
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@gmail.com',
        username: 'JohnnyBoy',
        password: 'passwordSecured',
        isAdmin: false,
      });
  
      const user3 = await Users.createUser({
        firstName: 'Samsung',
        lastName: 'Fridge',
        email: 'Chilly@gmail.com',
        username: 'ColdOnes',
        password: 'IceIceBaby',
        isAdmin: false,
      });
  
      let today = new Date().toLocaleDateString()
  
      const order1 = await Orders.createOrder({
        status: 'created',
        userId: 1,
        // datePlaced: 2022 - 07 - 23,
      });
  
      const order2 = await Orders.createOrder({
        status: 'created',
        userId: 3,
        // datePlaced: today,
      });
      
      const allOrders = await Orders.getAllOrders();
      // console.log("Grabbing all orders", allOrders);
      
      const addingProductToOrder = await OrderProducts.addProductToOrder({ 
        orderId: 1, 
        productId: 1, 
        price: 10, 
        quantity: 1 });
        // console.log("first order product", addingProductToOrder);
        
        const addingSecondOfSameProductToOrder = await OrderProducts.addProductToOrder({
          orderId: 1, 
          productId: 1, 
          price: 30, 
          quantity: 3 });
        // console.log("adding another to product to order", addingSecondOfSameProductToOrder);
  
        // await OrderProducts.destroyOrderProduct(1)
          
      // const firstOrder = await Orders.getOrderById(1);
      // console.log("Grabbing first order", firstOrder);
  
      const updatedProduct1 = await Products.updateProduct({
        id: 1,
        name: 'Porter',
        description: `This coffee exists for early morning risers.  
           Eye-opening boldness and big body preparing you for whatever lies in front of you.  
           A cup with a full dark chocolate mouthfeel, peanut butter, caramel, and ending with toasted marshmallow
           `,
        price: 25.0,
        inStock: true,
        category: 'Whole Bean',
        origin: 'South America',
        roast: 'Dark',
        size: '12 oz',
        imageURL:
          'https://images.squarespace-cdn.com/content/v1/602ab9f496e25d6c4bf3e60a/1626184276816-EIUQPATL1FDJ06338DTD/Guatemala_30387.jpg?format=1000w',
      });
  
      const updatedUser1 = await Users.updateUser({
        id: 1,
        firstName: "Minsung",
        lastName: "Kimm",
        email: "123@gmail.com",
        
      })
  
    } catch (error) {
      throw error;
    }
  }
  
  buildTables()
    .then(populateInitialData)
    .catch(console.error)
    .finally(() => client.end());
  