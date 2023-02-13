import styles from "./styles.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "@atoms/Select";
import Heading from "@atoms/Headings";
import Button from "@atoms/Button";
import Label from "@atoms/Label";
import Tag from "@atoms/Tag";
import TextArea from "@atoms/TextArea";
import InputField from "@atoms/InputField";
import BasicModal from "@molecules/Modal";

export default function ContactForm({ subjectForm, tags }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const handleModalClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = async (data) => {
    setIsLoading(true);
    setOpen(true);
    const response = await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    setSubmitMessage(responseData.message);
    setIsLoading(false);
    reset();
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmitHandler)}
      method="post"
    >
      <Heading level="2" color="darkGray">
        Recommend something...
      </Heading>
      <fieldset className={styles.contactForm__fieldset}>
        <Label id="name" size="large" align="right">
          Name:
        </Label>
        <InputField
          error={errors.name}
          id="name"
          type="text"
          {...register("name", {
            required:
              '*The field "your name" has not been filled in, it is a required field and must be filled in.',
            validate: (value) => value.trim() !== "",
          })}
          errorId="nameError"
        />
        {errors.name && (
          <p id="nameError" className={styles.contactForm__error}>
            {errors.name.message}
          </p>
        )}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <Label id="subject" size="large" align="right">
          Subject:
        </Label>
        <Select
          error={errors.subject}
          className="select__bgGray"
          id="subject"
          type="text"
          options={subjectForm}
          {...register("subject", {
            required:
              '*The "subject" field does not have an option selected, it is a required field and must have an option selected.',
            validate: (value) => value !== null,
          })}
          errorId="subjectError"
        />
        {errors.subject && (
          <p id="subjectError" className={styles.contactForm__error}>
            {errors.subject.message}
          </p>
        )}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <Label id="subject" size="large" align="right">
          Categories:
        </Label>
        <div className={styles.contactForm__tags}>
          {tags.map((tag) => (
            <Tag
              isClicable
              id={tag.category}
              text="text"
              label={tag.category}
              value={tag.id}
              key={tag.id}
              {...register("categories", {
                required:
                  '*The "categories" field does not have a category selected, it is a required field and must have at least one option selected.',
                validate: (value) => value.length > 0,
              })}
            />
          ))}
        </div>
        {errors.categories && (
          <p className={styles.contactForm__error}>
            {errors.categories.message}
          </p>
        )}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <Label id="title" size="large" align="right">
          Title:{" "}
        </Label>
        <InputField
          error={errors.title}
          {...register("title", {
            required:
              '*The field "title" has not been filled in, it is a required field and must be filled in.',
            validate: (value) => value.trim() !== "",
          })}
          id="title"
          type="text"
          errorId="titleError"
        />
        {errors.title && (
          <p id="titleError" className={styles.contactForm__error}>
            {errors.title.message}
          </p>
        )}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <Label id="url" size="large" align="right">
          URL:{" "}
        </Label>
        <InputField
          error={errors.url}
          id="url"
          type="url"
          {...register("url", {
            required: '*The "URL" field is not populated with a valid URL.',
            validate: (value) => value.trim() !== "",
          })}
          errorId="urlError"
        />
        {errors.url && (
          <p id="urlError" className={styles.contactForm__error}>
            {errors.url.message}
          </p>
        )}
      </fieldset>

      <fieldset className={styles.contactForm__fieldset}>
        <Label id="messages" size="large" align="right">
          Description:
        </Label>
        <TextArea
          error={errors.description}
          {...register("description", {
            required:
              '*The "description" field has not been filled in, it is a required field and must be filled in.',
            validate: (value) => value.trim() !== "",
          })}
          placeholder=" "
          id="messages"
          errorId="descriptionError"
        />
        {errors.description && (
          <p id="descriptionError" className={styles.contactForm__error}>
            {errors.description.message}
          </p>
        )}
      </fieldset>
      <div className={styles.contactForm__button}>
        <Button label="Submit" color="blue" size="large" isButton>
          Send
        </Button>
        <BasicModal
          open={open}
          handleClose={handleModalClose}
          message={submitMessage}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
