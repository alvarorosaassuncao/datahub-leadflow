-- Create leads table to store all form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  company_size TEXT NOT NULL CHECK (company_size IN ('pequena', 'media', 'grande')),
  challenge TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public form submission)
CREATE POLICY "Anyone can submit leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view leads (for future admin dashboard)
CREATE POLICY "Authenticated users can view all leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);