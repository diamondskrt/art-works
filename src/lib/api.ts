import { useQuery } from '@tanstack/react-query';

import { databases } from '~/lib/appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;

const getPictures = async () => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
  return response.documents.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    description: doc.description,
    imgUrl: doc.imgUrl,
  }));
};

export const usePictures = () =>
  useQuery({
    queryKey: ['pictures'],
    queryFn: getPictures,
    staleTime: 1000 * 60 * 5,
  });
