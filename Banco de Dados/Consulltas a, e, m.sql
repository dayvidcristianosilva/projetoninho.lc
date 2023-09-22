use turma_manha;

select*from aluno where idade in (20, 21, 23, 25) ;
select bairro from endereco where cidade = 'Recife';
select*from endereco where cidade in ('Recife', 'Olinda', 'Paulista');

update aluno set turno = 'Manhã' where matricula > 5 and turno is null;

select*from aluno where idade >=20 and idade <=25;
select*from aluno where idade between 20 and 25;

select idade from aluno where nome like 'C%';

select*from aluno;