SELECT * FROM crime_scene_report WHERE city = 'SQL City' AND date = '20180115' AND type = 'murder';
-- Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".

SELECT * FROM person WHERE address_street_name LIKE '%Northwestern Dr%' 
ORDER BY address_number DESC LIMIT 1

SELECT * FROM person WHERE address_street_name LIKE '%Franklin Ave%' 
AND name LIKE 'Annabel%'
-- id	   name	          license_id	address_number	address_street_name	    ssn
-- 14887	Morty Schapiro	118009          	4919	 Northwestern Dr	    111564949
-- 16371	Annabel Miller	490173          	103	     Franklin Ave	        318771143

SELECT name, address_number, address_street_name, transcript FROM person JOIN interview
ON person.id = interview.person_id WHERE address_street_name LIKE '%Northwestern Dr%' 
ORDER BY address_number DESC LIMIT 1 

-- name	address_number	address_street_name	transcript
-- Morty Schapiro	4919	Northwestern Dr	I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".

-- Annabel Miller	103	Franklin Ave	I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.

SELECT * FROM get_fit_now_member WHERE id LIKE '48Z%'AND membership_status = 'gold'
-- id	person_id	name	membership_start_date	membership_status
-- 48Z7A	28819	Joe Germuska	20160305	        gold
-- 48Z55	67318	Jeremy Bowers	20160101	        gold


SELECT * FROM get_fit_now_check_in WHERE membership_id LIKE '48Z%' AND check_in_date LIKE '%0109'
-- membership_id	check_in_date	check_in_time	check_out_time
-- 48Z7A	20180109	1600	1730
-- 48Z55	20180109	1530	1700

SELECT name, check_in_date, check_in_time, check_out_time FROM get_fit_now_member JOIN get_fit_now_check_in 
ON get_fit_now_member.id = get_fit_now_check_in.membership_id WHERE name = 'Annabel Miller'

-- name	check_in_date	check_in_time	check_out_time
-- Annabel Miller	20180109	1600	1700



