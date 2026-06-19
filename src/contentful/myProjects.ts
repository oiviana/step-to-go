import {
  ContentImage,
  parseContentfulContentImage,
  parseContentfulContentImages,
} from "./contentImage";
import { TypeProjectSkeleton } from "./types/TypeProject";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./client";

export interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  client: string;
  category: string;
  role: string;
  mainDeliveries: string[];
  slug: string;
  thumbnail: ContentImage | null;
  images: ContentImage[] | null;
  mobileImages: ContentImage[] | null;
  hasDeploy: boolean;
  hasFinished: boolean;
  showRepo: boolean;
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
    client: projectEntry.fields.client || projectEntry.fields.title || "",
    category: projectEntry.fields.category || "",
    role: projectEntry.fields.role || "",
    mainDeliveries: projectEntry.fields.mainDeliveries || [],
    slug: projectEntry.fields.slug,
    thumbnail: parseContentfulContentImage(projectEntry.fields.thumbnail),
    images: parseContentfulContentImages(projectEntry.fields.images),
    mobileImages: parseContentfulContentImages(projectEntry.fields.mobileImages),
    hasDeploy: projectEntry.fields.hasDeploy,
    hasFinished: projectEntry.fields.hasFinished,
    showRepo:projectEntry.fields.showRepo,
    codeUrl: projectEntry.fields.codeUrl,
    deployUrl: projectEntry.fields.deployUrl,
    technologies: projectEntry.fields.technologies,
  };
}
interface FetchProjectsProps {
  locale: string;
}

export async function fetchProjects({
  locale,
}: FetchProjectsProps): Promise<ProjectProps[]> {
  const client = contentfulClient();
  const projectsResult = await client.getEntries<TypeProjectSkeleton>({
    content_type: "project",
    include: 2,
    locale
  });
  return projectsResult.items.map(
    (entry) => parseContentfulProject(entry) as ProjectProps
  );
}

export async function fetchProjectsBySlug(slug: string, locale: string) {
  const client = contentfulClient();
  const projectResult = await client.getEntries<TypeProjectSkeleton>({
    content_type: "project",
    "fields.slug": slug,
    include: 2,
    locale
  });
  return parseContentfulProject(projectResult.items[0]);
}
