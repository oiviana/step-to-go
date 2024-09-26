import ParticlesComponent from "@/components/ui/Particles"

export default function ProjectsBanner() {
  return (
    <div className="bg-v-green h-[20rem] ">
      <ParticlesComponent id={'particles'}/>
      <h1>Desenvolver e inovar!</h1>
      <p>
        Ao longo dos últimos 4 anos, tenho contribuído ativamente para diversos
        projetos com foco na web.
      </p>
    </div>
  );
}
