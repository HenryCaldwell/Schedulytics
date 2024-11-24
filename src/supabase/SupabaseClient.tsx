import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rjjutfjplchrhxtzylay.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqanV0ZmpwbGNocmh4dHp5bGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NDIxMDUsImV4cCI6MjA0NTAxODEwNX0.xNPBkKIITWtXDvBLMShaUu65hIZGa5dL2rQPxzLTRNA";

export const supabase = createClient(supabaseUrl, supabaseKey);
