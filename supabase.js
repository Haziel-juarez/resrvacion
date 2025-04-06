import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://glrsjsttyopygvdcfvjp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdscnNqc3R0eW9weWd2ZGNmdmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5ODcxMDMsImV4cCI6MjA1NzU2MzEwM30.-bJcfKFdahtZNJ8jXcgt019pTa6Iebl3NMTP4kgZBFM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;
