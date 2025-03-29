import { account } from '~/lib/appwrite';

import { LoginPayload, User } from './model';

export const loginUser = async ({ email, password }: LoginPayload) => {
  try {
    await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (): Promise<User> => {
  try {
    const user = await account.get();
    return {
      id: user.$id,
      email: user.email,
      name: user.name,
    };
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    throw error;
  }
};
