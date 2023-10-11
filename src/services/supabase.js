import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zhwxsvcfovupghvnasib.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpod3hzdmNmb3Z1cGdodm5hc2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MTM3MjIsImV4cCI6MjAxMjQ4OTcyMn0.dEdD8FOQkE0GcqKaAON4kC1m8TWcIlqTDGUQD5Of_WM`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
