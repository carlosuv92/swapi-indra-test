<!-- titulo: SWAPI API Serverless/AWS -->

# SWAPI API Serverless/AWS

## Table of Contents

- [Introduction](#introduction)
- [Development](#development)
- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

This project is a serverless implementation of the [SWAPI API](https://swapi.dev/) using AWS Lambda and API Gateway.

The project is based on the [SWAPI API](https://swapi.dev/) specification, which is a RESTful API for Star Wars data.

## Development

This project was developed using the following tools:

- [Node.js](https://nodejs.org/en/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS CLI](https://aws.amazon.com/cli/)

## Description

This project is a serverless implementation of the [SWAPI API](https://swapi.dev/) using AWS Lambda and API Gateway.

The project is based on the [SWAPI API](https://swapi.dev/) specification, which is a RESTful API for Star Wars data.

## Requirements

- Node.js 20.x
- Serverless Framework
- AWS CLI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/felipeurcia/reto-indra.git
```

2. Install the dependencies:

```bash
npm install
```

3. Configure the AWS credentials:

```bash
aws configure
```

4. Deploy the project:

```bash
serverless deploy
```

5. Test the API:

```bash
serverless invoke --function getPlanets --path ./test/mocks/planetMock.json
```

## Usage

### Create a new planet

To create a new planet, you can use the following instructions:

  - Method: POST
  - URL: /planets
  - Headers:
    - Content-Type: application/json
  - Body:
    ```json
    {
      "id": "1",
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [],
      "films": [],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/planets/1/"
    }
    ```

### Get a planet

To get a planet, you can use the following instructions:

  - Method: GET
  - URL: /planets/{id}
  - Headers:
    - Content-Type: application/json
  - Body:
    ```json
    {
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [],
      "films": [],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/planets/1/"
    }
    ```

### Get a person

To get a person, you can use the following instructions:

  - Method: GET
  - URL: /people/{id}
  - Headers:
    - Content-Type: application/json
  - Body:
    ```json
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "Tatooine",
      "films": [],
      "species": [],
      "vehicles": [],
      "starships": [],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/people/1/"
    }
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.