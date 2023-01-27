USE `meal_sharing`;

--Get all meals
SELECT title AS meal
FROM meal;

--Add a new meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('TOFU POKÉ', 'Tofu, White Rice, Sesame Mayo, Mint-Lime Dressing, Carrot, Squash, Bean Sprouts, Pickled Red Onions, Seaweed Salad', 'Østerbro', '2023-03-05 18:00:00', 15, 115, current_date() );

--Get a meal with any id
SELECT title 
FROM meal 
WHERE id = 4;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET  price= "149" 
where id= 4;


--Delete a meal with any id
DELETE FROM meal 
WHERE id = 5;