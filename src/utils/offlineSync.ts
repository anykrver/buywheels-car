import { supabase } from './supabaseClient';

export const syncOfflineSubmissions = async () => {
  if (typeof window === 'undefined') return;

  // Sync pending vehicle bookings
  try {
    const rawBookings = localStorage.getItem('buywheels_pending_bookings');
    if (rawBookings) {
      const bookings = JSON.parse(rawBookings);
      if (Array.isArray(bookings) && bookings.length > 0) {
        const remaining: any[] = [];
        for (const item of bookings) {
          const { error } = await supabase.from('leads').insert([
            {
              name: item.name,
              phone: item.phone,
              email: item.email || null,
              source: 'Offline Vehicle Booking',
              vehicle_interest: item.vehicleTitle || 'Unknown',
              notes: `City: ${item.city}. Purpose: ${item.purpose || 'Direct Booking'}`,
              stage: 'New'
            }
          ]);
          if (error) remaining.push(item);
        }
        if (remaining.length > 0) {
          localStorage.setItem('buywheels_pending_bookings', JSON.stringify(remaining));
        } else {
          localStorage.removeItem('buywheels_pending_bookings');
        }
      }
    }
  } catch (err) {
    console.warn('Failed to sync offline bookings:', err);
  }

  // Sync pending leads
  try {
    const rawLeads = localStorage.getItem('buywheels_pending_leads');
    if (rawLeads) {
      const leads = JSON.parse(rawLeads);
      if (Array.isArray(leads) && leads.length > 0) {
        const remaining: any[] = [];
        for (const item of leads) {
          const { error } = await supabase.from('leads').insert([item]);
          if (error) remaining.push(item);
        }
        if (remaining.length > 0) {
          localStorage.setItem('buywheels_pending_leads', JSON.stringify(remaining));
        } else {
          localStorage.removeItem('buywheels_pending_leads');
        }
      }
    }
  } catch (err) {
    console.warn('Failed to sync offline leads:', err);
  }
};

// Auto-trigger sync when online
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    syncOfflineSubmissions();
  });
  // Also try on app startup after 3s delay
  setTimeout(() => {
    syncOfflineSubmissions();
  }, 3000);
}
