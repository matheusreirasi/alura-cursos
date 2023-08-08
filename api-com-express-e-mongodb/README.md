# Project Preview

## First steps
After download the project run `npm install` to install all dependencies. 
You will have to set a string connection on `src/config/db.js` by creating a cluster on MongoDB atlas.
When finishing installing and configuring, run command `npm run dev` to start the project using nodemon. The server is running on https://localhost:8080.

## Project Overview
* This is a CRUD bookstore made with NodeJs and MongoDB Atlas as database.
* The connection between the application and database is with an API that I build.
* Use of dotenv.
* Use of try/catch and async/await.
* How to handle errors messages to standardize all project files.

## Files with comments
* src/models/validadorGlobal.js
* src/controllers/livrosController.js

## Cool links
[Alura repo 1](https://github.com/alura-cursos/2404-api-node-express/tree/aula_01)

[Alura repo 2](https://github.com/alura-cursos/api-node-express-2/tree/aula-1)

[Mongo Documentation](https://www.mongodb.com/docs/manual/reference/operator/query/)

[Data modeling for MongoDB](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)

[Using dotenv](https://www.alura.com.br/artigos/dotenv-gerenciando-variaveis-ambiente?_gl=1*12q1bm7*_ga*NTI1NTYzMTYxLjE2ODU3NDE5ODM.*_ga_59FP0KYKSM*MTY5MTA3Mjg2MS44NS4xLjE2OTEwNzMyNjEuMC4wLjA.*_fplc*NiUyRm14eXo2eU9RYklWYmpRTmt5MzY4bFRJcWFHdUo3RUlidnFwODZ6V0FRYzBCOThiVWY4STNvMGtQQjJQazFMTjFRbE9XWFpHNiUyQmFjeWd5bWslMkZzT0tpczJLa1hxajBwUGVrQWh6RXIwYlp1c2dnaHRmVmRoYmY4NnY3Tm9nJTNEJTNE#:~:text=O%20que%20%C3%A9%20o%20Dotenv,-Antes%20de%20entendermos&text=J%C3%A1%20que%20as%20vari%C3%A1veis%20de,js.)

[Errors for developers](https://www.alura.com.br/artigos/lidando-com-erros-node-js?_gl=1*1js26oj*_ga*NTI1NTYzMTYxLjE2ODU3NDE5ODM.*_ga_59FP0KYKSM*MTY5MTE3NTk4OS45My4xLjE2OTExNzY1NDQuMC4wLjA.*_fplc*VWpGdnU5WjhrWW4xUWZVYVdpSmZQWTQ0RlJtJTJCR254VFNQenVnT3JMYmZjaHBTM3NrVzRuY2RNcnNlJTJGazQ5Rmt1bXc2eVp4S0pMekRFOGN4VTZqSDVHRUw2T01TUDRDN3VIVVB6JTJGYWplZ1YzdmtZVnBiRmpyJTJCOXk1VG1mbmclM0QlM0Q.)
