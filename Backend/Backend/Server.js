import http from 'http';
import App from './App.js';


const port = process.env.PORT || 3000;
const Server = http.createServer(App);



Server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
