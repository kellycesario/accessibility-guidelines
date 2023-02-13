import ContactForm from ".";

export default {
  title: "Organisms/ContactForm",
  component: ContactForm,
  args: {
    subjectForm: [
      { key: "Question", name: "Question" },
      { key: "Recommendations", name: "Recommendations" },
    ],
    tags: ["tag", "tag", "tag", "tag"],
  },
  argTypes: {
    subjectForm: {
      table: {
        disable: true,
      },
    },
    tags: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
