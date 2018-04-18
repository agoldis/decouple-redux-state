import React from "react";

const styles = {
  wrapper: {
    display: "flex"
  },
  item: {
    margin: "0 10px",
    cursor: "pointer"
  }
};

const Header = ({ onChange }) => (
  <div style={styles.wrapper}>
    <div style={styles.item} onClick={() => onChange("users")}>
      Users
    </div>
    <div style={styles.item} onClick={() => onChange("books")}>
      Books
    </div>
  </div>
);

export default Header;
