INSERT INTO public.users (id, first_name, last_name, company_name, ssn)
VALUES
  ('da140a29-ae80-4f0e-a62d-6c2d2bc8a474', 'jeppe',	'rindom',	'pleo',	'1'),
  ('e17825a6-ad80-41bb-a76b-c5ee17b2f29d', 'petr', 'janda',	'pleo',	'2'),
  ('3d16547a-79f6-4f62-9034-d3bfb31fb37c',	'olov',	'eriksson',	'pleo',	'3');

ALTER TABLE expenses
ADD COLUMN status VARCHAR(100);

INSERT INTO public.expenses (id, merchant_name, amount_in_cents, currency, user_id, date_created, status)
VALUES
  ('3e920f54-49df-4d0b-b11b-e6f08e3a2dca', 'Cafe', 228000,	'DKK',	'da140a29-ae80-4f0e-a62d-6c2d2bc8a474',	'2021-09-21 20:57:40.021428',	'pending'),
  ('314d54f4-8a5f-4c1d-b735-426b54794a44',	'Sliders', 12000,'DKK', 'da140a29-ae80-4f0e-a62d-6c2d2bc8a474',	'2021-09-20 20:57:40.021428',	'processed'),
  ('f20866f9-7d46-45f2-822c-4b568e216a13',	'Donkey Republic', 6000, 'DKK',	'da140a29-ae80-4f0e-a62d-6c2d2bc8a474',	'2021-09-19 20:57:40.021428',	'processed'),
  ('55987cc7-7830-442a-a52f-ca0326d9d3b1',	'Cafe', 224450,	'DKK',	'e17825a6-ad80-41bb-a76b-c5ee17b2f29d',	'2021-09-21 20:57:40.021428',	'pending'),
  ('f3f34c29-274a-414d-988f-711802eeac25',	'BRUS',	5000,	'DKK',	'3d16547a-79f6-4f62-9034-d3bfb31fb37c',	'2021-09-18 20:57:40.021428',	'processed'),
  ('285a5b8e-fb44-4763-9c71-9bd445b2783a',	'BRUS',	-5000,	'DKK',	'3d16547a-79f6-4f62-9034-d3bfb31fb37c',	'2021-09-18 20:57:40.021428',	'processed');
