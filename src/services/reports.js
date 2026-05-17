/**
 * Reports Service
 *
 * Handles report management:
 * - Fetch all reports
 * - Get report by ID
 * - Download report file
 * - Create report (admin)
 * - Delete report (admin)
 * - Filter reports by type and date
 */

import apiCall from './api';

export async function getReports() {
	return apiCall('/reports');
}

export async function getReportById(reportId) {
	return apiCall(`/reports/${reportId}`);
}

export default {
	getReports,
	getReportById,
};
