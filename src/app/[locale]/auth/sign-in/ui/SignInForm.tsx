'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { loginFormSchema, type LoginPayload } from '~/api/auth';
import { Button } from '~/components/button';
import { Form, FormFieldItem } from '~/components/form';
import { Typography } from '~/components/typography';
import { useAuth } from '~/providers/auth-provider';

function SignInForm() {
  const router = useRouter();

  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { login } = useAuth();

  const onSubmit = async (values: LoginPayload) => {
    try {
      await login(values);
      router.push('/');
      toast.success('Login successful');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Form {...form} onSubmit={onSubmit} className="w-[350px] space-y-4">
      <Typography variant="h4" className="text-center">
        Sign in
      </Typography>

      <FormFieldItem<LoginPayload>
        control={form.control}
        name="email"
        placeholder="Enter your username"
      />
      <FormFieldItem<LoginPayload>
        control={form.control}
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="flex items-center justify-between">
        <Button type="submit" className="cursor-pointer">
          Sign in
        </Button>
        <Button variant="link" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </Form>
  );
}

export { SignInForm };
