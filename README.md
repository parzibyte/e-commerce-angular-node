# E-Commerce open source
Creado con Node.js, Angular y MySQL
![E-Commerce open source con Node.js y Angular](https://parzibyte.me/blog/wp-content/uploads/2020/06/E-Commerce-en-Angular-y-Node-Vista-principal-de-tienda.png)

# Tutorial
Justo aquí: https://parzibyte.me/blog/2020/06/10/pequeno-e-commerce-angular-node-mysql-tienda-online/

# Instalación
## Requisitos
* Angular CLI
* Node y NPM
* MySQL / MariaDB
## Pasos
1. Clonar o descargar este repositorio. En la terminal navegar al directorio y ejecutar ``npm install`` para instalar las dependencias de Angular y cosas del lado del cliente
2. Ahora navegar a la carpeta **api** y ejecutar lo mismo: ``npm install``
3. Crear base de datos y usuario en MySQL
4. Crear archivo **.env** a partir del ejemplo **.env.example** (dentro de **api**)
5. Importar **esquema.sql** a la base de datos recién creada en el paso 3
6. Configurar credenciales de la base de datos en **.env** (está dentro de **api**)
7. En la carpeta raíz ejecutar ``ng serve``
8. Abrir otra terminal, y dentro de **api** ejecutar ``node index.js`` 
9. Navegar a localhost:4200

__sordid details following...__

# Créditos
La imagen de "Gracias por su compra" fue tomada de https://icons8.com

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
