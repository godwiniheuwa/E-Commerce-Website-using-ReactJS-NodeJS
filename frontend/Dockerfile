# Frontend Dockerfile
FROM node:18

WORKDIR /app
COPY package.json package-lock.json ./  # Consider copying package-lock.json if it exists for reproducible installs
RUN npm install
COPY . .  # Copy all other files

RUN npm run build  # Ensure this works and `build` script exists in package.json
RUN npm install -g serve  # This installs the serve package globally
EXPOSE 3000
CMD ["serve", "-s", "build"]  # Use `serve` to serve your built application
