"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import MoonLoader from "react-spinners/MoonLoader";
export interface EmailFormProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailForm() {
  const { handleSubmit, register, reset } = useForm<EmailFormProps>();
  const translate = useTranslations("Home");
  const [formLoading, setFormLoading] = useState<boolean>(false);

  const handleSendEmail: SubmitHandler<EmailFormProps> = async (data) => {
    setFormLoading(true);
    try {
      const response = await fetch("/api/contactEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar e-mail");
      }
      toast.success(translate("contact.form.success"))
      const responseData = await response.json();
      console.info(responseData);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.error(translate("contact.form.error"))
    }
    setFormLoading(false);
    reset();
  };

  return (
    <form
      className="w-full max-w-[450px] flex flex-col gap-8  py-12 mx-auto"
      onSubmit={handleSubmit(handleSendEmail)}
    >
      <fieldset className="relative border-2 bg-v-dark-test border-v-green rounded-md group">
        <label htmlFor="name" className="sr-only">
          Nome
        </label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          {translate("contact.form.nameLabel")}
        </legend>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
          id="name"
          required
          maxLength={45}
          className="p-2 rounded-md w-full !bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-v-dark-test border-v-green rounded-md ">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          {translate("contact.form.emailLabel")}
        </legend>
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          required
          maxLength={45}
          className="p-2 rounded-md w-full bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-v-dark-test border-v-green rounded-md rounded-ee-none">
        <label htmlFor="message" className="sr-only">
          Mensagem
        </label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          {translate("contact.form.messageLabel")}
        </legend>
        <textarea
          {...register("message", { required: true, maxLength: 20 })}
          id="message"
          rows={6}
          required
          maxLength={800}
          className="p-2 rounded-md rounded-ee-none w-full bg-transparent outline-0"
        ></textarea>
      </fieldset>
      <button
        type="submit"
        className="p-4 h-[50px] cursor-pointer flex items-center justify-center w-full max-w-[180px] mx-auto leading-3 lg:mx-0 rounded-md shadow-md font-semibold bg-v-dark-900 dark:bg-v-white-500 text-v-white-300 dark:text-v-dark-bold hover:bg-v-dark-500 hover:dark:bg-v-white-900 transition-colors"
      >
        {formLoading ? (
          <MoonLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="[&>*:nth-child(1)]:!bg-white [&>*:nth-child(2)]:!border-v-white-500 [&>*:nth-child(1)]:dark:!bg-black [&>*:nth-child(2)]:dark:!border-v-dark-700"

          />
        ) : (
          translate("contact.form.button")
        )}
      </button>
      <Toaster
        toastOptions={{
          duration: 6000,
          error: {
            style: {
              background: 'red',
              color: '#ffffff'
            },
          },
        }}/>
    </form>
  );
}
