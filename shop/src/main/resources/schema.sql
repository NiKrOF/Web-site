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
(1, 'Телефон', 12500),
(2, 'Компьютер', 98000),
(3, 'Саласка', 350);
