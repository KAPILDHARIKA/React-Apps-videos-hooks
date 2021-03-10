import axios from 'axios';


const KEY= 'AIzaSyB7UUDMjYo7p8hX3RK7PBKP7tw47gbqLCI';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part:'snippet',
       maxResults: 5,
       key: KEY       
   }
});