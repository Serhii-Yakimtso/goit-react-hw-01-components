import React from "react";
import ProtoTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = (transaction) => {
  console.log(transaction);

  return (
    <>
      <section className={s.transactionHistory}>
        <h2>TransactionHistory</h2>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transaction.map((el) => {
              const { id, type, amount, currency } = el;
              return (
                <tr className={s.row} key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.protoTypes = {
  id: ProtoTypes.string.isRequired,
  type: ProtoTypes.string.isRequired,
  amount: ProtoTypes.number.isRequired,
  currency: ProtoTypes.string.isRequired,
};
