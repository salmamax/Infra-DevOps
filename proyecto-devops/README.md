# 🐕 Dogs-Infra - Proyecto DevOps con Angular, Symfony, MySQL y Nginx

![Docker](https://img.shields.io/badge/Docker-Containers-blue)
![Symfony](https://img.shields.io/badge/Symfony-API-purple)
![Angular](https://img.shields.io/badge/Angular-Frontend-red)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)

Este proyecto proporciona una infraestructura completa para una aplicación web moderna con:
- Frontend en Angular 17
- Backend API en Symfony 7
- Base de datos MySQL 8.0
- Servidor Nginx como reverse proxy

## 🚀 Requisitos previos

- Docker 20.10+
- Docker Compose 2.0+
- Node.js 20+ (solo para desarrollo frontend)
- Git

## 📦 Estructura del proyecto

```
proyecto-devops/
├── frontend/          # Aplicación Angular
├── backend/           # API Symfony
├── docker/
│   ├── nginx/         # Configuración de Nginx
│   ├── php/           # Dockerfile para PHP/Symfony
│   └── mysql/         # Scripts de inicialización de MySQL
├── docker-compose.yml # Configuración para desarrollo
└── docker-compose.prod.yml # Configuración para producción
```

## 🛠️ Configuración rápida

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/Dogs-Infra.git
cd Dogs-Infra/proyecto-devops
```

2. Copia el archivo de entorno de ejemplo:
```bash
cp .env.example .env
```

3. Levanta los servicios:
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## 🌐 Acceso a los servicios

| Servicio | URL | Puerto |
|----------|-----|--------|
| Frontend Angular | http://localhost:8080 | 8080 |
| API Symfony | http://localhost:8080/api | 8080 |
| MySQL | mysql:3306 | 3306 (solo interno) |

## 🔧 Comandos útiles

**Reconstruir todo:**
```bash
docker-compose -f docker-compose.prod.yml down -v
docker-compose -f docker-compose.prod.yml up --build -d
```

**Ver logs:**
```bash
docker-compose logs -f
```

**Acceder a la base de datos:**
```bash
docker exec -it mysql_prod mysql -usymfony -ppassword app_db
```

**Ejecutar comandos en Symfony:**
```bash
docker exec symfony_prod php bin/console [comando]
```

## 🛑 Detener los servicios

```bash
docker-compose -f docker-compose.prod.yml down
```

## 🔍 Endpoints de la API

- `GET /api/dogs` - Listar todos los perros
- `POST /api/dogs` - Crear nuevo perro
- `GET /api/dogs/{id}` - Obtener un perro específico

Ejemplo:
```bash
curl -X POST http://localhost:8080/api/dogs \
  -H "Content-Type: application/json" \
  -d '{"name":"Rex","breed":"Labrador"}'
```

## ⚙️ Variables de entorno

Edita el archivo `.env` para configurar:

```ini
# Symfony
APP_ENV=prod
APP_SECRET=ChangeThisSecret

# MySQL
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=app_db
MYSQL_USER=symfony
MYSQL_PASSWORD=password
```

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea tu rama (`git checkout -b feature/fooBar`)
3. Haz commit de tus cambios (`git commit -am 'Add some fooBar'`)
4. Haz push a la rama (`git push origin feature/fooBar`)
5. Crea un nuevo Pull Request

### 🧑‍💻 Autor

Este proyecto fue creado paso a paso por [salmamax](https://github.com/salmamax) como parte de un ejercicio práctico de aprendizaje de DevOps.

---
