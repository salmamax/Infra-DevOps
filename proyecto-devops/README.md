# 🐕 Dogs-Infra - Proyecto DevOps

![Docker](https://img.shields.io/badge/Docker-3.8-blue?logo=docker)
![Angular](https://img.shields.io/badge/Angular-17-red?logo=angular)
![Symfony](https://img.shields.io/badge/Symfony-7-purple?logo=symfony)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql)

Infraestructura completa para aplicación de gestión de perros con:

- **Frontend**: Angular 17
- **Backend**: Symfony 7 (PHP 8.3)
- **Base de datos**: MySQL 8.0
- **Proxy inverso**: Nginx 1.25
- **Orquestación**: Docker Compose

## 🚀 Instalación Rápida

```bash
git clone https://github.com/tu-usuario/Dogs-Infra.git
cd Dogs-Infra
docker-compose -f docker-compose.prod.yml up -d --build
```

Accede a la aplicación:  
🌐 [http://localhost](http://localhost)

## 🏗 Estructura del Proyecto

```
Dogs-Infra/
├── frontend/          # Aplicación Angular
├── backend/           # API Symfony
├── docker/
│   ├── nginx/         # Configuración Nginx
│   ├── php/           # Dockerfile PHP
│   └── mysql/         # Scripts MySQL
├── docker-compose.yml # Entorno desarrollo
└── docker-compose.prod.yml # Entorno producción
```

## 🛠 Comandos Útiles

```
# Reconstruir contenedores
docker-compose -f docker-compose.prod.yml up -d --build

# Ver logs de Symfony
docker-compose logs -f backend

# Acceder a MySQL
docker exec -it mysql_prod mysql -u symfony -psymfony symfony

# Generar nuevo componente Angular
docker-compose exec frontend ng generate component nombre
```

## 🌐 Puertos

| Servicio  | Puerto |
|-----------|--------|
| Angular   | 4200   |
| Symfony   | 9000   |
| MySQL     | 3306   |
| Nginx     | 80     |

## 📦 Dependencias Principales

- **Frontend**: Angular 17, RxJS, Angular CLI
- **Backend**: Symfony 7, Doctrine, API Platform
- **DevOps**: Docker, Docker Compose, Nginx

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea tu rama (`git checkout -b feature/foo-bar`)
3. Haz commit de tus cambios (`git commit -am 'Add some fooBar'`)
4. Haz push a la rama (`git push origin feature/foo-bar`)
5. Abre un Pull Request

### 🧑‍💻 Autor

Este proyecto fue creado paso a paso por [salmamax](https://github.com/salmamax) como parte de un ejercicio práctico de aprendizaje de DevOps.

---
