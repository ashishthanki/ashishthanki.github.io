import { SiteConfig } from "./types";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Ashish Thanki Blog", // Homepage title
    titleShort: "Ashish Thanki", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Ashish__Thanki", // Website name used for homescreen (PWA) and SEO
    description: "Data Scientist Blog.", // Website description used for RSS feeds/meta description tag
    language: "en", // Sets the global HTML lang attribute
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    url: "https://ashishthanki.github.io", // Domain of your website without the pathPrefix
    copyright: "© Copyright 2022 | Ashish Thanki", // Copyright string for the footer of the website and RSS feed.
    twitterName: "ashish__thanki",
    backgroundColor: "#d0d0d0",
    themeColor: "#000",
    rss: "test",
    rssTitle: "test",
    googleAnalyticsId: "UA-173551441-1",
  },

  // User configuration
  user: {
    id: "AshishThanki", // Unique identifier of the user on the website. User for OpenGraph SEO tags
    firstName: "Ashish", // Used for SEO
    lastName: "Thanki", // Used for SEO
    twitterName: "Ashish__thanki", // Twitter username used for SEO
    linkedIn: "athanki", // Used for contact information
    github: "ashishthanki", // Used for contact information
    email: "ashish_thanki@hotmail.com", // Used for contact information and in the RSS feed
    location: "London United Kingdom", // User location used for SEO
    about: "A self taught data scientist, tech enthusiast, blogger and sports fan!", // User information used for the author section
    avatar: "https://avatars.githubusercontent.com/u/62998319?v=4", // User avatar used for the author section
  },
  // Organization information used for SEO
  organization: {
    name: "Ashish Thanki",
    description: "Direct-To-Consumer brands use Fospha’s measurement platform to achieve rapid and sustainable growth through customer acquisition and retention.",
    logoUrl: "Ahttps://www.blenheimchalcot.com/wp-content/uploads/2018/07/Fospha_Logos_RGB_Marketing_Fospha_Marketing.png",
    url: "https://www.fospha.com"
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: 'themes/advanced/src/icons/icon.png', // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

export default config;
