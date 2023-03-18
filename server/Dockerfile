# Sets the base image of the application to the node’s official image.
FROM node:17

# Author
LABEL AUTHOR="Keyur Vadodariya"

# Sets the Working Directory as "/server"
WORKDIR /server

# Installs the project dependencies
COPY package.json /server
RUN yarn install


# Copies the entire source code into "/server"
COPY . /server


# Specifies the port the node app will be running on
EXPOSE 5000

# Runs "node server.ts" after the above step is completed
CMD ["npm", "run", "serve:dev"]