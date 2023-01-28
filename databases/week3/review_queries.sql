USE `meal_sharing`;

-- 1.Get all reviews
SELECT stars 
FROM review; 

-- 2.Add a new review
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('awesome', 'loved solom dish', 1, 5, current_date());

-- 3.Get a review with any id, fx 1
SELECT title, stars 
FROM review 
WHERE id = 5;

-- 4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET stars = 5 
WHERE id = 2;

-- 5.Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 3;