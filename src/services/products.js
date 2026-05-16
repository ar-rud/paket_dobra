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

import apiCall from './api';

/**
 * Fetch products belonging to a specific seller.
 * @param {number|string} sellerId
 * @returns {Promise<object[]>}
 */
export async function getProductsBySellerId(sellerId) {
	if (sellerId == null) {
		throw new Error('getProductsBySellerId: sellerId is required');
	}

	return apiCall(`/products?sellerId=${sellerId}`);
}

export default {
	getProductsBySellerId,
};
