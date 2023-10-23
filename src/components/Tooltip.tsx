import styled from "styled-components";

const StyledSpan = styled.span`
  position: relative;
  &:after {
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-50%);
    content: "(?)";
  }
`;

const TooltipText = styled.div`
  display: inline-block;
  visibility: hidden;
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 5px 5px;
  border-radius: ${({ theme }) => theme.radius.soft};
  z-index: 1;
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s;
  left: 30px;
  ${StyledSpan}:hover & {
    visibility: visible;
    opacity: 1;
  }
  font-size: 12px;
`;

type TooltipProps = {
    text: string;
};

const Tooltip = ({ text }: TooltipProps) => {
    return (
        <StyledSpan>
            <TooltipText>{text}</TooltipText>
        </StyledSpan>
    );
};

export default Tooltip;
