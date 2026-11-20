import data from './content.json';

export const POSTS = data.posts;
export const CASES = data.cases;

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const getCase = (slug) => CASES.find((c) => c.slug === slug);

export function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
