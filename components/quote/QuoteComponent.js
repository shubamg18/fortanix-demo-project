import React from "react";
import styles from "./quote.module.css";

const QuoteComponent = ({ description, authorName }) => {
  return (
    <div className={styles.quote}>
      <div className={styles.container}>
        <div className={styles.quoteDescription}>
          {description}
        </div>
        <div className={styles.quoteAuthor}>
          -{authorName}
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;