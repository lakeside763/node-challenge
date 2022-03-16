import { query } from '@nc/utils/db';

export function readUser(userId) {
  return query('SELECT * FROM users WHERE id = $1', [userId])
    .then((response) => response.rows?.[0]);
}

export function createUser({ id, first_name, last_name, company_name, ssn }) {
  const text = 'INSERT INTO users(id, first_name, last_name, company_name, ssn) Values($1, $2, $3, $4, $5) RETURNING *';
  const values = [`${id}`, `${first_name}`, `${last_name}`, `${company_name}`, `${ssn}`];

  return query(text, values).then((response) => response.rows[0]);
}
