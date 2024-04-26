export default function EmailForm() {
  return (
    <form className="max-w-[480px] flex flex-col gap-8  py-12">
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md group">
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          Nome:
        </legend>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="p-2 rounded-md w-full bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md ">
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          Email:
        </legend>
        <input
          type="email"
          name="email"
          id="name"
          required
          className="p-2 rounded-md w-full bg-transparent outline-0"
        />
      </fieldset>
      <fieldset className="relative border-2 bg-white  dark:bg-v-dark-300 border-v-white-900 dark:border-slate-400 rounded-md rounded-ee-none">
        <legend className="text-base md:text-lg font-bold  ml-4 px-3 tracking-wider !leading-[14px]">
          Mensagem:
        </legend>
        <textarea
          name="message"
          id="message"
          rows="10"
          required
          className="p-2 rounded-md rounded-ee-none w-full bg-transparent outline-0"
        ></textarea>
      </fieldset>
      <input
        type="submit"
        value="Enviar"
        className="p-4 h-[50px] flex items-center justify-center w-full max-w-[180px] mx-auto leading-3 lg:mx-0 rounded-md shadow-md font-semibold bg-v-dark-900 dark:bg-v-white-500 text-v-white-300 dark:text-v-dark-bold"
      />
    </form>
  );
}
