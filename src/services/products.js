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

/* Create or update a draft product.
 * If `product.id` is present, performs PUT /products/:id, otherwise POST /products.
 */
export async function saveDraft(product) {
  if (!product) throw new Error("saveDraft: product required");

  const payload = { ...product, status: product.status ?? "DRAFT" };

  if (product.id) {
    return apiCall(`/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  }

  return apiCall("/products", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Create or update a product with the provided status and full payload.
 */
export async function saveProduct(product) {
  if (!product) throw new Error("saveProduct: product required");

  const payload = { ...product };

  if (product.id) {
    return apiCall(`/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  }

  return apiCall("/products", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function deleteProduct(productId) {
  if (!productId) throw new Error("deleteProduct: productId required");
  return apiCall(`/products/${productId}`, { method: "DELETE" });
}

export default {
  getProductsBySellerId,
  getProductById,
  getProductsByCategory,

  saveDraft,
  saveProduct,
  deleteProduct,
};
