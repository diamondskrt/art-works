import get from 'lodash-es/get';

import { cn } from '~/lib/utils';

import { SelectProps } from '../model';

import { SelectContent } from './SelectContent';
import { SelectGroup } from './SelectGroup';
import { SelectItem } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectRadix } from './SelectRadix';
import { SelectTrigger } from './SelectTrigger';
import { SelectValue } from './SelectValue';

function Select({
  defaultValue,
  value,
  placeholder,
  label,
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
  disabled,
  onSelectChange,
  triggerClassName,
  ...props
}: SelectProps) {
  return (
    <SelectRadix
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      onValueChange={onSelectChange}
      {...props}
    >
      <SelectTrigger className={cn(triggerClassName)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.length ? (
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {options.map((option) => (
              <SelectItem
                key={get(option, optionValue)}
                value={get(option, optionValue)}
              >
                {get(option, optionLabel)}
              </SelectItem>
            ))}
          </SelectGroup>
        ) : (
          <p className="text-center text-sm text-gray-500">No content</p>
        )}
      </SelectContent>
    </SelectRadix>
  );
}

export { Select };
