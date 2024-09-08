FROM node:21

# Set the working directory in the Docker container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the /app directory in the Docker container
COPY package*.json ./

# Install all dependencies, including 'devDependencies'
# Useful for running tests, linters, etc. in CI environments
RUN npm install

# Bundle app source inside the Docker container
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the Docker container launches
CMD [ "npm", "start" ]
