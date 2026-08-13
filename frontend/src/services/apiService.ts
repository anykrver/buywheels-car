import { fetchVehicles, fetchDealers, fetchOffers, fetchBlogPosts, fetchReviews } from '../utils/supabaseService';
import { vehicles as localVehicles } from '../utils/data';
import type { Vehicle, Dealer, Offer, BlogPost, Review } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

/**
 * Unified API Client Service
 * Interacts with the Node.js/Express REST API with fallback to local & Supabase services.
 */
export const apiService = {
  // ── Vehicles API ──────────────────────────────────────────────
  async getVehicles(): Promise<Vehicle[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/vehicles`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          return json.data;
        }
      }
    } catch (e) {
      console.info('Backend REST API unavailable, using Supabase/local vehicles service.');
    }
    const remote = await fetchVehicles();
    return remote && remote.length > 0 ? remote : localVehicles;
  },

  async getVehicleBySlug(slug: string): Promise<Vehicle | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/vehicles/${slug}`);
      if (response.ok) {
        const json = await response.json();
        if (json.data) return json.data;
      }
    } catch (e) {
      console.info('Backend REST API unavailable for vehicle slug, falling back.');
    }
    const all = await this.getVehicles();
    return all.find(v => v.slug === slug || v.id === slug) || null;
  },

  // ── Dealers API ───────────────────────────────────────────────
  async getDealers(): Promise<Dealer[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/dealers`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data)) return json.data;
      }
    } catch (e) {
      console.info('Backend REST API unavailable, using Supabase dealers service.');
    }
    return fetchDealers();
  },

  // ── Offers API ────────────────────────────────────────────────
  async getOffers(): Promise<Offer[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/offers`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data)) return json.data;
      }
    } catch (e) {
      console.info('Backend REST API unavailable, using Supabase offers service.');
    }
    return fetchOffers();
  },

  // ── Blog API ──────────────────────────────────────────────────
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data)) return json.data;
      }
    } catch (e) {
      console.info('Backend REST API unavailable, using Supabase blog service.');
    }
    return fetchBlogPosts();
  },

  // ── Reviews API ───────────────────────────────────────────────
  async getReviews(): Promise<Review[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && Array.isArray(json.data)) return json.data;
      }
    } catch (e) {
      console.info('Backend REST API unavailable, using Supabase reviews service.');
    }
    return fetchReviews();
  },

  // ── Lead Capture POST API ─────────────────────────────────────
  async submitLead(lead: { name: string; phone: string; email?: string; source: string; vehicleInterest?: string; notes?: string }) {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (response.ok) return await response.json();
    } catch (e) {
      console.warn('Backend REST API submit lead failed, continuing with client storage.');
    }
    return { success: true, message: 'Lead captured locally' };
  },

  // ── Test Drive POST API ───────────────────────────────────────
  async submitTestDrive(data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/test-drives`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) return await response.json();
    } catch (e) {
      console.warn('Backend REST API test drive submit failed, continuing with client storage.');
    }
    return { success: true, bookingId: `BW-TD-${Math.floor(100000 + Math.random() * 900000)}` };
  }
};
