/**
 * API Endpoints Configuration (JavaScript version)
 *
 * This file contains all API endpoint URLs for connecting to the Rails backend.
 * Update the BASE_URL based on your environment.
 */

const BASE_URL =  'https://new-beginning-admin.alnitak.app/api/v1';

export const API_ENDPOINTS = {
  // Articles/Blog
  articles: {
    list: `${BASE_URL}/articles`,
    show: (id) => `${BASE_URL}/articles/${id}`,
    comments: {
      list: (articleId) => `${BASE_URL}/articles/${articleId}/comments`,
      create: (articleId) => `${BASE_URL}/articles/${articleId}/comments`,
    },
  },

  // Services
  services: {
    list: `${BASE_URL}/services`,
    show: (id) => `${BASE_URL}/services/${id}`,
    appointments: {
      list: (serviceId) => `${BASE_URL}/services/${serviceId}/appointments`,
      create: (serviceId) => `${BASE_URL}/services/${serviceId}/appointments`,
    },
  },

  // Users
  users: {
    list: `${BASE_URL}/users`,
    show: (id) => `${BASE_URL}/users/${id}`,
    update: (id) => `${BASE_URL}/users/${id}`,
  },

  // Doctor Profile
  doctorProfile: {
    show: (id) => `${BASE_URL}/doctor_profile/${id}`,
    update: (id) => `${BASE_URL}/doctor_profile/${id}`,
  },

  // Appointments
  appointments: {
    list: `${BASE_URL}/appointments`,
    show: (id) => `${BASE_URL}/appointments/${id}`,
    create: `${BASE_URL}/appointments`,
    cancel: (id) => `${BASE_URL}/appointments/${id}/cancel`,
  },

  // Categories
  categories: {
    list: `${BASE_URL}/categories`,
    show: (id) => `${BASE_URL}/categories/${id}`,
  },

  // Testimonials
  testimonials: {
    list: `${BASE_URL}/testimonials`,
    create: `${BASE_URL}/testimonials`,
  },

  // Contact Messages
  contactMessages: {
    create: `${BASE_URL}/contact_messages`,
  },

  // Resources
  resources: {
    list: `${BASE_URL}/resources`,
    show: (id) => `${BASE_URL}/resources/${id}`,
  },

  // Notifications
  notifications: {
    list: `${BASE_URL}/notifications`,
    show: (id) => `${BASE_URL}/notifications/${id}`,
    count: `${BASE_URL}/notifications/count`,
    markAllAsRead: `${BASE_URL}/notifications/mark_all_as_read`,
    markAsRead: (id) => `${BASE_URL}/notifications/${id}/mark_as_read`,
    markAsSeen: (id) => `${BASE_URL}/notifications/${id}/mark_as_seen`,
    test: `${BASE_URL}/notifications/test`,
  },
};

/**
 * Helper function to build query string
 */
export const buildQueryString = (params) => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Example usage:
 *
 * import { API_ENDPOINTS, buildQueryString } from '@/config/apiEndpoints';
 *
 * // Get all articles
 * const articles = await fetch(API_ENDPOINTS.articles.list);
 *
 * // Get articles by category
 * const categoryArticles = await fetch(
 *   API_ENDPOINTS.articles.list + buildQueryString({ category: 'womens-health' })
 * );
 *
 * // Get single article
 * const article = await fetch(API_ENDPOINTS.articles.show(1));
 *
 * // Create appointment
 * const appointment = await fetch(API_ENDPOINTS.appointments.create, {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ ... })
 * });
 */

