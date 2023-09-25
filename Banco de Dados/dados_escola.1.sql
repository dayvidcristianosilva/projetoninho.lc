create schema turma_manha;
use turma_manha;

create table endereco (
    codigo integer auto_increment primary key,
    bairro varchar(40),
    cidade varchar(50)
);
insert into endereco (bairro,cidade) values
     ('Nova Descoberta','Recife'),('UR11','Jaboatão dos Guararapes'),
     ('Rio Doce','Olinda'),('Iputinga','Recife'),
     ('Cavaleiro','Jaboatão dos Guararapes'), ('Jardim São Paulo', 'Recife');

create table curso (
    id integer auto_increment primary key,
    nome varchar(50),
    campus varchar(50),
    instituicao varchar(40),
    unique (nome, campus, instituicao)
);
insert into curso (nome, campus, instituicao) values
    ('Odontologia','Recife','FPS'),
    ('Informática para Internet','Jaboatão dos Guararapes','IFPE'),
    ('Geografia','Recife','UFPE'),
    ('Redes de Computadores','Professor Lucilo Ávila Pessoa','ETE'),
    ('Tecnologia em Sistemas para Internet','Igarassu','IFPE'),
    ('Análise e Desenvolvimento de Sistemas','Ginásio Pernambucano','ETE');

create table aluno(
    matricula integer auto_increment primary key,
    nome varchar(50),
    idade integer,
    turno varchar(30),
    id_curso integer,
    foreign key (id_curso) references curso (id),
    cod_endereco integer,
    foreign key (cod_endereco) references endereco (codigo)
);

insert into curso (nome, campus, instituicao) values
('Informática para Internet', 'Paulista','IFPE');
insert into aluno (nome, idade, id_curso,cod_endereco) values ('Carolina Torres',28,1,6);
insert into aluno (nome, idade, id_curso,cod_endereco)
values ('Dayvid Cristiano',20,2,2),('Lana Gonçalves',24,2,5),('Caio Henrique',18,3,4),
    ('Dhyego Kaderline',18,4,4),('Diogo Vinicius',18,1,1),('Kamila Carvalho',21,5,3);
   
select * from curso;
select * from endereco;
select * from aluno;

select*from endereco where bairro = 'Recife';



