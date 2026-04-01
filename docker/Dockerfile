FROM node:24.5.0-alpine AS build

WORKDIR /app
COPY . .
RUN apk add git
RUN npm install && \
  npm run build

FROM nginx:stable-alpine-slim
WORKDIR /usr/share/nginx/
COPY docker/nginx.conf /etc/nginx
COPY --from=build /app/dist/ html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]


