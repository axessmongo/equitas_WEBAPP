# Use a specific version of Node.js as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 4000

# Install nodemon globally
RUN npm install -g nodemon

# Command to run the application using nodemon
CMD ["npx", "nodemon", "npm", "start"]
