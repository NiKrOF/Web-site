DROP TABLE IF EXISTS t_products;

CREATE TABLE product
(
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    price integer NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);

INSERT INTO product
VALUES
(1, 'Телефон', 12500),
(2, 'Компьютер', 98000),
(3, 'Саласка', 350);
