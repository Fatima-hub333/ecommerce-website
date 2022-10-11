import React from "react";

function GoBack({ history }) {
  return (
    <section data-aos="fade-left" className="go-back">
      <div className=" contain">
        <button onClick={history.goBack}>Go Back</button>
      </div>
    </section>
  );
}

export default GoBack;
