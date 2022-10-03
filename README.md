# Docker Compose, Node, Typescript, Express Server

A server side app for notes with use Node, Typescript and Express 
and with Docker Compose

### Run in Docker
 ```bash
docker-compose up
```
#### use -d flag to run in background

#### Tear down
```bash
docker-compose down
```

#### To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

#### To re-build
```bash
docker-compose build
```
