import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/source';

export const { GET } = createFromSource(source, {
  // https://docs.orama.com/open-source/supported-languages
  language: 'english',
});
