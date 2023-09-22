use dayvidcristiano;

create table aluno(
matricula integer not null PRIMARY KEY,
nome varchar(50) not null,
nome_social varchar(50) null,
nome_pai varchar(50),
nome_mae varchar(50),
casado boolean null
);

create table professor(
matricula integer not null PRIMARY KEY,
nome varchar(50) not null,
formacao varchar(2) null,
data_inicio date,
ativo boolean,
siape integer not null
);

drop table professor;

alter table professor add sexo varchar(15) not null;
alter table professor  drop SIAPE;

INSERT INTO professor VALUES(2003, 'Maria Carolina Torres', 'CC', '1987-10-01', true, 'Feminino');
INSERT INTO professor VALUES(1985, 'Dayvid Cristiano Viana da Silva', 'AD', '2023-01-20', true,'Masculino');
INSERT INTO professor VALUES(1555, 'Gustavo', 'RA', '2004-04-19', false, 'Masculino');

delete from professor where matricula = 2003;
update professor set ativo=false where matricula= 155;
select * from professor;

