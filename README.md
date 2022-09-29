# Node, Typescript, Express Server

A server side app for notes with use Node, Typescript and Express.

### Endpoints

By default server runs on [http://localhost:5050](http://localhost:5050) - 
this is basic url.

1. GET endpoints:
  * /notes - you get all notes
  * /notes/stats - you get statistic data about amount of active and archive 
                  notes in every category
  * /notes/:id - you get one note with provided id
2. POST endpoint:
  * /notes - to add new notes you need to send request with data of your note.
            Sample:
            {
              "title": "Do homework",
              "description": "Homework of english - read text till 10/15/2022",
              "category": "Task"
            }
            category may take only three value - "Task", "Idea" or "Random Thought"
3. PATCH endpoint:
  * /notes/:id - you may edit your note by change one or all of params: title, 
                description, category or active. For this you need to send request
                with param that you update
                Sample:
                {
                  "title": "Do homework with freind",
                  "category": "Idea",
                  "active": true
                }
4. DELETE endpoint:
  * /notes/:id - you may delete choosed note, send delete request and 
                don't foget about mention id in link

### Use
1. fork repository
2. clone to you storage
3. to install use this command
 ```bash
npm install
```
4. to start app use command
 ```bash
npm start
```
