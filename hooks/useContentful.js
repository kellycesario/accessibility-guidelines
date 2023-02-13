import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
    host: 'https://cdn.contentful.com',
  });

  const getEntries = async (contentConfig) => {
    try {
      const getContent = client.getEntries(contentConfig);
      if (
        contentConfig.content_type === 'Globals' ||
        contentConfig.content_type === 'category'
      ) {
        const globalList = (await getContent).items.map((item) => {
          const image = item.fields.image.fields.file.url;
          return { ...item.fields, image: image, id: item.sys.id };
        });
        return globalList;
      } else {
        const entriesList = (await getContent).items.map((item) => {
          return { ...item.fields, id: item.sys.id };
        });
        return entriesList;
      }
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };
  return {
    getEntries,
  };
};

export default useContentful;
