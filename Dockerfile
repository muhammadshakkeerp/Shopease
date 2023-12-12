# Use the Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files to the working directory
COPY . .

# Build your application (replace with your build command)
RUN npm run build

# Expose the port your app is running on (if needed)
EXPOSE 5173

# Start the app in development mode
CMD ["npm", "run", "dev"]
