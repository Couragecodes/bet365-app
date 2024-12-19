// Define a more detailed size type
type SizeProps = {
  width: number;
  height: number;
};

// PathProps could include more SVG-related attributes
type PathProps = {
  fill: string;
  strokeColor?: string; // Optional strokeColor
  strokeWidth?: number; // Optional strokeWidth
  strokeLinejoin?: string; // Optional strokeLinejoin for better customization
  strokeLinecap?: string; // Optional strokeLinecap
  fillRule?: string; // Optional fillRule for the path
  clipRule?: 'evenodd' | 'nonzero'; // Optional clipRule for the path
  rectFill?: string; // for those svg with rectAngle usage in them
  lineFill?: string;
};

// Extend the SvgProps interface to accept additional properties
declare type SvgProps = {
  size: SizeProps; // Accept size as width and height
  path: PathProps; // Dictionary of paths and their props
  viewBox?: string; // Optional viewBox property for SVGs
  preserveAspectRatio?: string; // Optional preserveAspectRatio for responsive SVG scaling
};
