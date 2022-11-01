import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
    "https://tupmvvksqgbqdzridrqb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cG12dmtzcWdicWR6cmlkcnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwMTIyNTcsImV4cCI6MTk4MjU4ODI1N30.5uZdCofPa878ZbK6jbrl6pJBLmn11XC9BAausn2tD2U"
    )