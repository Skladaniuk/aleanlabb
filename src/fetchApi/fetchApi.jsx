import axios from 'axios';
axios.defaults.baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data'


const BEARER_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';



export async function fetchJobList () {



   try{
      const response = await axios.get(`?access_token=${BEARER_TOKEN}`)
      return response.data
   }
   catch(error){
      console.log(error.message);
   }
   

}