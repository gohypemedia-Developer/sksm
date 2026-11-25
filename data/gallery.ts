import { GALLERY, asset } from "@/lib/site-content";
/**
 * ============================================================================
 * GALLERY MEDIA DATA MANAGEMENT (गैलरी मीडिया डेटा)
 * ============================================================================
 * 
 * Contains all authentic photos and videos hosted on Cloudflare R2.
 * Total items: 143 (15 videos, 128 photos)
 */

export type MediaType = "photo" | "video";
export type VideoProvider = "youtube" | "vimeo" | "mp4";

export interface GalleryItem {
  id: string;
  type: MediaType;
  title: string;
  titleHi?: string;
  event?: string;
  eventHi?: string;
  src: string;
  thumbnail: string;
  alt: string;
  videoProvider?: VideoProvider;
  focalPoint?: string;
  aspectRatio?: string;
  displayOrder: number;
  date?: string;
}

export const galleryData: GalleryItem[] = GALLERY.map(([file, title, titleHi], index) => ({
  id: `sksm-${index + 1}`, type: "photo", title, titleHi,
  src: asset(file), thumbnail: asset(file), alt: title, displayOrder: index + 1,
}));
