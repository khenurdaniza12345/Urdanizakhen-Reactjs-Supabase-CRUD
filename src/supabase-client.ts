import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hwsgiheedfgkbfagwljo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3c2dpaGVlZGZna2JmYWd3bGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTg2OTcsImV4cCI6MjA3NzQ3NDY5N30.sMXLOz60PPRqd0-g3Z9EfiaACPUgs8Zt0MEsIMPOGZE'

export const supabase = createClient(supabaseUrl, supabaseKey)
