import React from "react";
import styled from "styled-components";

const EmptyHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="flex h-3/4 justify-center items-center flex-col">
      <SVGContainer>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="g3 ft cs g4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23zM7 9h10V6H7v3zm10 3H7v3h10v-3z"
          />
        </svg>
      </SVGContainer>

      <div className="m-4">
        <div className="card w-96 glass ">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-orange-600/[.6] font-bold">
              {title}
            </h2>

            <h2 className="my-3">
              <span className="text-lg opacity-50">
                {/* When you place your first order, it will appear here */}
                {subtitle}
              </span>
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-wide">Try Again !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyHeader;

const SVGContainer = styled.div`
  .g4 {
    fill: rgb(203, 203, 203);
  }
  .g3 {
    width: 64px;
  }
  .ft {
    height: 64px;
  }
  .cs {
    flex: none;
  }
`;
