create table `shopdb`.`manager` (
	id VARCHAR(20) NOT NULL Primary Key,
	passwd VARCHAR(100) NOT NULL,
	username VARCHAR(20) NOT NULL,
	depart VARCHAR(20) NOT NULL,
	mobile VARCHAR(15),
	email VARCHAR(30)
);
