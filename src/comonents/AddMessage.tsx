import React from "react";

const AddMessage = (props: { dispatch: any }) => {
  let input: any;

  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
};

export default AddMessage;
