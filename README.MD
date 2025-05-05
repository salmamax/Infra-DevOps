# Proyecto DevOps - Infraestructura Angular + Symfony + MySQL + Nginx

##  Objetivo

Montar la infraestructura inicial de un proyecto de desarrollo con:
- Frontend en Angular 17
- Backend en Symfony 7 (PHP 8.3)
- Base de datos MySQL 8.0
- Servidor de proxy inverso con Nginx 1.25

Todo estará **dockerizado** y **orquestado** mediante **Docker Compose**, facilitando el despliegue tanto en entornos de desarrollo como de producción.

---

##  Tecnologías usadas

| Servicio | Tecnología | Versión |
|----------|------------|---------|
| Frontend | Angular (Node.js) | 17 (Node 20) |
| Backend | Symfony (PHP) | 7.0 (PHP 8.3) |
| Base de Datos | MySQL | 8.0 |
| Servidor Proxy | Nginx | 1.25 |
| Contenedores | Docker y Docker Compose | 3.8 |

---

## Estructura de carpetas prevista

```bash
proyecto-devops/
├── frontend/                 # Proyecto Angular
├── backend/                  # Proyecto Symfony
├── docker/                   # Infraestructura
│   ├── nginx/                # Configuración de Nginx
│   ├── php/                  # Dockerfile para PHP/Symfony
│   └── mysql/                #Configuración de volumen MySQL
├── docker-compose.yml        # Orquestación para desarrollo
├── docker-compose.prod.yml   # Orquestación para producción
├── .env.example              # Variables de entorno de ejemplo
├── README.md                 # Documentación del proyecto
└── .gitignore                # Exclusiones de Git (node_modules/, vendor/, etc.)
