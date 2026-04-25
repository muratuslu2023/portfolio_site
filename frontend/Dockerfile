FROM node:22
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# Vite needs the --host flag to work inside a Docker container
CMD ["npm", "run", "dev", "--", "--host"]