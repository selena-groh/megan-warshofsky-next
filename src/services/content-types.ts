import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
  UnresolvedLink,
} from "contentful";

export interface TypeProjectFields {
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  coverImage?: EntryFieldTypes.AssetLink;
  mainMedia?: EntryFieldTypes.EntryLink<TypeYoutubeVideoSkeleton>;
  description?: EntryFieldTypes.RichText;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;
export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;

export function isTypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: UnresolvedLink<"Entry"> | Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeProject<Modifiers, Locales> {
  return isResolvedEntry(entry) && entry.sys.contentType.sys.id === "project";
}

export interface TypeYoutubeVideoFields {
  youtubeVideoId: EntryFieldTypes.Symbol;
  aspectRatioWidth: EntryFieldTypes.Integer;
  aspectRatioHeight: EntryFieldTypes.Integer;
}

export type TypeYoutubeVideoSkeleton = EntrySkeletonType<
  TypeYoutubeVideoFields,
  "youtubeVideo"
>;
export type TypeYoutubeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeYoutubeVideoSkeleton, Modifiers, Locales>;

export function isTypeYoutubeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: UnresolvedLink<"Entry"> | Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeYoutubeVideo<Modifiers, Locales> {
  return (
    isResolvedEntry(entry) && entry.sys.contentType.sys.id === "youtubeVideo"
  );
}

export function isResolvedEntry<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: UnresolvedLink<"Entry"> | Entry<EntrySkeletonType, Modifiers, Locales>
): entry is Entry<EntrySkeletonType, Modifiers, Locales> {
  // Check if the entry has the `fields` property, which only resolved entries have
  return (
    (entry as Entry<EntrySkeletonType, Modifiers, Locales>).fields !== undefined
  );
}
