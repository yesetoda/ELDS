
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pvxacpxqxitkygrkrpvt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2eGFjcHhxeGl0a3lncmtycHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3Nzg3OTIsImV4cCI6MjAzNjM1NDc5Mn0.HnWrKCwnWBrfceRFqJI6DZ9rYwvNBeyGIyd7Y1KbTlw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;