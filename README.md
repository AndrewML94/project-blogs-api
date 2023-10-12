# Projeto Blogs API (Vigésimo segundo projeto desenvolvido)

Neste projeto foi aplicado todos os conhecimentos referentes a ORM e autenticação para montar uma API e um banco de dados para a produção de conteúdo para um blog, além de um banco de dados, seguindo as melhores práticas de desenvolvimento de software. Foi usado como exemplo a API do Blogger. Nela, há um CRUD de postagens com uma camada de autenticação de pessoas usuárias.

## Habilidades desenvolvidas

- Interface de aplicação com o banco de dados;
- Associations 1:1 e N:N;
- Associations N:N e Transactions;
- JWT;
- Além de expandir o conhecimento sobre Node.js e Sequelize.

## O que foi desenvolvido pelo autor

Todo o conteúdo e elementos presentes na pasta "src" foram desenvolvidos exclusivamente por mim, representando minha contribuição integral a este projeto. É importante mencionar que os demais arquivos foram elaborados pela equipe da Trybe como parte do contexto mais amplo do projeto.

## Requisitos do projeto

1. Criar migrations para as tabelas users, categories, blog_posts, posts_categories;
2. Criar o modelo User em src/models/User.js com as propriedades corretas;
3. Sua aplicação deverá ter o endpoint POST /login;
4. Sua aplicação deverá ter o endpoint POST /user;
5. Sua aplicação deverá ter o endpoint GET /user;
6. Sua aplicação deverá ter o endpoint GET /user/:ids;
7. Criar o modelo Category em src/models/Category.js com as propriedades corretas;
8. Sua aplicação deverá ter o endpoint POST /categories;
9. Sua aplicação deverá ter o endpoint GET /categories;
10. Criar o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas;
11. Criar o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas;
12. Sua aplicação deverá ter o endpoint POST /post;
13. Sua aplicação deverá ter o endpoint GET /post;
14. Sua aplicação deverá ter o endpoint GET /post/:id.