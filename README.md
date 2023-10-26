# OLCi-Node-Typescript-Boilerplate

Boilerplate for OlCi Node.js application written in TypeScript

## Purpose

`Our main purpose with this boilerplate is to have OLCi base application with node js and typescript ready.
This is a template repository and it needs to be added whenever a new repo will be created for service work.`

## Common Features

- Integrated eslint, prettier
- Jest configured for unit testing
- Simple and Standard scaffolding
- Based on Typescript Syntax
- Easily Add new feature
- Integrated winston Logger
- Unit & Integration Test Cases
- Pre-commit checks using husky

## Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.github/**                      | Github workflow files will be placed here |
| **.github/workflows/**            | Workflow files for push and pull requests |
| **.husky/**                       | Pre-commit hooks for project |
| **dest/**                         | Compiled source files will be placed here |
| **iac-scripts/**                  | Infrastructure files |
| **src/**                          | Source files |
| **src/builder**                   | Request and Response builder files |
| **src/errors**                    | Error Handling Framework |
| **src/model**                     | Request and Response types |
| **src/proxy**                     | Proxy files |
| **src/service**                   | Service files |
| **src/util**                      | Common Utility files |
| **src/validator**                 | Validator files |
| **handler.ts/**                   | Microservice entry point |
| **tests/**                        | Test cases will be placed here |
| **tests/integration-tests/**      | API E2E Integration Test cases will be placed here|
| **tests/performance-tests/**      | API Performance Test cases will be placed here|
| **tests/unit-tests/**             | Unit Test cases will be placed here  |
| **handler.test.ts/**              | Handler test class |
| **wiki/**                         | Project documentation and insructions file here |