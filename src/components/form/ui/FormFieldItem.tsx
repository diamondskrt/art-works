import { FieldValues } from 'react-hook-form';

import { Input } from '~/components/input';

import { FormFieldItemProps } from '../model';

import { FormControl } from './FormControl';
import { FormDescription } from './FormDescription';
import { FormField } from './FormField';
import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { FormMessage } from './FormMessage';

function FormFieldItem<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = 'text',
}: FormFieldItemProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FormFieldItem };
