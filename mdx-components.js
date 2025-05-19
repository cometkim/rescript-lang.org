// @ts-check

import markdownComponents from "./src/components/MarkdownComponents.mjs";

/**
 * @typedef {import("mdx/types").MDXComponents} MDXComponents
 * @param {MDXComponents} components
 * @return {MDXComponents}
 */
export function useMDXComponents(components) {
  return {
    ...components,
    ...markdownComponents,
  };
}
