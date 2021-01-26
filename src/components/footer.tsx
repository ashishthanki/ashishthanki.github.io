/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >      
      <div>
        <small>Site written by {siteTitle} {new Date().getFullYear()} &copy;</small>
      </div>

      <div>
        <a href="#"><small> Top of Page</small></a>
      </div>
      <div>
        <Link
          aria-label="Link to Home Page"
          href="#"
        >
          Home</Link>
        {` `}
        |
        {` `}
        <Link
          aria-label="Link to About"
          href="/about"
        >
          {' '}About</Link>
          {' '}
          |
          {` `}
        <Link
          aria-label="Link to Articles"
          href="/blog"
        >
          {' '}Blogs</Link>
          {' '}
          |
          {` `}
        
        <Link
          aria-label="Link to Tags"
          href="/tags"
        >
          {' '}Tags</Link>
          {' '}
          |
          {` `}
        
        <Link
          aria-label="Link to Twitter"
          href="https://twitter.com/ashish__thanki"
        >
          {' '}Twitter</Link>
          {' '}
          |
          {` `}
        <Link
          aria-label="Link to Linkedin"
          href="https://www.linkedin.com/in/athanki/"
        >
          {' '}Linkedin</Link>
          {' '}
          |
          {` `}
        <Link
          aria-label="Link to GitHub"
          href="https://github.com/ashishthanki"
        >
          {' '}GitHub</Link>
          {' '}
      </div>
    </footer>
  )
}

export default Footer
