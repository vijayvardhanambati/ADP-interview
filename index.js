import fetchData from './fetchData.js';
import processTransactions from './processTransactions.js';
import submitData from './submitData.js';

async function main() {
  try {
    const data = await fetchData();
    const result = processTransactions(data);
    await submitData(result);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

main();
