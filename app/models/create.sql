-- # RUN THE FOLLOWING COMMANDS 
-- # ======================================== #
-- # 1) cd models/                            #
-- # 2) dropdb profiledb                      #
-- # 3) psql -U <username> -a -f create.sql   #
-- # ======================================== #
DROP DATABASE IF EXISTS profiledb;

CREATE DATABASE profiledb;

\c profiledb;

CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(100) not null UNIQUE,
  passwordHash VARCHAR(1000) not null,
  firstName VARCHAR(50) not null,
  lastName VARCHAR(100),
  hideLastName BOOLEAN default FALSE,
  city VARCHAR(100),
  locality VARCHAR(4),
  country VARCHAR(10),
  profilePhoto VARCHAR(1000) not null,
  aboutMe VARCHAR(1000),
  occupation VARCHAR(100),
  themeId INTEGER,
  createdAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE themes (
  themeId SERIAL PRIMARY KEY,
  color1 VARCHAR(10) not null,
  color2 VARCHAR(10) not null
);

CREATE TABLE photos (
  photoId SERIAL PRIMARY KEY,
  photoUrl VARCHAR(1000) not null,
  caption VARCHAR(64)
);

CREATE TABLE educations (
  educationId SERIAL PRIMARY KEY,
  educationName VARCHAR(100) not null,
  startMonth VARCHAR(12) not null,
  startYear VARCHAR(5) not null,
  endMonth VARCHAR(12) not null,
  endYear VARCHAR(5) not null
);

CREATE TABLE users_themes (
  ut_uid INTEGER REFERENCES users(uid) NOT NULL,
  ut_tid INTEGER REFERENCES themes(themeId) NOT NULL,
  CONSTRAINT users_themes_pkey PRIMARY KEY(ut_uid, ut_tid)
);

CREATE TABLE users_photos (
  up_uid INTEGER REFERENCES users(uid) NOT NULL,
  up_pid INTEGER REFERENCES photos(photoId) NOT NULL,
  CONSTRAINT users_photos_pkey PRIMARY KEY(up_uid, up_pid)
);

CREATE TABLE users_educations(
  ue_uid INTEGER REFERENCES users(uid) NOT NULL,
  ue_eid INTEGER REFERENCES educations(educationId) NOT NULL,
  CONSTRAINT users_educations_pkey PRIMARY KEY(ue_uid, ue_eid)
);
