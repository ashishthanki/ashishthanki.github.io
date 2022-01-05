import { SiteConfig } from "../../advanced/src/config";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Ashish Thanki Website", // Homepage title
    titleShort: "Home", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Ashish Thanki", // Website name used for homescreen (PWA) and SEO
    description: "A data scientist website.", // Website description used for RSS feeds/meta description tag
    language: "en",
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    fbAppId: "1111111111111111", // FB Application ID for using app insights
    twitterName: "Ashish__thanki", // Twitter handle of the website
    url: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Ashish Thanki RSS Feed", // Title of the RSS feed

    googleAnalyticsId: "UA-XXXXXXXX-A", // GA tracking ID
    copyright: "© Copyright 2022 | Ashish Thanki", // Copyright string for the footer of the website and RSS feed.

    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: {
    id: "AshishThanki", // Unique identifier of the user on the website. User for OpenGraph SEO tags
    firstName: "Ashish", // Used for SEO
    lastName: "Thanki", // Used for SEO
    twitterName: "Ashish__thanki", // Twitter username used for SEO
    linkedIn: "https://uk.linkedin.com/in/athanki", // Used for contact information
    github: "ashishthanki", // Used for contact information
    email: "ashish_thanki@hotmail.com", // Used for contact information and in the RSS feed
    location: "London United Kingdom", // User location used for SEO
    about: "A full-stack web developer looking for a challenge!", // User information used for the author section
    avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
  },

  // Organization information used for SEO
  organization: {
    name: "Organization Name",
    description: "Organization description",
    logoUrl: "/logos/logo-512.png",
    url: "https://gatsby-advanced-starter-demo.netlify.com", // URL of the organization website
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  iconList: [], // List of icon names to be used in the manifest.

  contentDir: "./content", // Directory for MDX posts
  assetDir: "./static", // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  basePath: "",
};

export default config;
