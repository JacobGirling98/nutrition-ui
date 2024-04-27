# Stage 1: Build the React application (development dependencies)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if you use it)
COPY package*.json ./

# Install production dependencies only
RUN node --dns-result-order=ipv4first $(which npm) install --omit=dev

# Copy the rest of the application files
COPY . .

# Build the React application
RUN node --dns-result-order=ipv4first $(which npm) run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy the built application from the previous stage
COPY --from=builder /app/build .

# Expose port 80
EXPOSE 3030

# Configure Nginx default server block (adjust as needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
