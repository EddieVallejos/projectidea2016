DROP DATABASE IF EXISTS recruitment_management_system;
CREATE DATABASE recruitment_management_system;

USE recruitment_management_system;

CREATE TABLE recruit (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL DEFAULT '',
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100),
	givenname VARCHAR(100),
	middlename VARCHAR(100),
	suffix VARCHAR(10),
	emailadd VARCHAR(100),
	contactnum VARCHAR(12),
	degreeprog VARCHAR(100),
	adviser VARCHAR(100),
	year ENUM('Sophomore', 'Junior', 'Senior'),
	gwa decimal(1),
	prefproglang VARCHAR(100),
	essay1 TEXT,
	essay2 TEXT,
	sched VARCHAR(100),
	progress ENUM('Orientation', 'Passing of Application Form', 'Panel Interview', 'Academic Exam', 'Reporting', 'Finals'),
	CONSTRAINT recruit_username_uk UNIQUE(username), 
	CONSTRAINT recruit_emailadd_uk UNIQUE(emailadd), 
	CONSTRAINT recruit_contactnum_uk UNIQUE(contactnum),
	CONSTRAINT recruit_studno_uk UNIQUE(studno), 
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE schedule (
	schedid INT NOT NULL,
	schedimage blob
);

CREATE TABLE recruiter (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100),
	givenname VARCHAR(100),
	middlename VARCHAR(100),
	suffix VARCHAR(10),
	team ENUM('Logistics and Public Affairs Team', 'Records and Documentation Team', 'Finance and Management Team', 'Membership Affairs Team', 'Academic Affairs Team', 'Media and Publicity Team'),
	CONSTRAINT recruit_username_uk UNIQUE(username),
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE admin (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100),
	givenname VARCHAR(100),
	middlename VARCHAR(100),
	suffix VARCHAR(10),
	team ENUM('Logistics and Public Affairs Team', 'Records and Documentation Team', 'Finance and Management Team', 'Membership Affairs Team', 'Academic Affairs Team', 'Media and Publicity Team'),
	CONSTRAINT recruit_username_uk UNIQUE(username),
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE codes (
	code VARCHAR(6) NOT NULL,
	usertype ENUM('Recruit', 'Recruiter', 'Admin') NOT NULL,
	CONSTRAINT codes_code_uk UNIQUE(code),
	CONSTRAINT codes_code_pk PRIMARY KEY(code)
);