import React from 'react';
import styled from 'styled-components';
import { Options } from '../../../../types/options';
import SingleInputDropdown from '../../inputs/single-input-dropdown/SingleInputDropdown';
import SelectPaymentMethod from '../../inputs/select-payment-method/SelectPaymentMethod';
import MultiInputDropdownWithCheckBox from '../../inputs/multi-input-dropdown/MultiInputDropdownWithCheckBox';
import { MODAL_WHITE } from '../../../../constants/color';
import useStore from '../../../../hook/use-store/useStore';
import { useObserver } from 'mobx-react';

interface IFormModalFilter {
  inputs: {
    dateRange: {
      placeholder: string;
      items: Options[];
    };
    startDate: string;
    endDate: string;
    payment: {
      placeholder: string;
      items: Options[];
    };
    incomeCategories: {
      placeholder: string;
      items: Options[];
    };
    expenditureCategories: {
      placeholder: string;
      items: Options[];
    };
  };
  changes: {
    dateRage: (e: string) => void;
    payment: (e: string[]) => void;
    incomeCategories: (e: string[]) => void;
    expenditureCategories: (e: string[]) => void;
  };
}

const ItemWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  width: 70%;
  padding: 0%;
  margin: 0%;
`;

const InputLabel = styled.p`
  font-size: 1.3em;
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormModalFilter: React.FC<IFormModalFilter> = ({ inputs, changes }: IFormModalFilter) => {
  const { formFilterStore } = useStore().rootStore.modalStore;
  console.log('hi');
  return useObserver(() => (
    <ItemWrapper>
      <InputWrapper>
        <InputLabel>기간</InputLabel>
        <SingleInputDropdown
          placeholder={'기간'}
          items={formFilterStore.dateOptions}
          onChange={formFilterStore.onChangeDate}
          defaultSelectValue={formFilterStore.selectedDate}
        />
        <DateRange>
          <p>{formFilterStore.startDate.text}</p>
          <p>{formFilterStore.endDate.text}</p>
        </DateRange>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>결제수단</InputLabel>
        <SelectPaymentMethod
          placeholder={'결제수단'}
          items={formFilterStore.accountOptions}
          onChange={formFilterStore.onChangeAcoount}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>카테고리</InputLabel>
        <MultiInputDropdownWithCheckBox
          placeholder={'지출'}
          checkBoxName={'지출'}
          items={formFilterStore.expenditureCategoryOptions}
          onChange={formFilterStore.onChangeExpenditureCategory}
        />
        <MultiInputDropdownWithCheckBox
          placeholder={'수입'}
          checkBoxName={'수입'}
          items={formFilterStore.incomeCategoryOptions}
          onChange={formFilterStore.onChangeIncomeCategory}
        />
      </InputWrapper>
    </ItemWrapper>
  ));
};

export default FormModalFilter;
