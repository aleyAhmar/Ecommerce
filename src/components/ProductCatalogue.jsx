import React from "react";
import styled from "styled-components";

const Products = () => {
  return <Wrapper>

    <div className="container grid grid-filter-column">
      {/* <FilterSection/> */}

      section 
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;