
-----

## Clon de Netflix con ReactJS

Este es un proyecto que replica la interfaz y algunas funcionalidades clave de **Netflix**. Fue desarrollado con **ReactJS** usando **Vite** como entorno de desarrollo. La aplicación demuestra cómo construir una interfaz de usuario moderna y responsiva, consumir datos de una API externa (TMDB) y gestionar la autenticación de usuarios con Firebase.

### Características Principales

  * **Diseño similar a Netflix:** Navegación, secciones de películas con desplazamiento horizontal y un banner principal que muestra películas destacadas.
  * **Reproducción de tráileres:** Al hacer clic en una película, puedes ver su tráiler o un video relacionado.
  * **Autenticación de usuarios:** Permite a los usuarios registrarse y acceder a la plataforma.
  * **Diseño adaptable (*Responsive*):** La aplicación funciona y se ve bien en dispositivos de escritorio, tabletas y teléfonos móviles.

### Tecnologías Utilizadas

  * **ReactJS:** Para la construcción de la interfaz de usuario.
  * **Vite:** Herramienta de construcción y *bundler* rápido para proyectos de frontend.
  * **Firebase:** Como *backend* para la autenticación de usuarios y la base de datos de Firestore.
  * **API de The Movie Database (TMDB):** Para obtener toda la información sobre películas (títulos, imágenes, tráileres, etc.). La clave de la API se puede obtener registrándose en [https://www.themoviedb.org/api-for-business](https://www.themoviedb.org/api-for-business).

### Estructura del Proyecto

Esta es la organización de carpetas y archivos del proyecto para una navegación y mantenimiento sencillos:

```
netflix-clone/
├── node_modules/
├── public/
│   └── ... (archivos estáticos)
├── src/
│   ├── assets/           // Archivos de recursos como imágenes o iconos
│   ├── components/       // Componentes reutilizables de la interfaz
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── TitleCards/
│   ├── pages/            // Vistas principales de la aplicación
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── firebase.js       // Archivo de configuración de Firebase
│   ├── App.jsx           // Componente principal de la aplicación
│   ├── index.css
│   └── main.jsx
├── .env                  // Variables de entorno
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
