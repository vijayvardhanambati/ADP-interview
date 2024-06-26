function getLastYear() {
  const date = new Date();
  return date.getFullYear() - 1;
}

function processTransactions(data) {
  const lastYear = getLastYear();
  const transactionsLastYear = data.transactions.filter(tx => new Date(tx.timeStamp).getFullYear() === lastYear);

  const earnings = {};
  transactionsLastYear.forEach(tx => {
    const employeeId = tx.employee.id;
    if (!earnings[employeeId]) {
      earnings[employeeId] = 0;
    }
    earnings[employeeId] += tx.amount;
  });

  const topEarnerId = Object.keys(earnings).reduce((topEarner, id) => {
    return earnings[id] > earnings[topEarner] ? id : topEarner;
  });

  const topEarnerTransactions = transactionsLastYear.filter(tx => tx.employee.id === topEarnerId && tx.type === 'alpha');
  const result = topEarnerTransactions.map(tx => tx.transactionID);

  return { id: data.id, result };
}

export default processTransactions;
