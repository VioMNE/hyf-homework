USE hyf_lesson2;
-- Part 1: Working with tasks

-- 1.Add a task 
INSERT INTO task( 
title, 
description, 
created, 
updated, 
due_date, 
status_id) 
 VALUES (
'Spend 5 hours on learning coding',
'Run color 5k', 
'2023-05-24 18:35:40',
'2023-05-25 20:45:15',
'2023-06-30 12:00:00',
'1');
 
 -- 2.Change the title of a task
 
 UPDATE task
 SET title = 'Book place at running website'
 WHERE id=1;
 
 
 -- 3.Change a task due date
 
 UPDATE task 
 SET due_date = '2023-02-07 09:00:10'
 WHERE id=1; 
 
 
 -- 4.Change a task status
 UPDATE task 
 SET status_id = '1'
 WHERE id = 1; 
 
 -- 5. Mark a task as complete
 UPDATE task 
 SET status_id ='3'
 WHERE id = 4;
 
 -- 6. Delete a task
 DELETE FROM task
 WHERE id = 1;
 