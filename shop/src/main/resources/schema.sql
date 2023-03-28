DROP TABLE IF EXISTS t_products;

CREATE TABLE t_products
(
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    price integer NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);

INSERT INTO t_products
VALUES
(1, 'Аккумулятор', 1000),
(2, 'Боинг-747', 100000000),
(3, 'Велосипед', 10000);
