export const A4_DIMENSIONS = {
  WIDTH: 794, // 21cm at 96 DPI
  HEIGHT: 1123, // 29.7cm at 96 DPI
  MARGINS: {
    TOP: 96, // ~2.5cm
    BOTTOM: 96, // ~2.5cm
    LEFT: 72, // ~1.9cm
    RIGHT: 72, // ~1.9cm
  },
} as const;

export const CONTENT_AREA = {
  WIDTH:
    A4_DIMENSIONS.WIDTH -
    A4_DIMENSIONS.MARGINS.LEFT -
    A4_DIMENSIONS.MARGINS.RIGHT,
  HEIGHT:
    A4_DIMENSIONS.HEIGHT -
    A4_DIMENSIONS.MARGINS.TOP -
    A4_DIMENSIONS.MARGINS.BOTTOM,
} as const;
