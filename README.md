<h1 align="center">Mf-auth · Autenticación de Usuario</h1>

Microfrontend responsable del inicio de sesión. Renderiza la pantalla de autenticación y gestiona la información del usuario dentro del store global.


## 🚀 Tecnologías Utilizadas

- [React](https://react.dev/)
- [Material UI (MUI)](https://mui.com/material-ui/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/) (Webpack 5)
- [Webpack](https://webpack.js.org/)

## 📁 Estructura del Proyecto

- `src/`
  - `Components`: Componentes reutilizables de la interfaz
  - `assets`: Imágenes, íconos y otros recursos estáticos
  - `utils`: Funciones utilitarias
  - `mockUsers.js`: Mock de datos de usuarios
  - `root.component.js`: Componente raíz del microfrontend
  - `MyBodytech-mf-auth.js`: Archivo de entrada del módulo federado
 
## ⚙️ Instalación 

1. Clona el repositorio si aún no lo has hecho:

   ```bash
   git clone <url-del-repo>
   cd mf-auth
   ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
## ▶️ Modo Desarrollo

Para iniciar el entorno de desarrollo, ejecuta:
  ```bash
     npm run dev
  ```
Esto levantará el microfrontend en:
 ```bash
 [npm run dev](http://localhost:8530)
 ```

## 🧩 Integración

Este microfrontend está diseñado para integrarse dentro de un contenedor mediante Module Federation. Asegúrate de que tu contenedor consuma el módulo correctamente desde la URL expuesta.
