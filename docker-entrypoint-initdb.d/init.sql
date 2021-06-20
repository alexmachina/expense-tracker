CREATE TABLE IF NOT EXISTS accounts (
    id serial PRIMARY KEY,
    title VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS entries (
    id serial PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    num VARCHAR ( 25 ) NOT NULL,
    description VARCHAR (50),
    amount NUMERIC(6,2),
    account serial references accounts(id)
);