use dayvidcristiano;

drop table aluno;
drop table curso;

create table curso(
codigo integer primary key,
curso varchar(30) not null,
sigla varchar(3) not null unique,
ch integer not null,
area varchar(10) not null
);

create table aluno(
codigo integer primary key,
nome varchar(30) not null,
idade integer not null,
cidade varchar(40) not null,
cod_curso integer,
foreign key (cod_curso) references curso(codigo)
);

insert into curso values
(1, 'Informática para Internet', 'IPI', 400, 'Exatas'),
(2, 'Odontologia', 'ODO', '500', 'Saúde');

insert into aluno values
(1, 'Diogo', 20, 'Olinda', 2),
(2, 'Dayvid', 20, 'Jaboatão', 1);

select*from aluno;

