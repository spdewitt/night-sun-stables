// Static blog posts (migrated off Sanity). Add a new post by appending an object here.
export const posts = [
  {
    "slug": "first-snow",
    "title": "First Snow of Winter",
    "excerpt": "The Horses loved playing in the first snow fall of the year at our Stables. ",
    "publishedAt": "2024-12-20T22:04:27.312Z",
    "mainImage": "/uploads/4214d145b66f789429fb8ddbc917cd20361fc2f1-1536x2048.jpg",
    "mainImageAlt": "Carmen with Chunko the Horse",
    "author": {
      "name": "Carmen Hurley",
      "image": "/uploads/d11febf837a5196566daa85166e489a54c9608f0-425x579.webp"
    },
    "paragraphs": [
      "There’s a certain magic in the air when that first dusting of winter arrives, and you can feel it throughout the stable. Each year, as the clouds lay out their gentle white blanket, the horses seem to recognize this shift in the world. Normally calm and measured, they become playful and alert, ears perked and nostrils flaring, eagerly sniffing the crisp air. Early mornings echo with soft nickers and quiet whinnies as the horses wait, anticipating their turn to venture out into the freshly fallen snow.",
      "Once outside, they waste no time kicking up powdery sprays with their powerful hooves. Younger horses gallop wildly, delighting in the strange texture beneath their feet, while the elders take a more measured approach, pawing tentatively and blowing warm breath against the cool flakes. Together, they create a scene of simple, joyful energy: backs glistening as snow settles softly on their coats, tails swishing through drifts, and gentle faces pressed against one another in curious investigation.",
      "As the day unfolds, the stableyard becomes a playground of sorts. Small herds form and re-form as horses chase, buck, and squeal with delight at this annual treat. The silver light of winter emphasizes their grace and strength, contrasting beautifully with the velvet darkness of their eyes. In these moments, you witness not just animals, but creatures completely in tune with the changing world around them, cherishing something as simple and pure as the first snow of the season."
    ]
  },
  {
    "slug": "vanderburgh-4h",
    "title": "Vanderburgh 4H Fair",
    "excerpt": "The Vanderburgh 4H Fair is a long standing tradition for Night Sun Stables. This is one of our favorite opportunities to work hard, compete and show ",
    "publishedAt": "2024-12-20T21:47:50.719Z",
    "mainImage": "/uploads/b4c00828cfb1df0228c8ce708750d19e113959d0-2048x1540.jpg",
    "mainImageAlt": "4h alt text",
    "author": {
      "name": "Carmen Hurley",
      "image": "/uploads/d11febf837a5196566daa85166e489a54c9608f0-425x579.webp"
    },
    "paragraphs": [
      "Attending 4-H horse programs offers young enthusiasts a unique blend of hands-on learning, responsibility, and fun. Under the guidance of knowledgeable volunteers, members learn about proper horse care, grooming, feeding, and stable maintenance. Beyond practical skills, they also gain an understanding of equine health and behavior, developing a strong sense of empathy and respect for these magnificent animals. With each passing session, the confidence of the young participants grows, as they master basic horsemanship and learn to communicate effectively with their equine partners.",
      "The 4-H environment encourages teamwork, friendship, and personal growth. As members work toward showing their horses in competitions or simply improving their riding skills, they support one another, sharing tips and encouragement along the way. The result is a nurturing community where young people can form lasting bonds, not just with their horses, but also with fellow members who share their passion. In this setting, horses become both teachers and companions, helping youths build character, gain leadership experience, and develop valuable life skills that extend far beyond the stable doors."
    ]
  },
  {
    "slug": "the-big-day",
    "title": "Abby & Evan's Wedding is Finally Here!",
    "excerpt": "Carmen's Son Evan recently got married in the Stables. It could not have gone better. See what the day looked like.",
    "publishedAt": "2024-12-20T05:34:00.000Z",
    "mainImage": "/uploads/be46bcbacd0b2c8794d5b47cf463c200f1ec7905-1536x1274.jpg",
    "mainImageAlt": "Wedding at Night Sun Stables",
    "author": {
      "name": "Carmen Hurley",
      "image": "/uploads/d11febf837a5196566daa85166e489a54c9608f0-425x579.webp"
    },
    "paragraphs": [
      "I couldn’t have imagined a more perfect celebration than Evan and Abby’s wedding. From the moment I arrived, every detail reflected their warmth, love, and vibrant personalities. The ceremony was moving, their vows heartfelt, and the laughter that followed felt electric. The reception buzzed with energy: delicious food, lively music, and good company made the night unforgettable. Watching them dance together, beaming with happiness, was pure joy, and it felt like we were all part of something magical. By the end of the evening, I left with a grateful heart, cherishing the memory of their special day."
    ]
  }
];

export const getAllPostSlugs = () => posts.map(p => ({ slug: p.slug }));
export const getPostBySlug = slug => posts.find(p => p.slug === slug) || null;
