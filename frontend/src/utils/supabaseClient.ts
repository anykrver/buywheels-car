import { createClient } from '@supabase/supabase-js';

const DEFAULT_URL = 'https://rewmnpywlvhwzqzlaidq.supabase.co';
const DEFAULT_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJld21ucHl3bHZod3pxemxhaWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNTMxNzMsImV4cCI6MjEwMDYyOTE3M30.pYpxfyYZAVgnr0u3w0JcrNXG_8XdaooSD5cFOQu56vs';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_URL;
const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  DEFAULT_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

