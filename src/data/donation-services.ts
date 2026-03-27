export interface DonationService {
  name: string
  price: number
  image: string
  imageWebp: string
  description: string
  sudanDescription: string
  sudanImage: string
  stripeCampaign: string
}

export const donationServices: DonationService[] = [
  {
    name: 'Clean Water Supply',
    price: 25,
    image: '/img/water.png',
    imageWebp: '/img/water.webp',
    description:
      'Provide access to clean and safe drinking water for individuals and families in regions facing severe water shortages. Helps cover the cost of water purification, storage, and local delivery systems.',
    sudanDescription:
      'Provide access to clean and safe drinking water for individuals and families in sub-Saharan Africa facing severe water shortages. Helps cover the cost of water purification, storage, and local delivery systems.',
    sudanImage: '/img/sudan/wa_5.40.44.jpg',
    stripeCampaign: 'stripe1',
  },
  {
    name: 'Fresh Meal Service',
    price: 50,
    image: '/img/food.png',
    imageWebp: '/img/food.webp',
    description:
      'Support the preparation and distribution of freshly cooked meals to families affected by hunger or displacement. Covers ingredients, cooking, and delivery to ensure food reaches those in urgent need.',
    sudanDescription:
      'Support the preparation and distribution of freshly cooked meals to families affected by famine or displacement in Africa. Covers ingredients, cooking, and delivery to ensure food reaches those in urgent need.',
    sudanImage: '/img/sudan/download_060548.png',
    stripeCampaign: 'stripe2',
  },
  {
    name: 'Education Assistance Service',
    price: 75,
    image: '/img/medical.png',
    imageWebp: '/img/medical.webp',
    description:
      'Provide educational materials, stationery, and support to children whose schooling has been disrupted by poverty or hardship. Helps children continue their education and regain a sense of normalcy.',
    sudanDescription:
      'Provide educational materials, stationery, and support to children in Africa whose schooling has been disrupted by poverty or drought. Helps children continue their education and regain a sense of normalcy.',
    sudanImage: '/img/sudan/download_061814.png',
    stripeCampaign: 'stripe3',
  },
  {
    name: 'Shelter Setup Service',
    price: 100,
    image: '/img/shelter.png',
    imageWebp: '/img/shelter.webp',
    description:
      'Help provide emergency shelter to displaced families by funding temporary tents and essential bedding materials. Ensures safety, warmth, and privacy for families who have lost their homes.',
    sudanDescription:
      'Help provide emergency shelter to displaced families in Africa by funding temporary tents and essential bedding materials. Ensures safety, warmth, and privacy for families who have lost their homes.',
    sudanImage: '/img/sudan/wa_5.40.34_2.jpg',
    stripeCampaign: 'stripe4',
  },
  {
    name: 'Medical Support Service',
    price: 150,
    image: '/img/education.png',
    imageWebp: '/img/education.webp',
    description:
      'Assist with the supply of essential medicines and medical kits for families and children in regions affected by malnutrition and poverty. Helps fund the procurement and delivery of life saving medical supplies.',
    sudanDescription:
      'Assist with the supply of essential medicines and medical kits for families and children in emergency areas across Africa. Helps fund the procurement and delivery of life-saving medical supplies.',
    sudanImage: '/img/sudan/download_061519.png',
    stripeCampaign: 'stripe1',
  },
  {
    name: 'Emergency Relief Package',
    price: 200,
    image: '/img/relief.png',
    imageWebp: '/img/relief.webp',
    description:
      'Deliver comprehensive relief packages that include food, water, hygiene items, and emergency supplies for one family. Supports rapid response operations in hunger-affected and disaster stricken areas.',
    sudanDescription:
      'Deliver comprehensive relief packages that include food, water, hygiene items, and emergency supplies for one family in Africa. Supports rapid response operations in famine-hit or disaster affected areas.',
    sudanImage: '/img/sudan/wa_5.40.46_1.jpg',
    stripeCampaign: 'stripe2',
  },
]

export const donationPackages = [
  { name: 'Clean Water Support', price: 25 },
  { name: 'Hot Meal Distribution', price: 50 },
  { name: 'Emergency Shelter Support', price: 100 },
  { name: 'Medical Aid Assistance', price: 150 },
  { name: 'Education Support Program', price: 75 },
  { name: 'Complete Emergency Relief Package', price: 200 },
]
