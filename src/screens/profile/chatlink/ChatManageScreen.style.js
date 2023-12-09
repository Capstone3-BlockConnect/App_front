import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  flex-flow: column nowrap;

  background-color: white;
`;

export const LayerContainer = styled.View`
  flex: 1;
  flex-flow: column nowrap;
  width: 93%;
  align-self: center;

  position: absolute;
  z-index: 100;

  row-gap: 10px;
`;

// 환영인사

export const GreetBox = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;

  padding: 10px;
`;

export const GreetFirstArea = styled.View`
  flex-flow: row nowrap;
  align-items: center;
`;

export const GreetBoldText = styled.Text`
  font-size: 17px;
  font-weight: 900;
`;

export const GreetNormalText = styled.Text`
  font-size: 17px;
  font-weight: 400;
`;

// link 카드

// TODO:
// backdrop filter 적용
export const LinkCard = styled.View`
  border: 1px solid black;
  padding: 12px 20px;

  border-radius: 10px;

  row-gap: 20px;
`;

export const WordBox = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;
`;

export const WordBoxTitle = styled.Text`
  font-size: 12px;
  color: #727272;
  font-weight: 700;
`;

export const WordLinkText = styled.Text`
  font-size: 15px;
  font-weight: 400;
`;

// 버튼 영역

export const ButtonBox = styled.View`
  flex-flow: row nowrap;
  width: 100%;

  column-gap: 10px;

  height: 150px;

  margin-top: 20px;
`;
export const LeftBigArea = styled.View`
  height: 100%;
  width: 49%;
`;

export const RightBigArea = styled.View`
  flex-flow: column nowrap;
  align-items: stretch;

  height: 100%;
  width: 49%;

  justify-content: space-between;
`;

export const LeftButton = styled.Pressable`
  background-color: #bae8e8;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  border: 0.5px solid black;
  border-radius: 10px;
`;

export const RightUpperButton = styled.Pressable`
  width: 100%;
  height: 45%;

  background-color: #e5f0db;
  align-items: center;
  justify-content: center;

  border: 0.5px solid black;

  border-radius: 10px;
`;

export const RightLowerButton = styled.View`
  width: 100%;
  height: 45%;
  background-color: #f4e6e7;
  align-items: center;
  justify-content: center;

  border: 0.5px solid black;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 900;
`;

export const RedCircle = styled.View`
  border-radius: 100px;
  width: 100px;
  height: 100px;
  background-color: #f4e6e7;

  position: absolute;
  top: 40px;
  left: 200px;
  z-index: 10;
`;
export const BlueCircle = styled(RedCircle)`
  background-color: #e5f0db;
  top: 90px;
  left: 250px;
  z-index: 10;
`;
