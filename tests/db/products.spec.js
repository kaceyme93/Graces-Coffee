require('dotenv').config();
const { Products } = require('../../db/models/');
const client = require('../../db/client');

let productsFromDatabase, productsFromAdapter;
describe('Database', () => {
  beforeAll(async () => {
    client.connect();
    // "control" test data
    const { rows } = await client.query(`
      SELECT * 
      FROM products;
    `);
    productsFromDatabase = rows;
    productsFromAdapter = await Products.getAllProducts();
  });
  afterAll(async () => {
    client.end();
  });

  // TODO 1 - write a test for `getAllProducts` database adapter. selects and returns an array of all products
  describe('getAllProducts', () => {
    it('returns an array', async () => {
      expect(Array.isArray(productsFromAdapter)).toBe(true);
    });
    it('selects and returns an array of products', async () => {
      expect(productsFromAdapter).toEqual(productsFromDatabase);
    });
    it('Returns greater than zero products', async () => {
      expect(productsFromAdapter.length).toBeGreaterThan(0);
    });
    it('Product is an object', async () => {
      const [product] = productsFromAdapter;
      expect(typeof product).toBe('object');
    });
    it('each product has a id property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('id');
    });
    it('each product has a name property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('name');
    });
    it('each product has a description property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('description');
    });
    it('each product has a price property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('price');
    });
    it('each product has a imageURL property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('imageURL');
    });
    it('each product has a inStock property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('inStock');
    });
    it('each product has a category property', async () => {
      const [product] = productsFromAdapter;
      expect(product).toHaveProperty('category');
    });
  });

  describe('getProductById', () => {
    it('returns an array', async () => {
      expect(Array.isArray(productsFromAdapter)).toBe(true);
    });
  });
});
