#vue_app_000 脚手架
#vue_server_000 服务器
#         db.sql 数据库指定

#功能一:创建用户登录表并且添加数据
#1:进入xz库 7~16
USE mfw;
#2:创建表 mfw_user
#3:添加几列 14:20
CREATE TABLE nav(
   lid INT PRIMARY KEY AUTO_INCREMENT,
   pic VARCHAR(128)
);
INSERT INTO nav VALUES(null,'1.jpg');
INSERT INTO nav VALUES(null,'2.jpg');
INSERT INTO nav VALUES(null,'3.jpg');
INSERT INTO nav VALUES(null,'4.jpg');
INSERT INTO nav VALUES(null,'5.jpg');

CREATE TABLE mfw_user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   phone BIGINT,
   pwd VARCHAR(16)
);