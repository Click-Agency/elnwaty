import { useTranslation } from "react-i18next";
import { trim } from "../../../utils/functions/general";
import InputStyled from "../../shared/InputStyled";
import ButtonStyled from "../../shared/ButtonStyled";
import { SubmitHandler, useForm } from "react-hook-form";
import Contact from "../../../types/contact";
import { send } from "@emailjs/browser";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation(["home", "common"]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>();

  const onSubmitHandler: SubmitHandler<Contact> = async (data) => {
    try {
      setIsLoading(() => true);
      const template = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        to_name: "Your Name",
        message: data.message,
      };

      const res = await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        template,
        import.meta.env.VITE_EMAILJS_KEY
      );

      if (res.status !== 200) {
        setIsLoading(() => false);
      }

      reset();
      setIsLoading(() => false);
    } catch (error) {
      setIsLoading(() => false);
      console.log(error);
    }
  };

  return (
    <form
      className={trim(`
        flex
        flex-col
        gap-5
        w-full
        justify-between
        py-2`)}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex flex-col md:flex-row md:gap-10 gap-7">
        <InputStyled
          border
          className={`${
            errors.name?.message ? "placeholder:text-red-500" : ""
          }`}
          placeholder={t("contactUs.form.name.placeholder")}
          {...register("name", {
            required: {
              value: true,
              message: t("contactUs.form.name.errors.required"),
            },
            minLength: {
              value: 3,
              message: t("contactUs.form.name.errors.min"),
            },
            maxLength: {
              value: 20,
              message: t("contactUs.form.name.errors.max"),
            },
          })}
          error={errors.name?.message as string | undefined}
          disabled={isLoading}
        />

        <InputStyled
          border
          className={`${
            errors.email?.message ? "placeholder:text-red-500" : ""
          }`}
          placeholder={t("contactUs.form.email.placeholder")}
          {...register("email", {
            required: {
              value: true,
              message: t("contactUs.form.email.errors.required"),
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t("contactUs.form.email.errors.invalid"),
            },
          })}
          error={errors.email?.message as string | undefined}
          disabled={isLoading}
        />
      </div>

      <InputStyled
        border
        className={`${
          errors.subject?.message ? "placeholder:text-red-500" : ""
        }`}
        placeholder={t("contactUs.form.subject.placeholder")}
        {...register("subject", {
          required: {
            value: true,
            message: t("contactUs.form.subject.errors.required"),
          },
          minLength: {
            value: 3,
            message: t("contactUs.form.subject.errors.min"),
          },
          maxLength: {
            value: 60,
            message: t("contactUs.form.subject.errors.max"),
          },
        })}
        error={errors.subject?.message as string | undefined}
        disabled={isLoading}
      />

      <InputStyled
        border
        className={`${
          errors.message?.message ? "placeholder:text-red-500" : ""
        }`}
        elemType="textarea"
        placeholder={t("contactUs.form.message.placeholder")}
        {...register("message", {
          required: {
            value: true,
            message: t("contactUs.form.message.errors.required"),
          },
          minLength: {
            value: 20,
            message: t("contactUs.form.message.errors.min"),
          },
          maxLength: {
            value: 400,
            message: t("contactUs.form.message.errors.max"),
          },
        })}
        error={errors.message?.message as string | undefined}
        disabled={isLoading}
      />

      <ButtonStyled
        type="submit"
        bg
        hover
        className="self-start"
        ripple
        title={t("submit", { ns: "common" })}
        disabled={isLoading}
        SvgIcon={
          isLoading ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            <BsFillSendFill size={15} />
          )
        }
      />
    </form>
  );
};

export default Form;
