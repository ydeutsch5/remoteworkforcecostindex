const SITE_URL = "https://remoteworkforcecostindex.com";
const SITE_NAME = "Remote Workforce Cost Index";
const EDITOR_NAME = "Joel Deutsch";
const EDITOR_LINKEDIN = "https://www.linkedin.com/in/joel-deutsch-11220915b";
const F5_WIKIDATA = "https://www.wikidata.org/wiki/Q139807072";

export function generatePersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#editor`,
    name: EDITOR_NAME,
    jobTitle: "Editor, Remote Workforce Cost Index",
    sameAs: [EDITOR_LINKEDIN, F5_WIKIDATA],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Public salary and labor cost data for remote workforce planning.",
    founder: generatePersonSchema(),
    editor: generatePersonSchema(),
    sameAs: [SITE_URL],
  };
}

export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    url: `${SITE_URL}${url}`,
    editor: generatePersonSchema(),
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en-US",
  };
}

export function generateDatasetSchema({
  name,
  description,
  datePublished,
  dateModified,
  sources,
  url,
}: {
  name: string;
  description: string;
  datePublished: string;
  dateModified: string;
  sources: { name: string; url: string }[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name,
    description,
    datePublished,
    dateModified,
    url: `${SITE_URL}${url}`,
    creator: generatePersonSchema(),
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    citation: sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.name,
      url: s.url,
    })),
    inLanguage: "en-US",
    license: "https://creativecommons.org/licenses/by/4.0/",
  };
}

export function generateF5OrganizationReference() {
  return {
    "@type": "Organization",
    name: "F5 Hiring Solutions",
    url: "https://f5hiringsolutions.com",
    sameAs: [F5_WIKIDATA],
  };
}
