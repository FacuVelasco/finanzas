import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;
  margin-bottom: 0;
  max-height: 100%;
`;

export const ContentContainer = styled.div`
  width: 85%;
  margin auto;
  margin-top: 40px;
  color: rgba(0, 0, 0, 0.5);
  font-family: Roboto;
`;

export const ImgBar = styled.div`
  margin-top: 30px;
  height: 90px;
  background: url(img/home.jpg) no-repeat;
  background-size: cover;
`;

export const Img = styled.div`
  margin-top: 50px;
  height: 350px;
  background: url(img/home.jpg) no-repeat;
  background-size: cover;
  font-family: "IBM Plex Sans";
  font-size: 50px;
  text-align: center;
  padding-top: 15%;
  color: rgb(255, 255, 255);
`;

export const Note = styled.div`
  margin: 0 auto;
  margin-top: 120px;
  font-size: 20px;
  text-align: center;
  width: 60%;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 180px;
`;

export const Logo = styled.div`
  position: absolute;
  left: 15px;
  font-size: 25px;
  margin: 12px 20px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 0.5px solid rgb(0, 0, 0);
  border-top: 0.5px solid rgb(0, 0, 0);
`;

export const Title = styled.div`
  width: fit-content;
  font-size: 18px;
  margin: 20px;
  margin-top: 40px;
  font-family: Roboto;
  color: rgb(34, 48, 124);
  font-weight: bold;
  padding: 3px;
`;

export const DividedContainers = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const SelectorContainer = styled.div`
  margin-top: 15px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Roboto;
`;

export const TableContainer = styled.div`
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

export const TableProperties = styled.div`
  margin-top: 57px;
  flex: 2.5;
  flex-direction: column;
`;

export const SingleInputContainer = styled.div`
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;

export const SelectValue = styled.div`
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

export const SingleInput = styled.div`
  margin-right: 25px;
  heigth: 48px;
  display: flex;
`;

export const SingleResult = styled.div`
  margin: auto;
  width: 375px;
  height: 48px;
  display: flex;
`;

export const Header = styled.div`
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 56px;
  font-size: 17px;
  margin-right: 15px;
`;

export const Prop = styled.div`
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: flex-end;
  margin-right: 20px;
  white-space: nowrap;
  height: 47px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 0px solid #fff;
  outline: none;
  width: 100%;
  text-align: center;
  align-self: center;
`;

export const Inputs = styled.div`
  margin-right: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

export const Center = styled.div`
  width: 300px;
  margin: 30px auto;
  margin-top: 30px;
  padding-bottom: 50px;
`;

export const Clear = styled.div`
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 5;
`;
export const SideContainer = styled.div`
  flex-direction: row;
  margin-top: 15px;
  margin: auto;
  padding: 20px;
  display: flex;
`;

export const SideResult = styled.div`
  margin-top: 15px;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

export const SideElement = styled.div`
  margin-right: 20px;
  display: flex;
  flex: 5;
  justify-content: flex-end;
`;

export const RedLed = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: #f00;
  box-shadow: rgba(0, 0, 0, 0.5) 0 -1px 6px 1px, inset #600 0 -1px 8px,
    #f00 0 3px 11px;
`;
export const GreenLed = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: #80ff00;
  box-shadow: rgba(0, 0, 0, 0.5) 0 -1px 6px 1px, inset #460 0 -1px 8px,
    #80ff00 0 3px 11px;
`;

export const Li = styled.li`
  margin: 30px 0;
`;

export const IconLi = styled.li`
  display: flex;
`;

export const Icon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(20, 20, 100, 0.6);
  margin-right: 15px;
`;

export const Foot = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

export const ContactText = styled.div`
  border-radius: 8px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  margin: auto;
  width: 60%;
  margin-top: 50px;
`;

export const BlueBar = styled.div`
  background-color: rgb(63, 81, 181);
  height: 32px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 50px auto;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  width: 220px;
  height: 50px;
  border-radius: 8px;
  &:hover {
    background-color: rgba(20, 20, 100, 0.1);
    cursor: pointer;
  }
`;
