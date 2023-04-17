import { Container } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import remarkFrontmatter from 'remark-frontmatter';
import CopyIcon from '@/components/copyIcon';
import help from './help.md'

/**
 * @function Help
 * @description This function renders a help page that displays content fetched from a Markdown file.
 * It uses the ReactMarkdown library to parse and render Markdown content with support for code blocks.
 * It also includes a custom component, CopyIcon, that wraps around pre tags to enable copying of code block content to the clipboard.
 * @returns {JSX.Element} - The JSX element representing the help page.
 * @props {Object} props - The props object (none in this case).
 */
export default function Help() {
    return (
        <Container>
            <ReactMarkdown
                className='markdown-body mt-3'
                rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }], rehypeRaw, rehypeSlug]}
                remarkPlugins={[remarkGfm, remarkToc, remarkFrontmatter]}
                components={{
                    pre: ({ node, ...props }) =>
                        <CopyIcon>
                            <pre {...props} >
                                {props.children}
                            </pre>
                        </CopyIcon>,
                }}
            >
                {help}
            </ReactMarkdown>
        </Container>
    )
}