# QA Automation con Cypress 

Proyecto de automatización de pruebas para [https://www.saucedemo.com](https://www.saucedemo.com) utilizando Cypress y Page Object Model.

## Features
- Validación de login con todos los usuarios
- Manejo de fixtures
- Uso de buenas prácticas con Page Object Model
- Test dinámicos (data-driven)

## Archives
-E2E

- FixturesWithPom.cy.js -- Contains login path, using pom and fixtures to upload user data
- viewAllProducts.cy.js -- Check if the list of items was loaded correctly 
- cartPath.cy.js -- Add and delete cart items 


- Support
  - SauceDemobjects
       - AddDeleteCart.js  - commands for cartPath
      - LoginPage.js   --commnas for FixturesWithPom



## Cómo correr los tests
```bash
npm install
npx cypress open
