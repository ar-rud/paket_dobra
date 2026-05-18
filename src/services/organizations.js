/**
 * Organizations Service
 * 
 * Handles organization/foundation related operations:
 * - Fetch all organizations
 * - Get organization by ID
 * - Get organization details with campaigns
 * - Update organization info (admin)
 * - Create organization (admin)
 */

import apiCall from './api';

// TODO: Add all organization service methods here
/**
 * Fetch all organizations (foundations) from the API.
 * Returns an array of organization objects.
 */
export async function getAllOrganizations() {
	try {
		const organizations = await apiCall('/organizations');
		return organizations;
	} catch (error) {
		console.error('Failed to fetch organizations:', error);
		throw error;
	}
}
