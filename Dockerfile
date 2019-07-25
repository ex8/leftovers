FROM node:10

# Create app directory
WORKDIR /src/app/server

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.jsona re copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]