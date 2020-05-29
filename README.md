# Instalación
## Requisitos
* Angular CLI
* Node y NPM
* MySQL / MariaDB
## Pasos
1. Clonar o descargar este repositorio. En la terminal navegar al directorio y ejecutar ``npm install`` para instalar las dependencias de Angular y cosas del lado del cliente
2. Ahora navegar a la carpeta **api** y ejecutar lo mismo: ``npm install``
3. Crear base de datos y usuario en MySQL
4. Importar **esquema.sql** a la base de datos recién creada
5. Configurar credenciales de la base de datos en **conexion.js** (está dentro de **api**)
6. En la carpeta raíz ejecutar ``ng serve``
7. Abrir otra terminal, y dentro de **api** ejecutar ``node index.js`` 
8. Navegar a localhost:4200

__sordid details following...__

# Créditos
https://icons8.com

# ECommerceAngularNode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
