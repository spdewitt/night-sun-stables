export const homePageQuery = `*[_type == "homePage"][0]{
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
    heroSlider {
      slides[]{
        image {
          asset->{
            url
          }
        },
        altText
      }
    },
  authorImage{
      asset->{
        url
      }
    },
    services[]{
      title,
      description,
      link,
      "imageUrl": image.asset->url
    },

      additionalServices[]{
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

export const lessonsQuery = `*[_type == "lessons"][0]{
    title,
    introParagraph,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    imageOne {
      asset->{
        _id,
        url
      },
      alt
    },
    imageTwo {
      asset->{
        _id,
        url
      },
      alt
    },
    imageThree {
      asset->{
        _id,
        url
      },
      alt
    },
    imageFour {
      asset->{
        _id,
        url
      },
      alt
    }
  }`;
export const servicesQuery = `*[_type == "services"][0]{
    title,
    introParagraph,
    paragraphOne,
    imageOne {
      asset->{
        _id,
        url
      },
      alt
    },
    imageTwo {
      asset->{
        _id,
        url
      },
      alt
    },
    
  }`;
export const youthCampsQuery = `*[_type == "youthCamps"][0]{
    title,
    introParagraph,
    paragraphOne,
    imageOne {
      asset->{
        _id,
        url
      },
      alt
    },
    imageTwo {
      asset->{
        _id,
        url
      },
      alt
    },
    imageThree {
      asset->{
        _id,
        url
      },
      alt
    },
    imageFour {
      asset->{
        _id,
        url
      },
      alt
    },
    imageFive {
      asset->{
        _id,
        url
      },
      alt
    },
    imageSix {
      asset->{
        _id,
        url
      },
      alt
    },
    imageSeven {
      asset->{
        _id,
        url
      },
      alt
    },
    imageEight {
      asset->{
        _id,
        url
      },
      alt
    }
  }`;
export const eventsQuery = `*[_type == "events"][0]{
    title,
    introParagraph,
    paragraphOne,
    imageOne {
      asset->{
        _id,
        url
      },
      alt
    },
    imageTwo {
      asset->{
        _id,
        url
      },
      alt
    },
    
  }`;
export const competitionQuery = `*[_type == "competition"][0]{
    title,
    introParagraph,
    paragraphOne,
    imageOne {
      asset->{
        _id,
        url
      },
      alt
    },
    imageTwo {
      asset->{
        _id,
        url
      },
      alt
    },
    paragraphThree,
    imageThree {
      asset->{
        _id,
        url
      },
      alt
    },
    paragraphFour,
    imageFour {
      asset->{
        _id,
        url
      },
      alt
    },
  }`;
export const navigationQuery = `
  *[_type == "navigation"][0] {
    title,
    links[]{
      label,
      href
    }
  }
`;
