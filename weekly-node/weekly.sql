## 创建Database
DROP DATABASE IF EXISTS `weekly`;
create database weekly;

use weekly;

## 创建表
# week_user  用户表
CREATE TABLE `week_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `usernum` varchar(45) DEFAULT NULL,
    `username` varchar(45) DEFAULT NULL,
    `password` varchar(120) DEFAULT NULL,
    `company_id` varchar(45) DEFAULT NULL,
    `company_name` varchar(100) DEFAULT NULL,
    `department_id` varchar(45) DEFAULT NULL,
    `department_name` varchar(100) DEFAULT NULL,
    `email` varchar(100) DEFAULT NULL,
    `role` int(11) DEFAULT NULL,
    `role_name` varchar(50) DEFAULT NULL,
    `telephone` varchar(50) DEFAULT NULL,
  	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

# 插入几个测试用户的记录
INSERT INTO `week_user` (usernum, username, password, company_id, company_name,
department_id, department_name, email, role, role_name, telephone)
values
('testadmin', 'testadmin', '3043bc5449ee4f5b4163103288958217', '0000', 'test', '0000', 'test',
'test@qq.com', 1, "admin", '13900000000');

INSERT INTO `week_user` (usernum, username, password, company_id, company_name,
department_id, department_name, email, role, role_name, telephone)
values
('testgm', 'testgm', '3043bc5449ee4f5b4163103288958217', '0000', 'test', '0000', 'test',
'test@qq.com', 2, "gm", '13900000000');

INSERT INTO `week_user` (usernum, username, password, company_id, company_name,
department_id, department_name, email, role, role_name, telephone)
values
('testmanager', 'testmanager', '3043bc5449ee4f5b4163103288958217', '0000', 'test', '0000', 'test',
'test@qq.com', 3, "manager", '13900000000');

INSERT INTO `week_user` (usernum, username, password, company_id, company_name,
department_id, department_name, email, role, role_name, telephone)
values
('testemployee', 'testemployee', '3043bc5449ee4f5b4163103288958217', '0000', 'test', '0000', 'test',
'test@qq.com', 4, "employee", '13900000000');

# week_week  周报记录
CREATE TABLE `week_week` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`usernum` varchar(45) DEFAULT NULL,
    `username` varchar(45) DEFAULT NULL,
	`content` varchar(200) DEFAULT NULL,
    `role` int(11) DEFAULT NULL,
    `date` varchar(100) DEFAULT NULL,
    `time` bigint DEFAULT NULL,
    `startDate` bigint DEFAULT NULL,
    `endDate` bigint DEFAULT NULL,
	`company_id` varchar(45) DEFAULT NULL,
    `department_id` varchar(45) DEFAULT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

# week_log  登录登出记录
CREATE TABLE `week_log` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`usernum` varchar(45) DEFAULT NULL,
	`login_time` datetime DEFAULT NULL,
	`password` varchar(120) DEFAULT NULL,
	`login_ip` varchar(120) DEFAULT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

# week_company  公司
CREATE TABLE `week_company` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`company_id` varchar(45) DEFAULT NULL,
	`company_name` varchar(200) DEFAULT NULL,
	`usernum` varchar(45) DEFAULT NULL,
	`username` varchar(45) DEFAULT NULL,
	`telephone` varchar(50) DEFAULT NULL,
	`email` varchar(100) DEFAULT NULL,
	`create_time` datetime DEFAULT NULL,
	`update_time` datetime DEFAULT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

# 插入测试用公司记录
INSERT INTO `week_company` (company_id, company_name, usernum, username, telephone, email)
values
('0000', 'test', 'testadmin', 'testadmin', '13900000000', 'test@qq.com');

# week_department  部门
CREATE TABLE `week_department` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`company_id` varchar(45) DEFAULT NULL,
	`company_name` varchar(200) DEFAULT NULL,
    `department_id` varchar(45) DEFAULT NULL,
    `department_name` varchar(100) DEFAULT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

# 插入测试用部门记录
INSERT INTO `week_department` (company_id, company_name, department_id, department_name)
values
('0000', 'test', '0000', 'test');

# week_role  权限
CREATE TABLE `week_role` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `role` int(11) DEFAULT NULL,
    `role_name` varchar(50) DEFAULT NULL,
    `company_id` varchar(45) DEFAULT NULL,
    `company_name` varchar(100) DEFAULT NULL,
  	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

# 插入权限信息
INSERT INTO `week_role` (role, role_name, company_id, company_name)
values
(1, 'admin', '0000', 'test');

INSERT INTO `week_role` (role, role_name, company_id, company_name)
values
(2, 'gm', '0000', 'test');

INSERT INTO `week_role` (role, role_name, company_id, company_name)
values
(3, 'manager', '0000', 'test');

INSERT INTO `week_role` (role, role_name, company_id, company_name)
values
(4, 'employee', '0000', 'test');