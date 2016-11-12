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
	adviser VARCHAR(100) NOT NULL,
	year ENUM('Sophomore', 'Junior', 'Senior') NOT NULL,
	gwa decimal(1) NOT NULL,
	prefproglang VARCHAR(100) NOT NULL,
	essay1 TEXT NOT NULL,
	essay2 TEXT NOT NULL,
	progress ENUM('Orientation', 'Passing of Application Form', 'Panel Interview', 'Academic Exam', 'Reporting', 'Finals'),
	grouping VARCHAR(5),
	CONSTRAINT recruit_username_uk UNIQUE(username), 
	CONSTRAINT recruit_emailadd_uk UNIQUE(emailadd), 
	CONSTRAINT recruit_contactnum_uk UNIQUE(contactnum),
	CONSTRAINT recruit_studno_uk UNIQUE(studno), 
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE member (
	studno VARCHAR(10) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	givenname VARCHAR(100) NOT NULL,
	middlename VARCHAR(100) NOT NULL,
	suffix VARCHAR(10),
	role ENUM('Recruiter','Admin') NOT NULL,
	team ENUM('Logistics and Public Affairs Team', 'Records and Documentation Team', 'Finance and Management Team', 'Membership Affairs Team', 'Academic Affairs Team', 'Media and Publicity Team'),
	CONSTRAINT recruit_username_uk UNIQUE(username),
	CONSTRAINT recruit_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE account (
	usertype ENUM('Recruit', 'Member') NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	studno VARCHAR(10) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	givenname VARCHAR(100) NOT NULL,
	middlename VARCHAR(100) NOT NULL,
	suffix VARCHAR(10),
	CONSTRAINT account_username_uk UNIQUE(username),
	CONSTRAINT account_studno_pk PRIMARY KEY(studno)
);

CREATE TABLE announcements (
	announcement VARCHAR(200) NOT NULL,
	dateposted date NOT NULL,
	timeposted time NOT NULL
	/*recipient VARCHAR(20) NOT NULL*/
);