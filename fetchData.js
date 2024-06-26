import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://interview.adpeai.com/api/v2/get-task');
    console.log('Response from fetch is:', response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
}

export default fetchData;
