export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  imageWidth: number
  imageHeight: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'feeding-hope-plate-by-plate',
    title: 'Feeding Hope, Plate by Plate',
    excerpt:
      'Nourishing a hungry world means more than filling plates. It is about restoring lives, dignity, and faith in the future.',
    content:
      'Nourishing a hungry world means more than filling plates. It is about restoring lives, dignity, and faith in the future. With your help, Caring Hearts distributes meals, builds food systems, and creates community kitchens that were once only a dream. Every meal served represents love, strength, and renewal. Families once living in despair now have nourishment in their hands and hope in their hearts. This story celebrates how your support is helping turn empty bowls into new beginnings and creating a path toward healing for communities around the globe.',
    image: '/img/water-distribution.webp',
    imageWidth: 1600,
    imageHeight: 1200,
  },
  {
    slug: 'the-worlds-children-the-worlds-future',
    title: "The World's Children, the World's Future",
    excerpt:
      'Even in hardship, children find ways to smile and dream. Their courage is the heartbeat of our mission.',
    content:
      "In the hungriest corners of the world, even in hardship, children find ways to smile and dream. Their courage is the heartbeat of our mission. With your support, Caring Hearts provides education, food, and safety, giving every child a chance at a brighter future. These young hearts remind us that resilience lives in the smallest souls. Through this story, we honor their strength and show how your compassion helps them reclaim their childhood and believe in tomorrow once again.",
    image: '/img/caring/children-dist-aid.jpg',
    imageWidth: 1600,
    imageHeight: 1067,
  },
  {
    slug: 'delivering-meals-delivering-life',
    title: 'Delivering Meals, Delivering Life',
    excerpt:
      'Behind every act of giving lies a story of courage. Our dedicated volunteers travel far to ensure food reaches the most vulnerable.',
    content:
      "Behind every act of giving lies a story of courage. Our dedicated volunteers travel thousands of miles to ensure food, clean water, and medical care reach the world's most vulnerable families. Each shipment, each visit, and each smile shared is a testament to humanity's power to endure and uplift. This post shares how your donations travel from your heart to the hands of those in need, turning generosity into real, tangible change. Together, we continue delivering more than aid. We deliver life where it is needed most.",
    image: '/img/food-distribution.png',
    imageWidth: 1067,
    imageHeight: 1067,
  },
  {
    slug: 'hope-in-every-donation',
    title: 'Hope in Every Donation',
    excerpt:
      'Every contribution you make helps transform pain into possibility.',
    content:
      "Every contribution you make helps transform pain into possibility. Through your generosity, families around the world receive food, medical aid, and safe shelter. Each dollar gives comfort to a child, relief to a parent, and hope to a community in crisis. At Caring Hearts, we believe that compassion knows no borders. Your kindness fuels our mission to restore dignity and rebuild lives for those who have lost so much. Together, we are proving that even the smallest act of giving can create a lasting impact and keep hope alive across our world.",
    image: '/img/caring/img5.jpg',
    imageWidth: 1600,
    imageHeight: 1200,
  },
]
