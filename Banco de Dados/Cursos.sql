use dayvidcristiano;

-- Criar uma nova tabela;
create table curso(
codigo integer not null PRIMARY KEY,
nome_curso varchar(50)  not null,
sigla varchar(3) not null UNIQUE KEY ,
data_inicio date,
ch integer null
);

-- Selecionar tabela criada;
select*from curso;

-- Apagar a tabela curso;
drop table curso;

INSERT INTO curso VALUES(145,'Segurança do Trabalho', 'TST','2015-12-02',1540); 
INSERT INTO curso VALUES(478,'Redes de Computadores', 'RDC','2020-04-23',2010);
INSERT INTO curso VALUES(963,'Informática para Internet', 'IPI',null,1540);
INSERT INTO curso VALUES(147, 'Análise e Desenvolvimento', 'ADS','2017-09-14',null);
INSERT INTO curso VALUES(256, 'Odontologia', 'ODO','2010-04-20',null);

-- Apagar toda tabela;
delete from curso;

-- Apagar os cursos que tem CH maior que 600;
delete from curso where ch > 2000;

-- Apagar os cursos que foram criados em 02/12/2010;
delete from curso where data_inicio = '2020-10-02';

-- Atualizar a carga horária pra 3000 do curso de ADS;
update curso set ch = 3000 where sigla= 'ADS';

-- Deletar os cursos que tenham mais de 1000h de CH e 
-- tenha código menor que 200; 
delete from curso where ch>1000 and codigo <200;

