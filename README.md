# 🧩 Desenvolvimento de Microsserviços com Java, Node.js, Docker, RabbitMQ e AWS

Bem-vindo ao repositório **glrtech-sales**, onde está sendo desenvolvida uma arquitetura real com múltiplas APIs em diferentes linguagens e bancos, explorando **comunicação síncrona e assíncrona**, containers Docker e deploy na **AWS**.

---

## 🚀 Neste projeto

Estou implementando os fundamentos da **comunicação entre microsserviços**, utilizando diferentes abordagens:

- Comunicação **síncrona** via REST HTTP.
- Comunicação **assíncrona** com filas de mensagens (RabbitMQ).
- Deploy em ambiente real na **AWS**.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

### 🔧 Backend
- **Java 11** + Spring Boot
  - Spring Data JPA
  - Spring Cloud OpenFeign
  - JWT para autenticação
- **Node.js**
  - Express.js
  - Mongoose (MongoDB)
  - Sequelize (PostgreSQL)
  - JWT para autenticação

### 🗃️ Bancos de Dados
- PostgreSQL
- MongoDB

### 📡 Comunicação
- HTTP (Axios / FeignClient)
- RabbitMQ (AMQP)

### 📦 Containers & DevOps
- Docker
- Docker Compose
- AWS Elastic Beanstalk
- Amazon RDS
- Amazon CloudWatch

---

## 🔗 Comunicação entre Serviços

| Tipo        | Ferramenta       | APIs Envolvidas       |
|-------------|------------------|------------------------|
| Síncrona    | HTTP (Axios)     | sales-api → product-api |
| Síncrona    | HTTP (Feign)     | product-api → auth-api  |
| Assíncrona  | RabbitMQ (AMQP)  | sales-api ↔ product-api |

---
