CREATE DATABASE yelp;
CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >=1 AND price_range <= 5)
);

INSERT INTO restaurants (name,location,price_range) VALUES ('McDonalds','richmond hill',12);
INSERT INTO restaurants (name,location,price_range) VALUES ('Burger King','Thorn hill',11);