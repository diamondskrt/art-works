import { Client, Databases, Storage } from 'appwrite';

const appwriteClient = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API as string) // API URL
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string); // ID проекта из панели Appwrite

const databases = new Databases(appwriteClient);
const storage = new Storage(appwriteClient);

export { databases, storage };
