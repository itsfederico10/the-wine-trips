import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dkaesvmpgcrxnvadyqxi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWVzdm1wZ2NyeG52YWR5cXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjEzODksImV4cCI6MjA4Njg5NzM4OX0.ZpMzfKzuN_HR_jo2ZuKGDFQjIVutjQ2L9Zoucqzv3UA';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
