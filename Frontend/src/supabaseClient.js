import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jdaghzkxufikbcoooejf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYWdoemt4dWZpa2Jjb29vZWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NjYyNzIsImV4cCI6MjAyOTI0MjI3Mn0.FL_vTHjodeAemo1FIw38u2MMsNKdffpDfdy4VIGSHFY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
