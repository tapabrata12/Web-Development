const database = require('./student.js');
const http = require('http');
const url = require('url');
const PORT = 5050;
const server = http.createServer((req,res)=>{

    const parsedURL = url.parse(req.url,true);
    const path = parsedURL.pathname;
    const method = req.method;

    // GET/students: Return all the Students.
    if(path === '/students' && method === 'GET'){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(database.stu));
    } 
    
    // GET/students/id: Return a student by ID.  
    else if (path.startsWith('/students/') && method === 'GET') {

        // Extract the ID from the path
        const pathParts = path.split('/');
        const id = parseInt(pathParts[2]); // /students/1 -> ['','students','1'] so index 2

        // Find the student by ID
        const student = database.stu.find((s) => {
        return s.id === id});

        if (student) {
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404, {'content-type': 'application/json'});
            res.end(JSON.stringify({ error: 'Student not found' }));
        }
    }

    // Post/students: Add a new student.
    else if(path === '/students/add' && method === 'POST'){
        let body = '';

        req.on('data', (chunk)=>{
            body += chunk.toString();
        });
        req.on('end',()=>{
            const newStudent = JSON.parse(body);
            // Adding a new key id to the new student
            const isID = database.stu.find((s)=>{
                // Return true if ID already exists
                return s.id === newStudent.id;
            });

            if (isID) {
                // If true then send error responce
                res.writeHead(400, {'content-type':'application/json'});
                res.end(JSON.stringify({ error: 'ID already exists !' }));
                return;
            } else {
                database.stu.push(newStudent);
            res.writeHead(201, {'content-type':'application/json'});
            res.end(JSON.stringify("Student added successfully"));
            }
        });
    }
});

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});