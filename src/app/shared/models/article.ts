export interface IArticle {
  assetId: string;
  slug: string;
  thumbnail: string;
  url: string;
  publicationDateUtc: string;
  author: string;
  assetType: string;
  body: string;
  geographies: string[];
  topics: string[];
  version: number;
}
