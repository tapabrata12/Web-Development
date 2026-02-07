const app = require('./src/app');
const connectDB = require('./src/db/db');
const dns = require('dns');
const PORT = 3000;

dns.setServers(["1.1.1.1", "8.8.8.8"]);

app.listen(PORT,async()=>{
    await connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});