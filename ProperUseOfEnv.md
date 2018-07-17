// https://medium.com/lucjuggery/from-env-variables-to-docker-secrets-bc8802cacdfd



// DOTFILES
// The legend goes that dot - files arose from a bug in the earliest days of UNIX: in an effort to avoid listing the.and..entries of a directory, the ls command skipped files that began with the '.' character.As a result, any file with a name beginning with '.' was not reported by ls, i.e.it was a "hidden" file.A user's home directory was a convenient place to put user-specific configuration files, but such files were also an eyesore; one popular solution to this problem was to make those configuration files hidden so that they wouldn't annoy the user.Thus, the tradition of dot - files was born.

// Docker
FROM python: 3.4-alpine
ADD. /code
WORKDIR / code
RUN pip install - r requirements.txt
CMD["python", "app.py"]



// .yml

version: '2'

services:
  redis:
    image: redis:3-alpine
  simple-webserver:
    image: andygrunwald/simple-webserver:v1.1.1
    command: -redis "redis:6379"
    depends_on:
      - redis
    links:
      - redis
    ports:
      - "8082:8082"

// Secure Env
 codeship - we encryted the env variables 
 there is a feature in docker called secret that one can use to secure the env variables