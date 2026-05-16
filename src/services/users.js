/**
 * Users Service
 * 
 * Handles all user-related operations:
 * - Fetch user profile by ID
 * - Update user profile
 * - Get user donation history
 * - Get user rewards and achievements
 * - Get user's products/listings
 * - Get user's orders
 */

import apiCall from './api';

/**
 * Fetch a single user by ID.
 * @param {number|string} userId
 * @returns {Promise<object|null>}
 */
export async function getUserById(userId) {
	if (userId == null) {
		throw new Error('getUserById: userId is required');
	}

	return apiCall(`/users/${userId}`);
}

export default {
	getUserById,
};
