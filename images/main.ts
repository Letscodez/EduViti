import { StaticImageData } from 'next/image'; // Import StaticImageData for TypeScript typing

// Import images
import title from './title.webp';
import nav_logo from './nav-logo.webp';
import heroImage from './heroImage.webp';
import pen from './pen.webp';
import rocket from './rocket.webp';
import reload from './reload.webp';

// Exporting images
export {
  title,
  nav_logo,
  heroImage,
  pen,
  rocket,
  reload,
};

// Type declarations for imported images
export type ImageAssets = {
  title: StaticImageData;
  nav_logo: StaticImageData;
  heroImage: StaticImageData;
  pen: StaticImageData;
  rocket: StaticImageData;
  reload: StaticImageData;
};

// Default export of images for better structure
const images: ImageAssets = {
  title,
  nav_logo,
  heroImage,
  pen,
  rocket,
  reload,
};

export default images; // Default export
