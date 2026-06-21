import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

type ContactCalloutProps = {
  context: "about" | "services";
};

export default function ContactCallout({ context }: ContactCalloutProps) {
  const translate = useTranslations("ContactCallout");
  const whatsappUrl = `https://wa.me/5511943488946?text=${encodeURIComponent(
    translate(`${context}.whatsappMessage`),
  )}`;

  return (
    <section className="mb-12 mt-20 border-y border-white/[0.08] py-9 lg:mb-16 lg:mt-24 lg:py-11">
      <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div className="max-w-[43rem]">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.08em] text-v-green">
            {translate(`${context}.eyebrow`)}
          </span>
          <h2 className="text-2xl font-bold leading-tight text-v-white-300 lg:text-3xl">
            {translate(`${context}.title`)}
          </h2>
          <p className="mt-3 text-sm leading-7 text-v-white-900/75 lg:text-base">
            {translate(`${context}.description`)}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3 lg:w-auto lg:min-w-[27rem]">
          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-v-green px-6 text-sm font-extrabold text-v-dark-test transition hover:-translate-y-0.5 hover:bg-[#b3eb7a] lg:text-base"
            href="https://www.linkedin.com/in/lucasviana80"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin aria-hidden="true" size={22} />
            {translate("linkedinButton")}
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
          </a>

          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-v-green px-6 text-sm font-extrabold text-v-dark-test transition hover:-translate-y-0.5 hover:bg-[#b3eb7a] lg:text-base"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" size={20} />
            {translate("whatsappButton")}
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
