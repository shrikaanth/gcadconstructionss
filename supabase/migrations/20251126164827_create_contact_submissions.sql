/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `phone` (text) - Contact's phone number
      - `email` (text) - Contact's email address
      - `city` (text) - City or location
      - `project_type` (text) - Type of project (Basement Under $47K, Home Renovation, Other)
      - `message` (text) - Additional details or message
      - `status` (text) - Submission status (new, contacted, completed)
      - `created_at` (timestamptz) - When the submission was created
      - `updated_at` (timestamptz) - When the submission was last updated

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - Add policy for authenticated admin users to read all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  city text NOT NULL,
  project_type text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);
