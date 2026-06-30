export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://nima-ha.github.io/nimamehrani/sitemap.xml'
  };
}
