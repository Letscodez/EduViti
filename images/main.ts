import { StaticImageData } from 'next/image'; // Import StaticImageData for TypeScript typing
// Import images
import title from './title.webp';
import nav_logo from './nav-logo.webp';
import heroImage from './heroImage.webp';
import pen from './pen.webp';
import rocket from './rocket.webp';
import reload from './reload.webp';
import book_svg from './BookUp.svg';
import bookdown_svg from './BookDown.svg';
import openbook_svg from './Openbook.svg';
import templates_svg from './Templates.svg';
import focused_svg from './focused.svg';
import support_svg from './support.svg';
import maps_svg from './maps.svg';
import concise_svg from './concise.svg';
import qbank_svg from './qbank.svg';
import lectures_svg from './lectures.svg';
import sachinsir from './sachinsir.webp';
import rajwantsir from './rajwantsir.webp';
import mohitsir from './mohitsir.webp';
import khansir from './khan_sir.webp';

export {
  title,
  nav_logo,
  heroImage,
  pen,
  rocket,
  reload,
  book_svg,
  bookdown_svg,
  openbook_svg,
  templates_svg,
  focused_svg,
  support_svg,
  maps_svg,
  concise_svg,
  qbank_svg,
  lectures_svg,
  sachinsir,
  rajwantsir,
  mohitsir,
  khansir,
};
//  Type declarations for imported images
export type ImageAssets = {
  title: StaticImageData;
  nav_logo: StaticImageData;
  heroImage: StaticImageData; // dekhti ekk o kitna imp hoti kaam karti apna ham dekh legi idhar ka ok 
  pen: StaticImageData;
  rocket: StaticImageData;
  reload: StaticImageData;
  book_svg: StaticImageData;
  bookdown_svg: StaticImageData;
  openbook_svg: StaticImageData;
  templates_svg: StaticImageData;
  focused_svg: StaticImageData;
  support_svg: StaticImageData;
  maps_svg: StaticImageData;
  concise_svg: StaticImageData;
  qbank_svg: StaticImageData;
  lectures_svg: StaticImageData;
  sachinsir: StaticImageData;
  rajwantsir: StaticImageData;
  mohitsir: StaticImageData;
  khansir: StaticImageData;
};
// Default export of images for better structure
const images: ImageAssets = {
  title,
  nav_logo,
  heroImage,
  pen,
  rocket,
  reload,
  book_svg,
  bookdown_svg,
  openbook_svg,
  templates_svg,
  focused_svg,
  support_svg,
  maps_svg,
  concise_svg,
  qbank_svg,
  lectures_svg,
  sachinsir,
  rajwantsir,
  mohitsir,
  khansir
};

export default images; // Default export
