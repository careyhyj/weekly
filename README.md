# [weekly](https://github.com/saucxs/weekly)
[![](https://img.shields.io/badge/Powered%20by-saucxs%20-brightgreen.svg)](https://github.com/saucxs/weekly)
[![GitHub license](https://img.shields.io/github/license/saucxs/weekly.svg?style=popout)](https://github.com/saucxs/weekly/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/saucxs/weekly.svg?style=popout)](https://github.com/saucxs/weekly/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/saucxs/weekly.svg?style=popout)](https://github.com/saucxs/weekly/network)
[![GitHub issues](https://img.shields.io/github/issues/saucxs/weekly.svg?style=popout)](https://github.com/saucxs/weekly/issues)

周报系统的技术栈主要是node+vue+redis+mysql+es6，一个企业管理系统，企业员工汇报每周工作情况，以及完成情况，各级负责人可以查看和提醒相应未写周报人员，后端完全使用`nodeJS`，数据库使用`mysql`，基于`nodejs的thinkjs框架搭建的`，如果喜欢`nodeJS`写的后端，支持大前端，支持全栈开发，请请`star`并`fork`项目。

> + 系统演示地址为：[周报线上地址](http://weekly.mwcxs.top)。因为个别人原因，总会删除下面的账号test和teststaff，
> + （公司负责人）账号：testadmin，密码：a123456   
> + （部门经理）账号：test，密码：a123456
> + （成员）账号：teststaff，密码：a123456

如有使用问题请留言。

### 公告：
> + 1.不要删除默认的账号，以及相关东西 
> + 2.自己可以新建账号来测试，玩耍 
> + 3.每一个公司（组织机构）都是独立，每一个部门是独立，互不干扰 
> + 4.如果有商务要求，可以对接我，邮箱:saucxs@163.com，新建自己公司（组织机构）统一管理。
> + 5、**数据库文件，其实没有数据库，你可以看sql语句，你就知道表中需要的字段，可以参考https://github.com/saucxs/structure-admin 里的数据库表weekly_user，地址在structure-admin-node/src/common/mysql/structure_admin.sql**

### 功能点：
> + 1、所有人周报提交修改；
> + 2、所有人周报自身周报历史查看；
> + 3、部门经理查看部门周报填写情况，增改部门人员；
> + 4、总监（或公司拥有者）查看和修改所有人的周报填写情况，增删改公司人员，增改公司部门；
> + 5、管理员权限，增删改公司总监，增删改部门人员，增删改公司部门，查看和编辑所有所有的周报，以及所有所有周报填写情况；

### 一、技术栈
> + ThinkJS（ Node端框架） [官方网站](https://thinkjs.org/)
> + Vue.js（客户端双向数据绑定框架）  [官方网站](https://cn.vuejs.org/)

### 二、版本功能
- [x] Element UI
- [x] 登录/注销
- [x] 个人中心
- [x] 修改用户信息
- [x] 修改密码
- [x] mysql
- [x] 写周报
- [x] 个人历史周报
- [x] 部门人员管理
- [x] 部门周报情况
- [x] 公司的部门新建，修改，删除

+ 2018.09.18
   - 完成基本版本的功能
+ 2018.09.20
    - 部门经理权限优化
    - 左侧增加首页
    - 部门人员管理增加查询，可根据用户名，工号，公司名，部门名称，查询部门成员
+ 2018.10.12   
    - 优化权限管理

### 三、系统截图
#### 3.1 登录页
![image](./shot_pic_1.png)
#### 3.2 成员页面
![image](./shot_pic_staff.png)
#### 3.3 部门经理页面
![image](./shot_pic_2_manger.png)
#### 3.4 总监页面
![image](./shot_pic_2_big_manger.png)
#### 3.5 管理员页面
![image](./shot_pic_admin.png)

### 四、本地运行程序
1、首先你的环境是nodejs，不会安装配置参考：[nodejs安装和环境配置（Windows）](http://www.mwcxs.top/page/420.html)

2、clone下来项目
````
git clone https://github.com/saucxs/weekly.git
````
3、分别针对前端vue的weekly-web的文件夹和node后端weekly-node，安装相应依赖
````
npm install
````
4、安装redis（可以考虑安装RedisDesktopManager）

参考：[安装window下的redis，redis可视化管理工具（Redis Desktop Manager）安装，基础使用，实例化项目](http://www.mwcxs.top/page/421.html)

5、安装mysql，这个就不赘述

6、修改nodejs的后端的配置文件adapter.js，config.js这两个文件中

````
adapter.js

exports.cache = {
    type: 'redis',
    common: {
        timeout: 24 * 60 * 60 * 1000 // millisecond
    },
    redis: {
        handle: redisCache,
        host: '127.0.0.1',
        port: 6379,
        password: 'a123456'  //redis安装时候设置的秘密
    }
};
//
//
exports.model = {
  type: 'mysql',
  common: {
    logConnect: true,
    logSql: true,
    logger: msg => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: 'weekly',
    prefix: 'week_',
    encoding: 'utf8',
    host: '127.0.0.1',   //本地数据库
    port: '3306',　　　　　//数据库端口
    user: 'root',    //数据库的用户名
    password: '123456',    //数据库该用户名的密码
    dateStrings: true
  }
};
````
7、新建数据库

首先新建weekly数据库

```sql
create database weekly
```

然后依次新建下面的数据表：

- week_user

  ```sql
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
  ```

- week_week

  ```sql
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
  ```

- week_log

  ```sql
  CREATE TABLE `week_log` (
  	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`usernum` varchar(45) DEFAULT NULL,
  	`login_time` datetime DEFAULT NULL,
  	`password` varchar(120) DEFAULT NULL,
  	`login_ip` varchar(120) DEFAULT NULL,
  	PRIMARY KEY(`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
  ```

- week_company

  ```sql
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
  ```

- week_department

  ```sql
  CREATE TABLE `week_department` (
  	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`company_id` varchar(45) DEFAULT NULL,
  	`company_name` varchar(200) DEFAULT NULL,
      `department_id` varchar(45) DEFAULT NULL,
      `department_name` varchar(100) DEFAULT NULL,
  	PRIMARY KEY(`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
  ```

- week_role

  ```
  CREATE TABLE `week_role` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `role` int(11) DEFAULT NULL,
      `role_name` varchar(50) DEFAULT NULL,
      `company_id` varchar(45) DEFAULT NULL,
      `company_name` varchar(100) DEFAULT NULL,
    	PRIMARY KEY(`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
  ```

  

8、分别对前后端分离的项目启动

(1)前端vue的weekly-web的启动
````
npm run dev
````

(2)和node后端weekly-node的启动
````
npm start
````

### 五、欢迎关注
欢迎关注Github：https://github.com/saucxs

后续会出更多知识体系构建，技术分享，项目实战，实验室等，欢迎关注本公众号:**[松宝写代码]**

![欢迎关注](http://static.chengxinsong.cn/image/author/intro.jpg?width=600)

>微信公众号：**[松宝写代码]**
songEagle开发知识体系构建，技术分享，项目实战，实验室，带你一起学习新技术，总结学习过程，让你进阶到高级资深工程师，学习项目管理，思考职业发展，生活感悟，充实中成长起来。问题或建议，请公众号留言。

>微信群：**【写代码】研发进阶群**
一个成长交流的产研群，帮忙拉产研的同学们进群，聚聚人气😘😘。
每一个开发同学都应该形成自己的[知识体系](https://github.com/saucxs/full_stack_knowledge_list)，做到提纲挈领🧐🧐🧐
