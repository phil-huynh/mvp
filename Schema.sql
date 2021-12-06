CREATE TABLE notes(
  id SERIAL NOT NULL,
  username VARCHAR(30),
  body VARCHAR(150),
  PRIMARY KEY (id)
);