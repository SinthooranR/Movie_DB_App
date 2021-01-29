CREATE DATABASE moviedb;

-- to use uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- user information table
CREATE TABLE account(
    account_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(32),
    email VARCHAR(32),
    password VARCHAR(16),
    plan VARCHAR(8),
    reviews VARCHAR []
);


CREATE TABLE movie(
    movie_id UUID PRIMARY KEY,
    movie_name VARCHAR(32),
    reviews VARCHAR []
);
