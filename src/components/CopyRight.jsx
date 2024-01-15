import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} PorFolio <br /> Created by
        <a
          target="_blank"
          rel="noreferrer"
        >
          Rémi dubar
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
