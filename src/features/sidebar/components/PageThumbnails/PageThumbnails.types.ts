export interface PageThumbnailsProps {
  totalPages?: number;
  currentPage?: number;
  onSelectPage?: (page: number) => void;
}
