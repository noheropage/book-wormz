import React from "react";

function buttonDelete(props) {
  return (
    <span className="button-Delete" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default buttonDelete;