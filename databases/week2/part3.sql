USE hyf_lesson2;

-- Part 3: More queries

-- 1. Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title AS 'Task Name',
user.email as 'email'
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT task.id, task.titile, task.created, user.name 
FROM task
JOIN user_task ON task.id=user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE status.name = 'Not Started' AND user.name= 'Donald Duck';

-- 3.Get all the tasks for 'Maryrose Meadows' that were created in september

SELECT 
task.title AS  'Task Name',
user.name AS 'user',
task.created as created
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
WHERE MONTH(created) = 09 AND user.name = 'Maryrose Meadows';


-- 4.Find how many tasks where created in each month

SELECT MONTHNAME(created) AS month, COUNT(*) AS number of task 
FROM task 
GROUP BY month;