# Docker Compose, Node, Typescript, Express Server

A server side app for notes with use Node, Typescript and Express 
and with Docker Compose

# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build
