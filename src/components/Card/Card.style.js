import styled from 'styled-components';

export const StyledWrapper = styled.li`
  border-top: ${props => (props.first ? '1px solid #CCC' : undefined)};
  border-bottom: 1px solid #CCC;
  padding: 5px;
  display: flex;

  .icon {
    width: 50px;
    height: 50px;
  }

  main {
    width: 100%;

    p {
      margin: 5px 0;
    }
  }
`
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h2, p {
    font-size: 1rem;
    margin: 0 10px 0 0;
  }

  p {
    color: #757575;
  }
`
export const StyledIconContainer = styled.div`
  width: 50px;
  margin-right: 10px;
`

export const StyledContent = styled.article`
  margin: 15px 0;

  p {
    font-weight: 700;
    font-size: 2rem;
    margin: 3rem 0;
  }

  div.top {
    background-color: #FFA500;
    border: 1px solid #CCC;
    border-bottom: unset;
    border-radius: ${props => (props.hasArticleFooter ? '10px 10px 0 0' : '10px')};
    color: white;
    padding: 10px;
  }

  div.bottom {
    background: white;
    border: 1px solid #CCC;
    border-radius: ${props => (props.hasArticleText ? '0 0 10px 10px' : '10px')};
    color: black;
    padding: 10px;

    h4 {
      margin: 5px 0 10px;
      font-size: 1.2rem.
      font-weight: 600;
    }
    p {
      margin: 0 0 10px;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
