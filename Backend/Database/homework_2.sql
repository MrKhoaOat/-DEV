delete from employees where id = 5;

alter table employees add column address varchar(255);

select count(*) from employees;

select firstname from employees where age < 20;

select firstname, age from employees;

update employees set firstname = "Neil" where firstname = "Noah";