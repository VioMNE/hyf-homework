-- Part 2: School database
-- Create a new database containing the following tables:

CREATE DATABASE school;

USE school;

SET NAMES utf8mb4;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE `Class` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(225) NOT NULL,
`begins` DATE NOT NULL,
`end` DATE NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE `Student` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50) NOT NULL,
`email` VARCHAR(15) NOT NULL,
`phone` VARCHAR(15) NOT NULL,
`class_id`VARCHAR(10) NOT NULL,
CONSTRAINT `fk_ckass` FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.

ALTER TABLE Student ADD INDEX inx_newindex (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished

ALTER TABLE Class
 ADD status ENUM(
 'not-started', 
 'ongoing', 
 'finished');