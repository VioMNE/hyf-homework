USE `meal_sharing`;

-- 1.Get all reservations
SELECT contact_name, number_of_guests
FROM reservation;

-- 2.Add a new reservation
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (3, 4, current_date(), '38 38 76 46', 'Miljana', 'kicovic@gmail.com');

-- 3.Get a reservation with any id, fx 1
SELECT * 
FROM reservation 
WHERE id = 5;

-- 4.Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests = 4 
WHERE id =2;

-- 5.Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id =2;