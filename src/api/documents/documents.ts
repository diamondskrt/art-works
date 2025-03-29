import { COLLECTION_ID, DATABASE_ID, databases } from '~/lib/appwrite';

const getDocuments = async () => {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
  return response.documents.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    description: doc.description,
    imgUrl: doc.imgUrl,
  }));
};

export { getDocuments };
