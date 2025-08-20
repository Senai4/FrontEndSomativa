# FrontEndSomativa

A RH Connect está desenvolvendo um portal web moderno para gestão de vagas e currículos, utilizando Angular 16+ para o front-end e 
JSON Server para simular o back-end durante os testes. O sistema contará com dois perfis de acesso: o candidato, que poderá criar uma conta, 
fazer login, preencher seu perfil, enviar currículo em PDF, pesquisar vagas com filtros (por cargo, localidade e tipo de contrato) e acompanhar
suas candidaturas; e o administrador, que terá acesso a um painel exclusivo para cadastrar, editar e excluir vagas, além de visualizar os 
currículos recebidos e gerenciar informações dos candidatos.
  A plataforma incluirá autenticação segura, controle de permissões, persistência de sessão no LocalStorage, layout responsivo adaptado para 
desktop e mobile, e seguirá a identidade visual da marca (tons de azul-escuro, cinza-claro e branco). O desenvolvimento será dividido em etapas,
começando pela prototipagem completa no Figma, seguida da implementação técnica, integração das funcionalidades e testes finais, com prazo estimado 
de 2 semanas para entrega do protótipo funcional.
    
 Documentação de Requisitos - Plataforma RH

Requisitos Funcionais
A aplicação terá as seguintes funcionalidades, divididas por tipo de usuário:

Acesso Público (Sem Login):

-Qualquer pessoa poderá visualizar uma lista de vagas disponíveis.

-Acesso do Candidato (Usuário Comum):

-Terá uma área para se cadastrar e fazer login.

-Após o login, poderá enviar e gerenciar seu currículo.

Acesso do Administrador (Admin):

-Terá uma área de login específica.

-Com acesso especial, poderá gerenciar completamente as vagas (criar, editar e apagar).

-Poderá visualizar e revisar todos os currículos enviados pelos candidatos.

Tecnologias e Metodologia
Para este projeto, utilizaremos as seguintes ferramentas:

-Angular 16+: Como o framework principal para construir a interface de usuário.

-SCSS Customizado: Para criar um visual moderno e garantir que o design seja responsivo, funcionando bem em qualquer dispositivo.

-json-server: Para simular o servidor e o banco de dados, permitindo que as funcionalidades de autenticação e CRUD
 (criação, leitura, atualização e exclusão) sejam testadas.

-Guards de Rota: Para implementar a segurança, garantindo que cada usuário só acesse as páginas e funções para as quais tem permissão.

Cronograma Simplificado
Nosso plano é completar o protótipo em duas semanas, seguindo estas etapas principais:

Semana 1:

Planejar, criar os diagramas e protótipos visuais.

Configurar o projeto e a estrutura inicial.

Desenvolver o sistema de login e registro.

Semana 2:

Implementar as funcionalidades específicas de cada perfil (candidato e admin).

Trabalhar no design responsivo.

Finalizar os testes e preparar o projeto para a apresentação.

