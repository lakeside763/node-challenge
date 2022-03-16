CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS "users"(
  id uuid DEFAULT uuid_generate_v4(),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company_name VARCHAR(255),
  ssn VARCHAR(32),
  date_created TIMESTAMP DEFAULT NOW() NOT NULL,
  date_updated TIMESTAMP DEFAULT NOW() NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "expenses" (
  id uuid DEFAULT uuid_generate_v4(),
  merchant_name VARCHAR (255),
  amount_in_cents INTEGER,
  currency VARCHAR (10),
  user_id uuid,
  date_created TIMESTAMP DEFAULT NOW() NOT NULL,
  date_updated TIMESTAMP DEFAULT NOW() NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES "users"(id) ON DELETE CASCADE
);


