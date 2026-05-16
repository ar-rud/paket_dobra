/**
 * Orders Service
 * 
 * Handles all order-related operations:
 * - Create new order
 * - Fetch order by ID
 * - Get user's order history
 * - Update order status
 * - Cancel order
 * - Get order details with linked campaign
 */

import apiCall from './api';

/**
 * Fetch orders placed by a specific buyer.
 * @param {number|string} buyerId
 * @returns {Promise<object[]>}
 */
export async function getOrdersByBuyerId(buyerId) {
	if (buyerId == null) {
		throw new Error('getOrdersByBuyerId: buyerId is required');
	}

	return apiCall(`/orders?buyerId=${buyerId}`);
}

export default {
	getOrdersByBuyerId,
};
