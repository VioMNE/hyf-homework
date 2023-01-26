CREATE DATABASE Book_Library;
USE Book_Library;

CREATE TABLE
    `Book_Library`.`author` (
        `author_id` INT NOT NULL,
        `first_name` VARCHAR(255) NOT NULL,
        `Last_name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`author_id`)
    );

CREATE TABLE
    `Book_Library`.`book` (
        `id` INT AUTO_INCREMENT NOT NULL,
        `book_title` VARCHAR(45) NOT NULL,
        `category` VARCHAR(45) NOT NULL,
        `language` ENUM('english', 'danish', 'montenegrin', 'greek') NOT NULL,
        `author_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `author.author_id` FOREIGN KEY (`author_id`) REFERENCES `Book_Library`.`author` (`author_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );


CREATE TABLE
    `Book_Library`.`member` (
        `member_id` INT NOT NULL,
        `first_name` VARCHAR(255) NOT NULL,
        `Last_name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`member_id`)
    );

CREATE TABLE
    `Book_Library`.`loan` (
        `loan_id` INT NOT NULL,
        `book_id` INT NOT NULL,
        `member_id` INT NOT NULL,
        `loan_date` DATETIME NOT NULL,
        `return _date` DATETIME NOT NULL,
        PRIMARY KEY (`loan_id`),
        CONSTRAINT `member_id` FOREIGN KEY (`member_id`) REFERENCES `Book_Library`.`member` (`member_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `Book_Library`.`book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)
