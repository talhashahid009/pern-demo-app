create database demodb;

create table todo(
    todo_id serial primary key,
    description varchar(255)
)