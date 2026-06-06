# Build react
FROM node:25.1.0-alpine as build
WORKDIR /app

# Création des packages dans l'image
COPY package.json ./
COPY package-lock.json ./
# Installation des dépendances
RUN npm install

# Création du dossier
COPY . .
RUN npm run build

# Étape 2 : serveur web nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
