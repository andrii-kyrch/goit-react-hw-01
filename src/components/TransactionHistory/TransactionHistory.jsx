import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <section className={css.transactionHistory}>
      <div className="container">
        <table className={css.tableTransaction}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;
