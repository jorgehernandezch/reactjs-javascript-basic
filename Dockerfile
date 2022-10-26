# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent
RUN yarn add react-scripts --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]