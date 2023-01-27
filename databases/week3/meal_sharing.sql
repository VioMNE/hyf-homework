SET NAMES utf8mb4;

CREATE DATABASE IF NOT EXISTS `meal_sharing`;

USE `meal_sharing`;


CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) UNSIGNED NOT NULL,
    `price` DECIMAL(6 , 2 ) NOT NULL,
    `created_date` DATE NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


-- meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('SALMON POKÉ', 'Salmon, White Rice, Goma Dressing, Edamame, Radish, Broccoli, Pineapple, Avocado', 'Østerbro', '2023-01-19 18:00:00', 15, 139, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('KYLLING POKÉ', 'Chicken Meatballs, White Rice, Goma Dressing, Teriyaki Mayo, Edamame, Carrot, Bean Sprouts, Pineapple, Sea Lettuce', 'Vesterbro', '2023-01-25 18:00:00', 10, 134, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('BEEF BULGOGI POKÉ', 'Marinated Beef, White Rice, Red Curry, Edamame, Carrot, Bean Sprouts, Pickled Red Onions, Grilled Eggplant', 'Hellerup', '2023-01-10 18:00:00', 20, 139, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('TUNA POKÉ', 'Tuna, White Rice, Sweet Ponzu, Chili Mayo, Edamame, Carrot, Radish, Pickled Ginger, Avocado', 'Valby', '2023-01-15 18:00:00', 20, 139, current_date() );
INSERT INTO `meal` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('DUCK POKÉ', 'Pulled Duck, White Rice, Teriyaki Mayo, Red Cabbage, Sugar Peas, Edamame, Pickled Ginger, Pickled Red Onions, Cashews', 'Lyngby', '2023-01-01 18:00:00', 25, 129, current_date() );

-- add reservation

INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (5, 2, current_date(), '21 35 65 78', 'Johanees', 'jsp@live.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (8, 3, current_date(), '45 64 85 96', 'Nikole', 'nkolesokinanos@gmail.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (2, 1, current_date(), '35 95 03 58', 'Stefanos', 'stef@gmail.com');
INSERT INTO reservation (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (5, 4, current_date(), '49 49 30 29', 'Andjela', 'simunovic@gmail.com');

-- add review 

INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('nice', 'nice service aaaand amazing food. beef poke are my faves', 3, 5, current_date());
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('not good', ' bought there a bowl for take out twice and both times they messed up the order, either by putting in something else than I asked for or by forgetting extras entirely. Definitely not going there a third time.', 2, 4, current_date());
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('awesome', 'More than the sum of its parts. I cant explain why but its one of the best tasting takeaway foods Ive had in CPH. It may sound a bit bland on the menu but in your mouth its a whole other experience. Super fresh ingredients, novel tasty sauces and a fresh interior make this place a winner', 1, 5, current_date());
INSERT INTO review (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('bad', 'Avoid it if is too busy. We went today and as they had too many orders the tables were dirty. We asked for an order without radish and ginger and we got it with a ton of Ginger and radish and without the protein (tuna). We choose it as a take away for food in a trip so we were not able to go back and complain.', 4, 1, current_date());