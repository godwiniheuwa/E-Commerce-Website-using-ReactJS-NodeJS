# Frontend Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock . 

# Install dependencies with Yarn
RUN yarn install

# Copy the rest of the frontend files
COPY . .  # Copy all other files

# Build the React app using Yarn
RUN yarn build

# Install serve globally to serve the production build
RUN yarn global add serve

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the application with serve
CMD ["serve", "-s", "build"]
