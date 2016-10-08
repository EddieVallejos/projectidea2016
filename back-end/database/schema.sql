DROP DATABASE IF EXISTS recruitment_management_system;
CREATE DATABASE recruitment_management_system;

USE recruitment_management_system;

CREATE TABLE recruit (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL DEFAULT '',
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	givenname VARCHAR(100) NOT NULL,
	middlename VARCHAR(100) NOT NULL,
	suffix VARCHAR(10),
	emailadd VARCHAR(100) NOT NULL,
	contactnum VARCHAR(12) NOT NULL,
	degreeprog VARCHAR(100) NOT NULL,
	adviser VARCHAR(100),
	year ENUM('Sophomore', 'Junior', 'Senior'),
	gwa decimal(1) NOT NULL,
	prefproglang VARCHAR(100) NOT NULL,
	essay1 TEXT NOT NULL,
	essay2 TEXT NOT NULL,
	sched VARCHAR(100) NOT NULL,
	progress ENUM('Orientation', 'Passing of Application Form', 'Panel Interview', 'Academic Exam', 'Reporting', 'Finals'),
	CONSTRAINT recruit_username_uk UNIQUE(username), 
	CONSTRAINT recruit_emailadd_uk UNIQUE(emailadd), 
	CONSTRAINT recruit_contactnum_uk UNIQUE(contactnum),
	CONSTRAINT recruit_studno_uk UNIQUE(studno), 
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE recruiter (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	givenname VARCHAR(100) not NULL,
	middlename VARCHAR(100) NOT NULL,
	suffix VARCHAR(10),
	team ENUM('Logistics and Public Affairs Team', 'Records and Documentation Team', 'Finance and Management Team', 'Membership Affairs Team', 'Academic Affairs Team', 'Media and Publicity Team') NOT NULL,
	CONSTRAINT recruit_username_uk UNIQUE(username),
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE admin (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	givenname VARCHAR(100) not NULL,
	middlename VARCHAR(100) NOT NULL,
	suffix VARCHAR(10),
	team ENUM('Logistics and Public Affairs Team', 'Records and Documentation Team', 'Finance and Management Team', 'Membership Affairs Team', 'Academic Affairs Team', 'Media and Publicity Team') NOT NULL,
	CONSTRAINT recruit_username_uk UNIQUE(username),
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE user(
	username VARCHAR(20) PRIMARY KEY,
	password VARCHAR(50) NOT NULL,
	fname VARCHAR(100) NOT NULL,
	lname VARCHAR(100) NOT NULL
);

INSERT INTO user(username, password, fname, lname) VALUES ('admin', 'admin', 'Rommel', 'Bulalacao');
