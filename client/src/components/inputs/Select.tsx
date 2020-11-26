import React, { useState } from 'react';
import styled from 'styled-components';

import SelectList from './SelectList';

export interface Options {
  value: string | number;
  label: string;
  checked?: boolean;
}

interface SelectProps {
  options?: Options[];
  defaultValue?: string;
  headerClick?: () => void;
  itemClick?: (value: string) => void;
  showDropDown?: boolean;
  targetRef?: React.RefObject<HTMLElement>;
}

interface SelectWrapperProps {
  ref?: React.RefObject<HTMLElement>;
}

const SelectWrapper = styled.div<SelectWrapperProps>`
  width: 100%;
  padding: 0px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  position: relative;
`;

const SelectTitle = styled.p`
  padding: 5px;
  margin: 0px;
  color: #7d7d7d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue = '',
  headerClick,
  itemClick,
  showDropDown,
  targetRef,
}: SelectProps) => {
  return (
    <SelectWrapper ref={targetRef}>
      <SelectTitle onClick={headerClick}>{defaultValue}</SelectTitle>
      {showDropDown && <SelectList options={options} onClick={itemClick} />}
    </SelectWrapper>
  );
};

export default Select;
