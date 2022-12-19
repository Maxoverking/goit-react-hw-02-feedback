import styled from "@emotion/styled";

export const BtnContainer = styled.div`
display: flex;
gap: 30px;
`

export const Button = styled.button`
position: relative;
  cursor: pointer;
  border: 0;
  font-size: inherit;
  font-family: inherit;
  color: #382b22;
  padding: 6px 10px;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transition: transform 0.15s;
  transform-style: preserve-3d;
  ::before{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f9c4d2;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.15s, box-shadow 0.15s;
  }
  :hover{
background: #ffe9e9;
  }
  :hover::before{
        box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
  transform: translate3d(0, 0.5em, -1em);
  }
  :active{
 background: #ffe9e9;
  transform: translate(0em, 0.2em);
  }
  :active::before{
     box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
  transform: translate3d(0, 0, -0.2em);
  }
  :nth-of-type(even):hover{
background-color: rgb(255, 217, 66);
}
:first-of-type:hover{
background-color: rgb(38, 196, 75);
}
:last-child:hover{
background-color: rgb(255, 66, 66);
}
`