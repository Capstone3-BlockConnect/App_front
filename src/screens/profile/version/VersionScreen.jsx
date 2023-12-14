import styled, { css } from "@emotion/native";
import { element } from "prop-types";

const VersionScreen = () => {
  const data = {
    element1: {
      title: "참여",
      projectManager: "임수원",
      frontend: "임수원",
      backend: "임기현 장유수",
      design: "임수원 이재혁",
    },
  };
  return (
    <Container>
      <InnerContainer>
        <ElementContainer>
          <ContentBox>
            <ContainerTitle>역할</ContainerTitle>
            <Element>
              <ElementTitle>PM 및 기획</ElementTitle>
              <ElementContent>{data.element1.frontend}</ElementContent>
            </Element>
            <Element>
              <ElementTitle>디자인</ElementTitle>
              <ElementContent>{data.element1.design}</ElementContent>
            </Element>
            <Element>
              <ElementTitle>프론트엔드 개발</ElementTitle>
              <ElementContent>{data.element1.frontend}</ElementContent>
            </Element>
            <Element>
              <ElementTitle>백엔드 개발</ElementTitle>
              <ElementContent>{data.element1.backend}</ElementContent>
            </Element>
          </ContentBox>
        </ElementContainer>
      </InnerContainer>
      <InnerContainer>
        <ElementContainer>
          <ContentBox>
            <ContainerTitle>스택</ContainerTitle>
            <Element>
              <ElementTitle>디자인</ElementTitle>
              <ElementContent>figma</ElementContent>
            </Element>
            <Element>
              <ElementTitle>프론트엔드</ElementTitle>
              <ElementContent>
                React Native, Recoil, react-native-paper, react-emotion
              </ElementContent>
            </Element>
            <Element>
              <ElementTitle>백엔드</ElementTitle>
              <ElementContent>Node.js, MongoDB</ElementContent>
            </Element>
            <Element>
              <ElementTitle>스마트컨트랙트</ElementTitle>
              <ElementContent>
                Solidity, Remix, ERC20 Ownable/Burnable
              </ElementContent>
            </Element>
          </ContentBox>
        </ElementContainer>
      </InnerContainer>
    </Container>
  );
};

export default VersionScreen;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const InnerContainer = styled.View`
  margin: 10px;
  border: 1px solid gray;
  border-radius: 8px;
`;

const ElementContainer = styled.View`
  padding: 10px 20px;
`;

const ContainerTitle = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: black;
`;

const ElementTitle = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: black;
`;

const ContentBox = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;
`;

const ElementContent = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: black;
`;

const Element = styled.View``;
