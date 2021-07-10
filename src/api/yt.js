import axios from 'axios';
const key = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: key,
    type: 'video',
  },
});