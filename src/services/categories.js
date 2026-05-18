/**
 * Categories Service
 *
 * Handles product category operations:
 * - Fetch all categories (flat list and hierarchical)
 * - Get category by ID
 * - Get products count per category
 * - Create category (admin)
 * - Update category (admin)
 * - Delete category (admin)
 */

import apiCall from './api'

/**
 * Fetch all categories from the API.
 * Returns an array of category objects as stored in the DB.
 */
export async function getAllCategories() {
  try {
    const categories = await apiCall('/categories')
    return categories
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    throw error
  }
}

// Additional category service methods can be added here (getById, create, update, delete)
