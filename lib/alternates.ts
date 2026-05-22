const SITE_URL = "https://porlucoffee.com";

export function generateAlternates(path: string) {
  return {
    canonical: `${SITE_URL}${path}`,

    languages: {
      en: `${SITE_URL}${path.replace("/id", "")}`,
      id: `${SITE_URL}/id${path.replace("/id", "")}`,
    },
  };
}
