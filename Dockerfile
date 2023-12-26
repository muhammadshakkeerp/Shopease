# Use the Node.js image as the base image
FROM node:alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files to the working directory
COPY . .

# Install Vite globally or run commands directly using npx
RUN npm install -g vite

# Build your application (replace with your build command)
RUN npm run build

# Use a minimal production image
FROM node:alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --only=production

# Expose the port your app is running on (if needed)
EXPOSE 5173

# Start the app in development mode
CMD ["npm", "run", "dev"]
