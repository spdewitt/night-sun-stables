export const homePageQuery = `*[_type == "homePage"][0]{
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
  
    services[]{
      title,
      description,
      link,
      "imageUrl": image.asset->url
    },
  
    aboutTitle,
    aboutDescription,
    aboutQuote,
  
    contactTitle,
    contactDescription,
  
    workDirectlyTitle,
    workDirectlyDescription,
  
    servingTitle,
    servingDescription,
    servingButtonText,
    servingButtonLink,
  
    propertyManagersTitle,
    propertyManagersDescription
  }`;
export const aboutPageQuery = `*[_type == "aboutPage"][0]{
    title,
    sections[]{
      altText,
      description,
      "imageUrl": image.asset->url
    }
  }`;
