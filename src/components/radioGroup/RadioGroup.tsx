import {Radio} from '@ant-design/react-native';
import React, {useState} from 'react';
import {OnGroupChangeParams} from '@ant-design/react-native/lib/radio/PropsType';
import {useTranslation} from 'react-i18next';
import {PaymentMethod} from '../../utils/enums';
import {Text} from '../index';
import {RadioGroupStyles} from './styles';

interface RadioGroupProps {
  options: PaymentMethod[];
  onChange: (value: PaymentMethod) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({options, onChange}) => {
  const [value, setValue] = useState(PaymentMethod.CASH_ON_SITE);
  const {t} = useTranslation();

  const onRadioChange = (e: OnGroupChangeParams) => {
    setValue(e.target.value as PaymentMethod);
    onChange && onChange(e.target.value as PaymentMethod);
  };

  return (
    <Radio.Group
      value={value}
      onChange={onRadioChange}
      style={RadioGroupStyles.radioGroup}>
      {options.map(option => (
        <Radio
          value={option}
          key={option}
          style={RadioGroupStyles.radio}
          disabled={option === PaymentMethod.CARD_ONLINE}>
          <Text style={RadioGroupStyles.text}>{t(option.toString())}</Text>
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroup;
