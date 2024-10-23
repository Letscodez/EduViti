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
import vector_svg from './Vector.svg';

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
  vector_svg,
};
//  Type declarations for imported images
export type ImageAssets = {
  title: StaticImageData;
  nav_logo: StaticImageData;
  heroImage: StaticImageData;
  pen: StaticImageData;
  rocket: StaticImageData;
  reload: StaticImageData;
  book_svg: any;
  bookdown_svg: any;
  openbook_svg: any;
  templates_svg: any;
  focused_svg: any;
  support_svg: any;
  maps_svg: any;
  concise_svg: any;
  qbank_svg: any;
  lectures_svg: any;
  sachinsir: StaticImageData;
  rajwantsir: StaticImageData;
  mohitsir: StaticImageData;
  khansir: StaticImageData;
  vector_svg: any;
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
  khansir,
  vector_svg,
};

export default images; // Default export
