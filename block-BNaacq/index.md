writeCode

Design schemas for a blog application which will have

- articles
- comments(on each article) -> may be multiple
- user

Each article can have fields :-

- title
- description
- tags
- likes
- author -> ID of user
- comments
- timestamps()

Each comment can have fields:-

- content
- author -> ID of user
- article ->
- timestamps()

Each user can have fields:-

- name
- email
- age

- Design all the schemas and their associated models and export it.
- design in such a way that, they should be associated.

For example:-

- each article and comment should have author
- each comment should belong to one of the article
- add appropriate validations in all schemas
