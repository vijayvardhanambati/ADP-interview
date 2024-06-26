import axios from 'axios';

async function submitData(result) {
    console.group('payload in submit data', result)
  try {
    const response = await axios.post('https://interview.adpeai.com/api/v2/submit-task', result);
    console.log('Response of submit call is:', response.status);
  } catch (error) {
    console.log('Error submitting data:', error);
    throw error;
  }
}

export default submitData;
