FROM node:18-alpine3.17 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN node --dns-result-order=ipv4first $(which npm) ci --loglevel verbose --omit dev
COPY . ./
RUN node --dns-result-order=ipv4first $(which npm) run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3030
ENTRYPOINT ["nginx", "-g", "daemon off;"]
