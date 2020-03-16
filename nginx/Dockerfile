FROM nginx:1.15.0-alpine


RUN mkdir -p /usr/share/nginx/avaliacao.com/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/avaliacao.com.conf /etc/nginx/conf.d

