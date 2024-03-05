import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pznbpgrngldecweoriod.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bmJwZ3JuZ2xkZWN3ZW9yaW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDg1ODYsImV4cCI6MjAyNDkyNDU4Nn0.LAHDShsfXdOXlyRlTDy7kvPMxAJdvOhOyuMjii5b_Lw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
