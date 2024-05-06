"use client";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";

interface EmailFormProps {
  name: string
  email: string
  message: string
}

export default function EmailForm() {
  const { handleSubmit, register } = useForm<EmailFormProps>();
  const translate = useTranslations("Home")

  const handleSendEmail: SubmitHandler<EmailFormProps> = async (data) => {
    try {
    
      const response = await axios.post('/api/emails/', data);
      console.log(response.data); 
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  };

  return (
    <form
      className="max-w-[480px] flex flex-col gap-8  py-12"
      onSubmit={handleSubmit(handleSendEmail)}
    >
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md group">
      <label htmlFor="name" className="sr-only">Nome</label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
        {translate("contact.form.nameLabel")}
        </legend>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
          id="name"
          required
          className="p-2 rounded-md w-full !bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md ">
      <label htmlFor="email" className="sr-only">Email</label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
        {translate("contact.form.emailLabel")}
        </legend>
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          required
          className="p-2 rounded-md w-full bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md rounded-ee-none">
      <label htmlFor="message" className="sr-only">Mensagem</label>
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
        {translate("contact.form.messageLabel")}
        </legend>
        <textarea
          {...register("message", { required: true, maxLength: 20 })}
          id="message"
          rows={10}
          required
          className="p-2 rounded-md rounded-ee-none w-full bg-transparent outline-0"
        ></textarea>
      </fieldset>
      <input
        type="submit"
        value={translate("contact.form.button")}
        className="p-4 h-[50px] cursor-pointer flex items-center justify-center w-full max-w-[180px] mx-auto leading-3 lg:mx-0 rounded-md shadow-md font-semibold bg-v-dark-900 dark:bg-v-white-500 text-v-white-300 dark:text-v-dark-bold hover:bg-v-dark-500 hover:dark:bg-v-white-900 transition-colors"
      />
    </form>
  );
}
