import styled from "styled-components";

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
	props.justifyContent ? props.justifyContent : "space-between"};
  align-items: center;
  flex: ${props => (props.flex ? props.flex : 'none')};
`;

export const FlexCol = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props =>
	props.justifyContent ? props.justifyContent : "center"};
`;

export const Container = styled.View`
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  background-color: #f5fcff;
  width: 100%;
  flex: ${props => (props.flex ? props.flex : 1)};
`;

export const Header = styled.Text`
  font-size: 28px;
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: bold;
`;

export const StyledButton = styled.Button`
  height: 60px;
  width: 200px;
`;
