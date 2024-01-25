# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the .next directory
COPY .next ./.next

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Command to start your Next.js app
CMD ["npm", "run", "start"]
