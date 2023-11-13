import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    "https://tpdjllyeeukwsybtvwxn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZGpsbHllZXVrd3N5YnR2d3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NjQwMTMsImV4cCI6MjAxNTQ0MDAxM30.wDyPFcw0pyPin_H4tE2c4NcUj-EPvN3R58MjyicE7Hg"
  );