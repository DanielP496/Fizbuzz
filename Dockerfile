# Dockerfile

# Használjuk a Node.js alapú image-t
FROM node:14

# Állítsuk be a munkakönyvtárat a konténerben
WORKDIR /usr/src/app

# Másoljuk át a szükséges fájlokat a konténerbe
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Telepítsük a szükséges npm csomagokat
RUN npm install

# Fordítsuk le a TypeScript forrásfájlokat
RUN npm run build

# Tegyük elérhetővé a 9876-os portot
EXPOSE 9876

# Indítsuk el az alkalmazást
CMD ["node", "./dist/server.js"]
