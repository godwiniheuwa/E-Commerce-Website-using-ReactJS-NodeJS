# Backend Dockerfile
FROM node:18

WORKDIR /app

# Copy the package.json from the root directory
COPY ../package.json ./backend/package.json

WORKDIR /app/backend

RUN npm install

# Copy everything from the backend folder
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
