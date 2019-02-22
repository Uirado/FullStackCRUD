# FullStackCRUD

Projeto full stack experimental para implementar um CRUD simples via API REST.

- Backend: Java Spring Boot + MySQL
    - Mapeamento relacional: JPA
- Frontend: Angular 7
    - Biblioteca de estilo: Angular Material

Entidade: Pessoa
- Nome
- Telefone
- CPF
- Escolaridade

Requisitos para o front end:
- Listar todos do banco (tabela master detail)
- Tela de adicionar um registro
- Tela de editar um registro
- Botão de apagar registro na tabela que lista todos
- Utilizar máscaras nos campos de Telefone e CPF

## Para rodar o projeto:

- `git checkout https://github.com/Uirado/FullStackCRUD.git`

- Importar projeto `/backend` pra uma IDE Java (Foi utilizado o Intellij IDEA) e esperar o download das dependências.
- Executar aplicação backend.
    - O backend deve rodar localmente no endereço `http://localhost:8080`

- Navegar até a pasta `/frontend` e executar `npm install`
- Executar `npm run start` (*não usar `ng serve`)
    - Acessar aplicação no endereço `http://localhost:4200`


### Obs: 

Foi utilizado um banco de dados MySQL de um provedor gratuito para testes, que não dá garantia de disponibilidade. O provedor não garante bom desempenho e pode deixar a aplicação lenta, mas as operações são realizadas normalmente.

Para utilizar outro banco MySQL, é preciso alterar as credenciais no arquivo `/backend/src/main/resources/application.properties`

