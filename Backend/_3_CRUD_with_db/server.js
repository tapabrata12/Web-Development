const connectDB = require('./src/db/db');
const app = require('./src/app');
const dns = require("dns");



/*
I spend my whole fuckingggggggggggggggggggggggggggggggggggggggggggggggg day trying to connect to the DB and it was a fucking DNS issue. I am so fucking pissed off. I have wasted so much time but I have finally found the solution. I am so fucking happy right now. I am going to celebrate this victory !!!!!!!!!!!!!!
*/
// Force usage of Cloudflare/Google DNS to bypass ISP/local issues
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = 3000;

connectDB();

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});