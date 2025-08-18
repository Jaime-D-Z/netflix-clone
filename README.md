
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


### Instalación y Ejecución

Para instalar las dependencias y ejecutar el proyecto en modo desarrollo:
```
npm install
npm run dev
```
La aplicación se abrirá en: http://localhost:5173


### Capturas de Pantalla
El flujo de pantallas de la aplicación es el siguiente:

### Login
-----
![Login](/public/cap_login.png)
-----
### Register
-----
![Registro](/public/cap_register.png)
-----
### Home
-----
![Home](/public/cap_home.png)
-----

### Configuración de Variables de Entorno
Este proyecto requiere algunas claves API y configuraciones para funcionar correctamente (como las de Firebase y TMDB). Para mantener segura esta información sensible y facilitar la configuración, se utilizan variables de entorno.

Crea tu archivo .env: En la raíz del proyecto, encontrarás un archivo llamado .env.example. Este es una plantilla que lista todas las variables necesarias. Copia este archivo y renómbralo a .env.
```
cp .env.example .env
```
Rellena tus credenciales: Abre el nuevo archivo .env y reemplaza los valores de your_..._here con tus claves API y credenciales reales. Por ejemplo:
```
VITE_TMDB_TOKEN=tu_token_real_de_tmdb
VITE_REACT_APP_FIREBASE_API_KEY=tu_api_key_real_de_firebase
# ... y el resto de tus variables de Firebase
```
Importante: Asegúrate de que no haya espacios alrededor del signo = en el archivo .env.

Seguridad: El archivo .env está configurado para ser ignorado por Git (gracias al .gitignore) para asegurar que tus claves secretas no sean subidas a repositorios públicos como GitHub. El archivo .env.example sí se sube, ya que solo es una guía.

### Licencia
Este proyecto se distribuye con fines educativos. Si lo utilizas, ajusta la licencia según tus necesidades.
