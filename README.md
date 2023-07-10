
<h1 align="center"> cinemate-app </h1>

<p align="center"> 
<a href="#"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
<a href="#"><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/></a>
</p>

## Introduction

<p>
    The goal of this project is to build an app that display information about movies, it consumes the <a href="https://github.com/macedo-erick/cinemate-api">cinemate</a> api.
</p>

## Installation

<p>
    To run this project is required to have <a href="https://github.com/macedo-erick/cinemate-api">cinemate</a> api running.
</p>

###

Clone the project

```
  git clone https://github.com/macedo-erick/cinemate-app.git
```

Go to the project directory

```
  cd cinemate-app
```

Install dependencies

```
  npm install

 # or

  yarn install
```

Edit base-service port to match the one you configured in cinemate-api

```
  baseURL: `http://localhost:{API_PORT}/api/v1/${resource}`,
```

Start the server

```
 npm start

# or

 yarn start
```

Navigate to the app

```
 http://localhost:3000
```

## Authors

- [@macedo-erick](https://www.github.com/macedo-erick)

