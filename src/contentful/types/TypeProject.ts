import type {
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
    ChainModifiers,
    Entry,
  } from "contentful";
  
  export interface TypeProjectFields {
    title?: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    thumbnail?: EntryFieldTypes.AssetLink;
    images?: EntryFieldTypes.AssetLink[];
    mobileImages?: EntryFieldTypes.AssetLink[];
    hasDeploy: EntryFieldTypes.Boolean;
    showRepo: EntryFieldTypes.Boolean;
    hasFinished: EntryFieldTypes.Boolean;
    technologies: EntryFieldTypes.Symbol[];
    codeUrl: EntryFieldTypes.Symbol;
    deployUrl: EntryFieldTypes.Symbol;

  }
  
  export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
    "project"
  >;
  export type TypeProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;