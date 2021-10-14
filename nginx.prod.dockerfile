###### stage 1
FROM node:latest as node
LABEL author="JGU"

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

###### stage 2
FROM nginx:alpine
#VOLUME /var/cache/nginx
COPY --from=node /app/dist/uikit /usr/share/nginx/html
EXPOSE 80
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

### build the image called nginx-angular-jg
# docker build -t nginx-angular-jg -f nginx.prod.dockerfile .

### run the container (1st work, 2nd no)
# docker run -d -p 80:80 nginx-angular-jg
# docker run -d -p 80:80 -v $(pwd)/dist:/usr/share/nginx/html nginx-angular-jg
