# Frontend Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy only necessary files for dependencies
COPY package.json yarn.lock . 

# Install dependencies with Yarn
RUN yarn install

# Copy only essential files and folders
COPY public ./public
COPY src ./src
COPY .env .  # If you have any environment variables for frontend

# Build the React app using Yarn
RUN yarn build

# Install serve globally to serve the production build
RUN yarn global add serve

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the application with serve
CMD ["serve", "-s", "build"]
