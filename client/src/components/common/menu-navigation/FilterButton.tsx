import React from 'react';
import styled from 'styled-components';
import MenuBackground from './MenuBackground';

export const SvgWrapper = styled.svg<{ width: number; height: number }>`
  position: relative;
  left: ${({ width }) => `calc(50% - ${width / 2}px)`};
  top: ${({ height }) => `calc(50% - ${height / 2}px)`};
`;

interface Props {
  width: number;
  height: number;
}

const FilterButton: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <MenuBackground>
      <SvgWrapper width={width} height={height}>
        <svg viewBox="0 0 32 32" fill="#000000" data-svg-content="true">
          <g>
            <path d="M 27,6L 24,6 c0-1.104-0.896-2-2-2l-2,0 C 18.896,4, 18,4.896, 18,6L 5,6 C 4.448,6, 4,6.448, 4,7C 4,7.552, 4.448,8, 5,8L 18,8 c0,1.104, 0.896,2, 2,2l 2,0 c 1.104,0, 2-0.896, 2-2l 3,0 C 27.552,8, 28,7.552, 28,7C 28,6.448, 27.552,6, 27,6z M 22,8l-2,0 L 20,6 l 2,0 L 22,8 zM 27,14L 14,14 c0-1.104-0.896-2-2-2L 10,12 C 8.896,12, 8,12.896, 8,14L 5,14 C 4.448,14, 4,14.448, 4,15C 4,15.552, 4.448,16, 5,16L 8,16 c0,1.104, 0.896,2, 2,2l 2,0 c 1.104,0, 2-0.896, 2-2l 13,0 C 27.552,16, 28,15.552, 28,15C 28,14.448, 27.552,14, 27,14z M 12,16L 10,16 L 10,14 l 2,0 L 12,16 zM 27,22L 20,22 c0-1.104-0.896-2-2-2L 16,20 c-1.104,0-2,0.896-2,2L 5,22 C 4.448,22, 4,22.448, 4,23 C 4,23.552, 4.448,24, 5,24L 14,24 c0,1.104, 0.896,2, 2,2l 2,0 c 1.104,0, 2-0.896, 2-2l 7,0 c 0.552,0, 1-0.448, 1-1 C 28,22.448, 27.552,22, 27,22z M 18,24L 16,24 l0-2 l 2,0 L 18,24 z"></path>
          </g>
        </svg>
      </SvgWrapper>
    </MenuBackground>
  );
};

export default FilterButton;
