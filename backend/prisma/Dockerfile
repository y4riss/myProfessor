# Use an official Prisma image as a parent image
FROM node:alpine

# Set the working directory to /app/prisma
WORKDIR /app/prisma

# Copy the rest of the Prisma configuration and migration files
COPY . .

# Make port 5555 available to the world outside this container
EXPOSE 5555

RUN npx prisma generate


# Run Prisma when the container launches
CMD ["prisma", "migrate", "deploy"]
