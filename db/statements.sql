CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    picture TEXT
)

CREATE TABLE food(
    id serial primary key,
    name text,
    price int,
    picture text
)


--  MANY TO MANY RELATIONSHIP
Create table users_food(
    id serial primary key, 
    user_id int references users(id),
    food_id int references food(id)
)

--SUB QUERY EXAMPLE AND JOIN CAUSE HELL YEAH
select u.id as user_id, u.name, u.picture, f.id AS food_id, f.price, f.picture as food_picture,  from users_food uf
join users u on uf.user_id = u.id
join food f on uf.food_id = f.id
where f.price > (
    select AVG (price)
    from food
)




-- ONE TO MANY one user many things in cart
create table users_cart(
    id serial primary key, 
    FOREIGN KEY user_id references users(id)
    price bigint,
    picture text,
    description varchar(235)
)

SELECT * FROM users_cart uc
join users u ON u.id = uc.user_id 

ALTER TABLE food
ALTER COLUMN name 
TYPE Varchar(200)