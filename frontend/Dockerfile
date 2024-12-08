# Use the official Node.js 14 image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Build the app
RUN npm run build

# Install the serve package globally to serve the application
RUN npm install -g serve

# Set the command to run the application using serve
CMD serve -s build

# Expose the port that the application will run on
EXPOSE 8901
