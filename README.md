# OLCi Clean Architecture 

Typescript + Clean Architecture Boilerplate for OlCi application

## Purpose

`Our main purpose with this boilerplate is to have OLCi base application with node js and typescript ready.`

The projects try to follow the rules of [Uncle Bob's Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

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

| Name                                  | Description |
| ---------------------------------     | ----------- |
| **.github/**                          | Github workflow files will be placed here |
| **.github/workflows/**                | Workflow files for push and pull requests |
| **.husky/**                           | Pre-commit hooks for project |
| **dest/**                             | Compiled source files will be placed here |
| **iac-scripts/**                      | Infrastructure files |
| **src/**                              | Source files |
| **src/adapters/**                     | Concrete adapters |
| **src/adapters/controllers**          | Concrete controllers - handles input request |
| **src/adapters/gateways**             | Concrete gateways - handles calls to external services |
| **src/adapters/presenters**           | Concrete presenters - Presents the response fo the service |
| **src/adapters/handler.ts**           | Microservice entry point |
| **src/domain/**                       | Domain Layer |
| **src/domain/entities**               | All models |
| **src/frameworks/**                   | Common Framework|
| **src/frameworks/errors**             | Error Handling Framework |
| **src/frameworks/util**               | Common Utility files |
| **src/use-cases/**                    | Concrete use cases |
| **src/use-cases/interfaces**          | Interfaces for everything the use cases need |
| **src/use-cases/serviceUseCase.ts**   | Service use cases  |
| **tests/**                            | Test cases will be placed here |
| **tests/integration-tests/**          | API E2E Integration Test cases will be placed here|
| **tests/performance-tests/**          | API Performance Test cases will be placed here|
| **tests/unit-tests/**                 | Unit Test cases will be placed here  |
| **handler.test.ts/**                  | Handler test class |
| **wiki/**                             | Project documentation and insructions file here |

## Reference

[Clean Architecture - By Uncle Bob]

## License

© 2023 [British Airways]\
All rights reserved.

[British Airways]: https://www.ba.com
[Clean Architecture - By Uncle Bob]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html