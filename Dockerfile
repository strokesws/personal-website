FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN npm ci
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 8080

# serve app for development
CMD ["npm", "run", "serve" ]
