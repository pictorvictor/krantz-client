import {Radio} from '@ant-design/react-native';
import React, {useState} from 'react';
import {OnGroupChangeParams} from '@ant-design/react-native/lib/radio/PropsType';
import {useTranslation} from 'react-i18next';
import {PaymentMethod} from '../../utils/enums';
import {Text} from '../index';
import {RadioGroupStyles} from './styles';

interface RadioGroupProps {
  options: PaymentMethod[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({options}) => {
  const [value, setValue] = useState(PaymentMethod.CASH_ON_SITE);
  const {t} = useTranslation();

  const onChange = (e: OnGroupChangeParams) => {
    setValue(e.target.value as PaymentMethod);
  };

  return (
    <Radio.Group
      value={value}
      onChange={onChange}
      style={RadioGroupStyles.radioGroup}>
      {options.map(option => (
        <Radio value={option} key={option} style={RadioGroupStyles.radio}>
          <Text style={RadioGroupStyles.text}>{t(option.toString())}</Text>
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroup;
