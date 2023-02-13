import { createClient } from 'contentful-management';
import contentfulTypes from 'hooks/contentfulTypes';

export default async function handler(req, res) {
  const { categories, name, title, url, subject, description } = req.body;

  const SPACE = process.env.NEXT_PUBLIC_SPACE;
  const ENV = process.env.NEXT_PUBLIC_ENV;
  const TOKEN = process.env.NEXT_PUBLIC_MANAGEMENT_TOKEN;

  if (!name || !title || !url || !subject || !description) {
    res.status(400).json({
      status: 'error',
      title: 'Missing Fields',
      message: 'Error sending a message. Please try again',
    });
  }

  const categoriesArray = categories.map((category) => ({
    sys: {
      type: 'Link',
      linkType: 'Entry',
      id: category,
    },
  }));

  const messageInfo = {
    fields: {
      name: {
        'en-US': name,
      },
      title: {
        'en-US': title,
      },
      url: {
        'en-US': url,
      },
      subject: {
        'en-US': subject,
      },
      description: {
        'en-US': description,
      },
      categories: {
        'en-US': categoriesArray,
      },
    },
  };

  const client = createClient({
    accessToken: TOKEN,
  });

  const space = await client.getSpace(SPACE);
  const environment = await space.getEnvironment(ENV);

  const insertedEntry = await environment.createEntry(
    contentfulTypes.messages,
    messageInfo
  );

  await insertedEntry.publish();

  res.status(200).json({
    status: 'success',
    title: 'Message Sent',
    message: 'Your message has been sent successfully!',
  });
}
