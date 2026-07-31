import { useState, useEffect } from 'react';
import { useLocation } from '../context/LocationContext';
import { supabase } from '../utils/supabaseClient';

export interface UserProfile {
  id: string;
  email?: string;
  full_name?: string;
  phone?: string;
  pincode?: string;
  city?: string;
  area?: string;
}

export function useUserLocation() {
  const { selectedCity, selectedPincode, selectedArea, setSelectedLocation } = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // 1. Fetch authenticated user profile
    const loadProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();

          if (profile) {
            setUserProfile(profile);
            if (profile.pincode && profile.city) {
              setSelectedLocation({
                city: profile.city,
                pincode: profile.pincode,
                area: profile.area || '',
              });
            }
          } else {
            setUserProfile({ id: user.id, email: user.email });
          }
        }
      } catch (err) {
        console.error('Error fetching user location profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();

    // 2. Auth listener for login / logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        setUserProfile(profile || { id: session.user.id, email: session.user.email });
      } else {
        setUserProfile(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  /** Save and sync user pincode across LocalStorage and Supabase */
  const updateUserPincode = async (pincode: string, city: string, area?: string) => {
    setSelectedLocation({ pincode, city, area });

    if (userProfile?.id) {
      try {
        const updated = {
          id: userProfile.id,
          pincode,
          city,
          area: area || '',
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase.from('profiles').upsert(updated);
        if (error) console.error('Failed to sync profile pincode with Supabase:', error.message);
        else setUserProfile(prev => prev ? { ...prev, pincode, city, area } : null);
      } catch (e) {
        console.error('Error in updateUserPincode:', e);
      }
    }
  };

  return {
    userProfile,
    selectedCity,
    selectedPincode,
    selectedArea,
    updateUserPincode,
    loading,
  };
}
