import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers:{
    Authorization: 'Client-ID ad1206ddccc0bd09011ff8e4b369437bfbbe1d0d42834beb13d9ea3f7736adb6'
  }
})
