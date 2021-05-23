# personal-website

```sh
npm install
```

## Project setup (With Docker)

### Build Docker Image

```sh
docker build -t personal-website-vue .
```

### Run Docker Container

```sh
docker run -it --name personal-website-vue -p 8081:8080 -v ${PWD}/src:/app/src/ personal-website-vue
```

## Project setup (Without Docker)

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Run your unit tests

```sh
npm run test:unit
```

### Lints and fixes files

```sh
npm run lint
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
