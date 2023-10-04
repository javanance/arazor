
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import path from 'path'

// Remark packages
import remarkGfm from 'remark-gfm'
import GithubSlugger from "github-slugger"
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'

import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from 'pliny/mdx-plugins.js'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

const root = process.cwd()



const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `${doc._raw.flattenedPath}`,
      resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx','')}`,
      // resolve: (doc) => `/aaa/bbb`,
    },
  },
}))


export const Kics = defineDocumentType(() => ({
  name: 'Kics',
  filePathPattern: 'kics/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false},
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
    excerpt: { type: 'string' },
    order: { type: 'number' },
    showMetadata: { type: 'boolean' },
    toc_depth: { type: 'number' },
    toc: {
      type: "boolean",
      required: false,
      default: false,
    },

  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `${doc._raw.flattenedPath}`,
      resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx','')}`,
    },

    headings: {
      type: "json",
      resolve: async (doc) => {
        // const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        // const headings = Array.from(doc.body.raw.matchAll(headingsRegex))
        const url = doc.url;
        const regXHeader    = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger()
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length == 1 ? "one"
              : flag?.length == 2 ? "two"
              : flag?.length == 3 ? "three"
              : "four",
              text: content,
              slug: content ?  slugger.slug(content) : undefined
            };
          }
        );
        return headings;
      },
    },
  },
}))


export const Ifrs = defineDocumentType(() => ({
  name: 'Ifrs',
  filePathPattern: 'ifrs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false},
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `${doc._raw.flattenedPath}`,
      resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx','')}`,
    },

        headings: {
          type: "json",
          resolve: async (doc) => {
            // const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            // const headings = Array.from(doc.body.raw.matchAll(headingsRegex))
            const url = doc.url;
            const regXHeader    = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            const slugger = new GithubSlugger()
            const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
              ({ groups }) => {
                const flag = groups?.flag;
                const content = groups?.content;
                return {
                  level: flag?.length == 1 ? "one"
                  : flag?.length == 2 ? "two"
                  : flag?.length == 3 ? "three"
                  : "four",
                  text: content,
                  slug: content ?  slugger.slug(content) : undefined
                };
              }
            );
            return headings;
          },
        },

  },
}))

export const Fs = defineDocumentType(() => ({
  name: 'Fs',
  filePathPattern: 'fs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    date: { type: 'date', required: false},
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `${doc._raw.flattenedPath}`,
      resolve: (doc) => `${doc._raw.sourceFileName.replace('.mdx','')}`,
    },

        headings: {
          type: "json",
          resolve: async (doc) => {
            // const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            // const headings = Array.from(doc.body.raw.matchAll(headingsRegex))
            const url = doc.url;
            const regXHeader    = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            const slugger = new GithubSlugger()
            const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
              ({ groups }) => {
                const flag = groups?.flag;
                const content = groups?.content;
                return {
                  level: flag?.length == 1 ? "one"
                  : flag?.length == 2 ? "two"
                  : flag?.length == 3 ? "three"
                  : "four",
                  text: content,
                  slug: content ?  slugger.slug(content) : undefined
                };
              }
            );
            return headings;
          },
        },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post , Kics, Ifrs, Fs],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      // remarkExtractFrontmatter,
      remarkGfm,
      // remarkCodeTitles,
      // [remarkFootnotes, { inlineNotes: true }],
      remarkMath,
      // remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      // rehypeAutolinkHeadings,
      rehypeKatex,
      // [rehypeCitation, { path: path.join(root, 'docs') }],
      // [rehypePrismPlus, { ignoreMissing: true }],
      // rehypePresetMinify,
    ],
  },
})