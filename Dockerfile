# Utilisez une image parent officielle Node.js
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez Angular CLI globalement
RUN npm install -g @angular/cli@16.0.0

# Installez les dépendances
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Exposez le port sur lequel l'application s'exécute
EXPOSE 4200

# Construisez l'application Angular
CMD ["ng", "serve"]
