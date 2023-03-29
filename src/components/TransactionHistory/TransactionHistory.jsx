import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_header}>
        <tr>
          <th className={css.table_header_txt}>Type</th>
          <th className={css.table_header_txt}>Amount</th>
          <th className={css.table_header_txt}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.table_body_string} key={item.id}>
            <td className={css.table_body_txt}>{item.type}</td>
            <td className={css.table_body_txt}>{item.amount}</td>
            <td className={css.table_body_txt}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
