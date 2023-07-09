Nesse projeto a API foi disponibilizada pela Alura e o objetivo é realizar operações de CRUD utilizando a API disponibilizada por eles. Foi criado um frontend para controlar os itens que já existiam no Django e nessa mesma aplicação onde existe um caminho para o usuário final existe um caminho para o usuário administrador (tudo no mesmo localhost).

Esse projeto segue uma linha semelhante com a lógica que eu quero implementar para o e-commerce tendo um backend com Ruby e o front faz requisições para esse backend.
No ruby eu crio as relações com o banco de dados e as rotas necessárias para realizar as operações de CRUD.
Diferente do realizado no curso da Alura onde as operações de CRUD para manipular o backend foi realizado no mesmo localhost que é exibido ao usuário comum, eu quero fazer em um ambiente completamente separado do painel de administração. Terá um localhost para o backend, um localhost para o usuário final e um localhost para o usuário admin que recebe e envia operações de crud para a aplicação em Ruby.


# First steps
To run this project it's needed to have Docker installed on your machine.
Download both alfood and restaurantes_api files and install dependencies from each project, `npm install` for react on alfood file and `docker compose build` for docker on restaurantes_api.
After that start docker on restaurantes_api running `docker compose up` file that its used as a backend to application and start frontend application running `npm start` to start react app.

Frontend is running on localhost:3000 and backend on localhost:8000.

## About the project
* APIs were made by Alura team using Django and the objective of the course it's handle requests from the backend, sending and receiving data to administrate the restaurant.
* Frontend was build with create-react-app and styled with Mui.
* It could be inserted a login to admin page but the purpose here it's to handle requests and how to use different technologies in one project.
* This website it's a prototype to a more complex project that will run using RoR on backend and nextJs on frontend.

## Improvements
* Finish CRUD of dishes.
* Improve the design using Mui and UX.
* Change the project pattern.
* Insert some accessibility options.

* Files and components imported were made using absolute imports that I configured at tsconfig and the root path is src.
* For some reason normalize from create-react-app is not working. I installed normalize.css to reset CSS.