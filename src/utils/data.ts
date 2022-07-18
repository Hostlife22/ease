import {
  authorImg,
  blogImg_1,
  blogImg_2,
  blogImg_3,
  blogImg_4,
  blogImg_5,
  blogImg_6,
  blogImg_7,
} from '../images';

export interface IDataList {
  id: number;
  title: string;
  category: string;
  subCategory: string[];
  description: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  cover: string;
}

export const blogList: IDataList[] = [
  {
    id: 1,
    title: 'Davide Groppi designs Origine light to look like "a bud emerging from the ground"',
    category: 'design',
    subCategory: ['lamp', 'interior', 'design'],
    description: `The Italian designer's lamp, which made the shortlist in the lighting design category of Dezeen Awards 2021, got its name from the word oligo, which means "start, birth and source," according to the designer. Described by Groppi as "mysterious, enigmatic but comfortable," Origine gives off an indirect light and was designed to be used in both interior and exterior spaces.
Mysterious, enigmatic but comfortable, Origine combines the fascination of the unknown with the pleasure of a sophisticated and elegant ambient light".  "Designed to illuminate the facades of private buildings as well as internal spaces with purity and personality, Origine sculpts and enhances every environment with its indirect light, which is intentionally non-invasive, graphic and fascinating"`,
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 10, 2022',
    cover: blogImg_1,
  },
  {
    id: 2,
    title: 'Light Soy lighting by Heliograf',
    category: 'interior',
    subCategory: ['vacation', 'holidays', 'lamp'],
    description: `Heliograf's Light Soy lamp is shaped like the iconic fish-shaped soy sauce packet and intends to celebrate a fun design while also raising awareness of the problem that single-use plastics present to marine life."When we first designed Light Soy we experimented with recycled plastic and it was of low quality and questionable origin".
"Now, in just a few years small studios like ours have access to certified recycled ocean-bound plastics. It's exciting that so much progress has been made already."`,
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 11, 2022',
    cover: blogImg_2,
  },
  {
    id: 3,
    title: "Dean Norton's sculptural Daylight lamp replicates sunlight to improve well-being",
    category: 'lamps',
    subCategory: ['e-commerce store', 'lamp', 'shopping store'],
    description: `Melbourne-based designer Dean Norton has created a therapy lamp to combat the stress and loneliness of life during lockdown, comprising frosted glass components that enclose a bulb chosen to mimic daylight.

Norton created the Daylight lamp for a virtual exhibition organised by creative collective alt.material for the National Gallery of Victoria, which invited designers to respond to the theme of Ingenuity.
The lamp comprises five pieces of frosted glass that Norton sourced from his own studio. The glass components are bonded together with clear resin to create a sculptural form around a bulb.

Two large glass circles are held together by narrower side pieces with flat edges. A final central element features a small hole that supports the bulb.`,
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 12, 2022',
    cover: blogImg_3,
  },
  {
    id: 4,
    title: 'ADVENTURE IN YOU',
    category: 'material',
    subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 13, 2022',
    cover: blogImg_4,
  },
  {
    id: 5,
    title: "Floral Botanica kitchen system by L'Ottocento",
    category: 'design',
    subCategory: ['bbq', 'lamp', 'lifestyle'],
    description:
      "These are offset against the brand's Archetipo kitchen island in dark oak wood and brown marble. The same material palette features inside the kitchen's storage compartments, which are configurable with pocket or pull-out doors.Matching wall panels allow the Floral Botanica system to be extended into the living and dining room for visual continuity, with inserts finished in shantung silk by textile brand Dedar distinguishing the dining area.",
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 14, 2022',
    cover: blogImg_6,
  },
  {
    id: 6,
    title: 'Beyond the Beach',
    category: 'material',
    subCategory: ['lamp', 'sea', 'holidays'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 15, 2022',
    cover: blogImg_5,
  },
  {
    id: 7,
    title: 'Art & Perception',
    category: 'art',
    subCategory: ['skill', 'design', 'lamp'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'John Doe',
    authorAvatar: authorImg,
    createdAt: 'july 16, 2022',
    cover: blogImg_7,
  },
];
