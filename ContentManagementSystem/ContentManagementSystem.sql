drop database if exists CMS;
create database CMS;
use CMS;

create table User(
UserId int primary key auto_increment,
Username varchar(30) not null unique,
Firstname varchar(40),
Lastname varchar(40),
Email varchar(30),
Password varchar(100) not null,
Enabled boolean not null,
Bio varchar(1000),
User_Icon varchar(100)
);

create table Role (
RoleId int primary key auto_increment,
Role varchar(30) not null
);

create table User_Role(
UserId int not null,
RoleId int not null,
primary key(UserId, RoleId),
foreign key fk_User_Role_User_UserId(UserId) references User(UserId),
foreign key fk_User_Role_Role_RoleId(RoleId) references Role(RoleId)
);

create table Content(
ContentId int primary key auto_increment,
Title varchar(30) not null,
UserId int not null,
foreign key fk_Content_User_UserId(UserId) references User(UserId),
Content_Image varchar(500),
Time_Posted dateTime,
Time_Created dateTime,
Time_Scheduled dateTime,
Content varchar(8000) not null,
Static boolean not null,
Published boolean not null,
Public_Access boolean not null
);

create table Tag(
TagId int primary key auto_increment,
Tag varchar(30) not null
);

create table Content_Tag(
ContentId int, 
TagId int,
primary key(ContentId, TagId),
foreign key Content_Tag_Content_ContentId (ContentId) references Content(ContentId),
foreign key Content_Tag_Tag_TagId(TagId) references Tag(TagId) 
);


create table Comment(
CommentId int primary key auto_increment,
Comment varchar(1000) not null,
UserId int not null,
foreign key fk_Comment_User_UserId(UserId) references User(UserId),
Time_Posted dateTime not null,
ContentId int not null,
foreign key fk_Comment_Content_ContentId(ContentId) references Content(ContentId)
);

insert into User(UserId, Username, Firstname, Lastname, Password, Enabled)
    values(1,"admin","Ron","Kim", "password", true),
		  (2,"user","Ginny", "Travolta","password",true),
		  (3,"manager","Tiny", "Tim","password",true);

insert into Role(RoleId, Role)
    values(1,"ROLE_ADMIN"), (2,"ROLE_USER"), (3,"ROLE_MANAGER");
    
insert into User_Role(UserId,RoleId)
    values(1,1),(2,2),(3,3);
    
insert into Content(ContentId,Title,UserId,Content_Image, Time_Posted, Time_Created, Time_Scheduled, Content, Static,
Published, Public_Access) values 
(1,"Content Title 1", 1, "https://media.vanityfair.com/photos/5dd70131e78810000883f587/master/w_2560%2Cc_limit/baby-yoda-craze.jpg",
'2011-07-01 11:40:12', '2011-06-20 13:40:12', '2011-07-01 11:40:12',"This is the content",false, true, true),
(2,"Content Title 2", 2, "https://media.vanityfair.com/photos/5dd70131e78810000883f587/master/w_2560%2Cc_limit/baby-yoda-craze.jpg",
'2011-07-01 11:40:12', '2011-06-20 13:40:12', '2011-07-01 11:40:12',"This is the content 2",false, true, true);     

insert into Tag(TagId, Tag) values (1, "Trending"), (2,"Technology"), (3, "Popular");

insert into Content_Tag values(1,1), (2,2), (2,3);
    
UPDATE User SET Password = '$2a$10$vBBHQAWO4waCtJQtOKNaCOb5SwksxopDM3q90TRhpHIqvE469DX26' WHERE UserId = 1;
UPDATE User SET Password = '$2a$10$vBBHQAWO4waCtJQtOKNaCOb5SwksxopDM3q90TRhpHIqvE469DX26' WHERE UserId = 2;
UPDATE User SET Password = '$2a$10$vBBHQAWO4waCtJQtOKNaCOb5SwksxopDM3q90TRhpHIqvE469DX26' WHERE UserId = 3;


