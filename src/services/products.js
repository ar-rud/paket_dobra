/**
 * Products Service
 *
 * Handles all product-related operations:
 * - Fetch all products / by category / by ID
 * - Create new product (announcement)
 * - Update product
 * - Delete product
 * - Search and filter products
 */

import apiCall from "./api";

/**
 * Fetch products belonging to a specific seller.
 * @param {number|string} sellerId
 * @returns {Promise<object[]>}
 */
export async function getProductsBySellerId(sellerId) {
  if (sellerId == null) {
    throw new Error("getProductsBySellerId: sellerId is required");
  }

  return apiCall(`/products?sellerId=${sellerId}`);
}

/**
 * Fetch a single product by ID.
 * @param {number|string} productId
 * @returns {Promise<object|null>}
 */
export async function getProductById(productId) {
  if (productId == null) {
    throw new Error("getProductById: productId is required");
  }

  return apiCall(`/products/${productId}`);
}

/**
 * Fetch products belonging to a specific category.
 * @param {string} category
 * @returns {Promise<object[]>}
 */
export async function getProductsByCategory(category) {
  if (!category) {
    throw new Error("getProductsByCategory: category is required");
  }
  return apiCall(`/products?category=${category}`);
}

export default {
  getProductsBySellerId,
  getProductById,
  getProductsByCategory,
};
