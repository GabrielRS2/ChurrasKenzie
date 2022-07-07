import styled from "styled-components";


export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: none;
  background-color: #212529;

  .link {
    color: var(--black);
  }

  @media (max-width: 680px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    .wrapper {
      position: fixed;
      top: 80px;
      left: 0px;
      width: 100%;
      background-color: var(--white);
      padding: 10px;
      z-index: 1;
    }
    
    ul {
    display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    li{
        font-weight: bold;
    }
    li:hover{
        color: var(--red-1);
    }
  }
`;