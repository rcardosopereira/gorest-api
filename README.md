[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# NOS Automation Testing  
This repository contains a technical automation challenge involving JavaScript language, Cypress framework and Ajv JSON schema validator.
Site: https://gorest.co.in/ 

### Suggested IDEs by [Cypress documentation](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins):
- VsCode (Best option to work with Cypress and it's free). 
- Intellij (Alternative solution, also free)

### Git [Download here](https://git-scm.com/downloads):
-It is a distributed version control system mainly used in software development, but can be used to record the edit history of any type of file.

## Dependencies
### Official cypress framework:
- Cypress is a real game changer in e2e testing. It runs inside 2 containers on our stack. The setup was almost easy and its adoption by the team was immediate. Make sure you have Node.js installed and that you have already run "npm init" or have a "node_modules" folder or "package.json" file in the root of your project to ensure cypress is installed in the correct directory.
- [Cypress website](https://www.cypress.io/).
- The API documentation is available [here](https://docs.cypress.io/api/api/table-of-contents.html).
> ```bash
>  npm install cypress --save-dev
> ```

### Ajv JSON schema validator:
- Ajv is used by a large number of JavaScript applications and libraries in all JavaScript environments - Node.js, browser, Electron apps, WeChat mini-apps etc.
It allows implementing complex data validation logic via declarative schemas for your JSON data, without writing code..
- [Ajv JSON](https://ajv.js.org/).
> ```bash
>  npm install ajv
> ```

---

### Git Clone the repository
After that, you can clone this repository in your local machine.
> ```bash
>  git clone  git@github.com:rcardosopereira/gorest-api.git
> ```

Check your current version. The version of this project is:
-NPM Version 10.2.3
-NODE Version v21.2.0

---

## Running the tests
### Cypress run
Cypress give us the ability to run all tests without a test runner interface.
To do this, just run the following command:
> ```bash
> npm run test
> ```

### Cypress test runner interface:
To open the Cypress and run the tests separately, run:
> ```bash
> npm run cy:open 
> ```

or

> ```bash
> npx cypress open
> ```

This will start the Cypress Test Runner with its interactive GUI where you can select which spec
click on E2E Testing

If you want to run the tests in another one, just add browser and the name of the browser in the command. More info in [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).

### Project Structure
1. e2e/api.cy.js: here we have all tests.
2. e2e/validacao-schema.cy.js: here we have the test of schema api.
3. fixtures/documentacao.txt: here we have the answers to the questions.

### All workflows (GitHub Actions: continuos integration)
We use GitHub actions to build, test and deploy our app. You can check it in [here](https://github.com/rcardosopereira/gorest-api/actions).         

### Support
Please, if you have some questions, feel free to write me. My e-mail is rcardosopereira@gmail.com
Thank you very much ;-)
