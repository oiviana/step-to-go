import { ContentImage, parseContentfulContentImage, parseContentfulContentImages } from "./contentImage";
import { TypeProjectSkeleton } from "./types/TypeProject";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import  contentfulClient  from "./client";

export interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  thumbnail: ContentImage | null;
  images: ContentImage[] | null;
  hasDeploy: boolean;
  technologies: string[];
  codeUrl: string;
  deployUrl: string;
}
type ProjectEntry = Entry<TypeProjectSkeleton, undefined, string>;

export function parseContentfulProject(
  projectEntry?: ProjectEntry
): ProjectProps | null {
  if (!projectEntry) {
    return null;
  }

  return {
    title: projectEntry.fields.title || "",
    subtitle: projectEntry.fields.subtitle || "",
    description: projectEntry.fields.description || "",
    slug: projectEntry.fields.slug,
    thumbnail: parseContentfulContentImage(projectEntry.fields.thumbnail),
    images: parseContentfulContentImages(projectEntry.fields.images),
    hasDeploy: projectEntry.fields.hasDeploy,
    codeUrl: projectEntry.fields.codeUrl,
    deployUrl: projectEntry.fields.deployUrl,
    technologies: projectEntry.fields.technologies
  };
}
export async function fetchProjects() {
  const client = contentfulClient();
  const projectsResult = await client.getEntries<TypeProjectSkeleton>({
    content_type: 'project',
    include: 2
  })
  return projectsResult.items.map((entry) => parseContentfulProject(entry ) as ProjectProps)
}

