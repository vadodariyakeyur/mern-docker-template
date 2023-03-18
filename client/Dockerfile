# Sets the base image of the application to the node’s official image.
FROM node:17

# Author
LABEL AUTHOR="Keyur Vadodariya"

# Sets the Working Directory as "/client"
WORKDIR /client

# Installs the project dependencies
COPY package.json /client
RUN yarn install


# Copies the entire source code into "/client"
COPY . /client


# Specifies the port the node app will be running on
EXPOSE 3000

# Runs React after the above step is completed
CMD ["npm", "run", "dev"]