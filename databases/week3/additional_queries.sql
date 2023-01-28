USE `meal_sharing`;


-- meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('ACAI BOWL', 'Strawberry, Blueberry, Banana, Acai, Fresh Pineapple', 'Østerbro', '2023-01-10 18:00:00', 15, 69, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('COCOA BANANA BOWL', 'Cocoa Powder, Banana, Fresh Pineapple', 'Vesterbro', '2023-01-03 18:00:00', 10, 59, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('EXOTIC BOWL', 'Mango, Passion fruit, Sea buckthorn, Banana, Fresh pineapple', 'Hellerup', '2023-01-02 18:00:00', 20, 79, current_date() );


-- add reservation

INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (2, 5, current_date(), '69 47 68 08', 'Zeljan', 'zekosn@live.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (2, 1, current_date(), '67 47 08 20', 'Alla', 'alla.p@gmail.com');


-- add review 

INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('wonderful ', 'nice service aaaand amazing food.', 3, 5, current_date());
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('to bed', ' bad service, food ok but we will not be coming back', 1, 6, current_date());


-- 1. Get meals that has a price smaller than a specific price fx 90
SELECT title,price 
FROM meal 
WHERE price < 130;

-- 2. Get meals that still has available reservations
SELECT 
    meal.title,
    meal.max_reservations,
    (meal.max_reservations - SUM(reservation.number_of_guests)) AS available_reservations
FROM meal
INNER JOIN reservation
ON meal.id = reservation.meal_id
GROUP BY meal.id;

-- 3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title
FROM meal
WHERE title LIKE '%TOFU%POKÉ%';

-- 4. Get meals that has been created between two dates
SELECT title 
FROM meal 
WHERE meal.created_date  BETWEEN '2023-01-05' and '2023-01-27';

-- 5. Get only specific number of meals fx return only 5 meals
SELECT * 
FROM meal  
ORDER BY price DESC
LIMIT 5;

-- 6. Get the meals that have good reviews
SELECT meal.id,meal.title, avg(review.stars) 
FROM meal 
INNER JOIN review ON meal.id = review.meal_id
GROUP BY  review.meal_id;

-- to get average of reviews for all the meals
SELECT meal.*, 
  AVG(review.stars) AS `average_rating` 
FROM meal 
JOIN review ON meal.id = review.meal_id 
GROUP BY meal.id 
ORDER BY `average_rating` DESC;

-- 7. Get reservations for a specific meal sorted by created_date(reservation created)
SELECT reservation.id =1
FROM reservation 
INNER JOIN meal ON meal.id = reservation.meal_id 
ORDER BY meal.id DESC;

-- 8. Sort all meals by average number of stars in the reviews
SELECT meal.title, avg(review.stars) AS average 
FROM meal 
INNER JOIN review 
ON meal.id = review.meal_id 
GROUP BY meal.title
ORDER BY avg(review.stars);