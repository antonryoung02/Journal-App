# Use an official Node.js runtime as a parent image
FROM node:16

# Set work directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy project
COPY . /app

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]