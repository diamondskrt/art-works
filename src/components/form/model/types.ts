import {
  Control,
  FormProviderProps,
  Path,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

type FormItemContextValue = {
  id: string;
};

type FormProps<T extends FieldValues> = Omit<
  React.HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> &
  FormProviderProps<T> & {
    onSubmit: (values: T) => void;
  };

type FormFieldItemProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: 'text' | 'email' | 'password' | 'number';
};

export type {
  FormFieldContextValue,
  FormProps,
  FormItemContextValue,
  FormFieldItemProps,
};
