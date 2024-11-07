# Backend Dockerfile
FROM node:18

WORKDIR /app

# Copy package.json from the root directory to /app directory in the container
COPY package.json ./ 

# Change working directory to backend
WORKDIR /app/backend

# Install dependencies
RUN npm install

# Copy all files from backend directory
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
