import ThemeButton from "@/components/ThemeButton";

interface ProjectPageProps{
    params: {
        slug: string
    }
}

export default function ProjectPage({params}:ProjectPageProps) {
    
    if (!params.slug) {
        return <div>Carregando...</div>;
    }

    return (
        <>
        <ThemeButton/>
        <h2>
            slug do projeto: {params.slug}
        </h2>
        </>
    );
}