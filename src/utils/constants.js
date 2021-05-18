export const SHAPE = "SHAPE";
export const LINE = "LINE";
export const FULL = "full";
export const QUARTER = "quarter";
export const LINEAR = "linear";
export const SQUARE = "square";
export const HALF = "half";
export const APP_ID = "3074457358398558776";
export const AVAILABLE_AREA_TYPES = [FULL, HALF, QUARTER];
export const AVAILABLE_SHAPES = {
  RECTANGLE: 3,
  ELLIPSE: 4,
  TRIANGLE: 5,
  PARALLELOGRAM: 10,
};

export const SHAPE_NAME = {
  3: "Rectangle",
  4: "Ellipse",
  5: "Triangle",
  10: "Parallelogram",
};

export const SCALES = {
  metric: ["1:1000", "1:500", "1:300", "1:200", "1:100", "1:60", "1:50", "1:40", "1:30", "1:20", "1:10", "1:5", "1:2", "1:1", "10:1", "20:1", "50:1"],
  civil: ['1":1"', '1"=10\'0"', '1"=20\'0"', '1"=30\'0"', '1"=40\'0"', '1"=50\'0"', '1"=60\'0"', '1"=70\'0"', '1"=80\'0"', '1"=90\'0"', '1"=100\'0"'],
};

export const SCALE_UNITS = ["m/m²", "ft/ft²"];

export const SCALE_UNITS_FORMATTER = {
  "m/m²": {
    linear: "m",
    square: "m²",
  },
  "ft/ft²": {
    linear: "ft",
    square: "ft²",
  },
};

export const SHAPE_ICONS = {
  // Arrow Left
  13: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle>
    </svg>
  ),
  // Arrow Left Right
  21: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="currentColor" stroke-width="2" d="M22.586 12L15 4.414V9H9V4.414L1.414 12 9 19.586V15h6v4.586L22.586 12z"></path>
    </svg>
  ),
  // Arrow Right
  12: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-arrow-right" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M13 4.828V8H4v8h9v3.172L21.172 12 13 4.828zM3 6h8V2.284a1 1 0 011.678-.735L24 12 12.678 22.45A1 1 0 0111 21.717V18H3a1 1 0 01-1-1V7a1 1 0 011-1z"
      ></path>
    </svg>
  ),
  // Barrel
  26: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-barrel" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M2 4.245C2 3.005 6.477 2 12 2s10 1.005 10 2.245v14.51C22 19.995 17.523 21 12 21S2 19.995 2 18.755V4.245zM4 7.15v10.84c.332.133.797.273 1.367.401C7.075 18.774 9.45 19 12 19s4.925-.226 6.633-.609A9.117 9.117 0 0020 17.99V7.15c-1.979.569-4.793.85-8 .85s-6.021-.281-8-.85zm0-2.096c.327.11.713.215 1.148.313C6.934 5.767 9.381 6 12 6c2.619 0 5.066-.232 6.852-.633.435-.098.82-.204 1.148-.313V5.01a9.117 9.117 0 00-1.367-.402C16.925 4.226 14.55 4 12 4s-4.925.226-6.633.609A9.117 9.117 0 004 5.01v.043z"
      ></path>
    </svg>
  ),
  // Brace Left
  23: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-brace-left" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M11 12a4.99 4.99 0 012 4v3a2 2 0 002 2h1a1 1 0 010 2h-1a4 4 0 01-4-4v-3a3 3 0 00-3-3 1 1 0 010-2 3 3 0 003-3V5a4 4 0 014-4h1a1 1 0 010 2h-1a2 2 0 00-2 2v3a4.992 4.992 0 01-2 4z"
      ></path>
    </svg>
  ),
  // Brace Right
  24: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-brace-right" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M13 12a4.992 4.992 0 01-2-4V5a2 2 0 00-2-2H8a1 1 0 110-2h1a4 4 0 014 4v3a3 3 0 003 3 1 1 0 010 2 3 3 0 00-3 3v3a4 4 0 01-4 4H8a1 1 0 010-2h1a2 2 0 002-2v-3a4.99 4.99 0 012-4z"
      ></path>
    </svg>
  ),
  // Bubble
  6: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-babble" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M13.073 19l-4.646 3.65A1.5 1.5 0 016 21.472V19a5 5 0 01-5-5V7a5 5 0 015-5h12a5 5 0 015 5v7a5 5 0 01-5 5h-4.927zM8 20.443L12.381 17H18a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v7a3 3 0 003 3h2v3.443z"
      ></path>
    </svg>
  ),
  // Circle
  4: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-oval" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle>
    </svg>
  ),
  // Cloud
  22: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-cloud" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M11.358 4.095c-.592 0-1.157.344-1.512.945L8.96 6.543l-1.638-.6a.783.783 0 00-.272-.048c-.521 0-1.021.546-1.021 1.305 0 .064.003.127.01.19l.236 2.033-2.028.282c-.616.086-1.152.744-1.152 1.595 0 .666.333 1.233.798 1.48l1.594.842-.595 1.701a2.65 2.65 0 00-.147.877c0 1.312.91 2.305 1.938 2.305.286 0 .56-.073.816-.216l1.81-1.013 1.03 1.8c.304.529.79.829 1.294.829.466 0 .913-.254 1.221-.712l1.196-1.782 1.752 1.238c.24.17.505.256.781.256.826 0 1.572-.814 1.572-1.905l-.001-.061-.037-1.429 1.315-.556c.857-.362 1.473-1.325 1.473-2.454 0-1.218-.717-2.234-1.661-2.523l-1.673-.51.204-1.737c.009-.075.013-.152.013-.23 0-.925-.623-1.605-1.296-1.605-.198 0-.387.055-.564.163l-1.96 1.2-1.014-2.063c-.34-.691-.952-1.1-1.596-1.1zm3.236 16.266l-.11.154c-.672.906-1.7 1.485-2.85 1.485-1.313 0-2.464-.752-3.112-1.883a3.748 3.748 0 01-1.839.483c-2.227 0-4.033-1.97-4.033-4.4 0-.553.093-1.081.264-1.569C1.78 14.032 1 12.766 1 11.3c0-1.883 1.29-3.438 2.958-3.67a3.741 3.741 0 01-.025-.43c0-1.878 1.396-3.4 3.117-3.4.347 0 .68.062.992.176C8.742 2.787 9.966 2 11.358 2c1.232 0 2.331.616 3.054 1.581l.422.69.542-.266a3.13 3.13 0 011.116-.205c1.873 0 3.391 1.657 3.391 3.7 0 .16-.009.319-.027.474C21.67 8.528 23 10.344 23 12.5c0 1.997-1.142 3.703-2.752 4.384l.002.116c0 2.21-1.642 4-3.667 4a3.42 3.42 0 01-1.846-.544l-.143-.095z"
      ></path>
    </svg>
  ),
  // Cross
  25: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-cross" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M15 4H9v5H4v6h5v5h6v-5h5V9h-5V4zm2 3h4a1 1 0 011 1v8a1 1 0 01-1 1h-4v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4H3a1 1 0 01-1-1V8a1 1 0 011-1h4V3a1 1 0 011-1h8a1 1 0 011 1v4z"
      ></path>
    </svg>
  ),
  // Hexagon
  17: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-hexagon" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M16.817 4H7.183l-4.4 8 4.4 8h9.634l4.4-8-4.4-8zm1.468-1.482l4.95 9a1 1 0 010 .964l-4.95 9a1 1 0 01-.876.518H6.59a1 1 0 01-.876-.518l-4.95-9a1 1 0 010-.964l4.95-9A1 1 0 016.591 2H17.41a1 1 0 01.876.518z"
      ></path>
    </svg>
  ),
  // Octagon
  18: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-octagon" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M15.172 4H8.828L4 8.828v6.344L8.828 20h6.344L20 15.172V8.828L15.172 4zm1.12-1.707l5.415 5.414a1 1 0 01.293.707v7.172a1 1 0 01-.293.707l-5.414 5.414a1 1 0 01-.707.293H8.414a1 1 0 01-.707-.293l-5.414-5.414A1 1 0 012 15.586V8.414a1 1 0 01.293-.707l5.414-5.414A1 1 0 018.414 2h7.172a1 1 0 01.707.293z"
      ></path>
    </svg>
  ),
  // Parallelogram
  10: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-parall" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M6.463 5L2.544 19h14.993l3.919-14H6.463zm-.758-2h17.07a1 1 0 01.962 1.27l-4.479 16a1 1 0 01-.963.73H1.225a1 1 0 01-.962-1.27l4.479-16A1 1 0 015.705 3z"
      ></path>
    </svg>
  ),
  // Pentagon
  16: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-pentagon" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M11.976 3.28l-8.791 7.052L6.7 20h10.6l3.515-9.666-8.84-7.053zm10.964 7.062l-4 11A1 1 0 0118 22H6a1 1 0 01-.94-.658l-4-11a1 1 0 01.314-1.122l9.975-8a1 1 0 011.249-.002l10.026 8a1 1 0 01.316 1.124z"
      ></path>
    </svg>
  ),
  // Pill
  15: "",
  // Predefined Process
  20: (
    <svg viewBox="0 0 24 24" id="newlayout__predefined-process" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13 2H8v14h8V5zm2 0v14h2V5h-2zM6 5H4v14h2V5z"
      ></path>
    </svg>
  ),
  // Rectangle
  3: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-square" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="currentColor" stroke-width="2" d="M3 3h18v18H3z"></path>
    </svg>
  ),
  // Rhombus
  8: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-rhombus" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M12 2.617L2.617 12 12 21.383 21.383 12 12 2.617zm.707-2.121l10.797 10.797a1 1 0 010 1.414L12.707 23.504a1 1 0 01-1.414 0L.496 12.707a1 1 0 010-1.414L11.293.496a1 1 0 011.414 0z"
      ></path>
    </svg>
  ),
  // Rounder
  7: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-rounded" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm0-2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
      ></path>
    </svg>
  ),
  // Star
  11: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-star" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M16.985 19.501l-.952-5.55 4.033-3.932-5.574-.81L12 4.16 9.508 9.21l-5.574.81 4.033 3.931-.952 5.551L12 16.881l4.985 2.62zM12 19.14l-5.704 2.999A1.08 1.08 0 014.729 21l1.09-6.351-4.616-4.499a1.08 1.08 0 01.599-1.842l6.377-.927 2.853-5.779a1.08 1.08 0 011.936 0l2.853 5.78 6.377.926a1.08 1.08 0 01.599 1.842l-4.615 4.499L19.272 21a1.08 1.08 0 01-1.568 1.139l-5.704-3z"
      ></path>
    </svg>
  ),
  // Text Rect
  14: "",
  // Trapeze
  19: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-trapeze" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M6.649 3.98l-3.2 15.99H20.56l-3.2-15.99H6.65zm-.82-2H18.18a1 1 0 01.98.804l3.6 17.99a1 1 0 01-.98 1.196H2.23a1 1 0 01-.981-1.196l3.6-17.99a1 1 0 01.98-.804z"
      ></path>
    </svg>
  ),
  // Triangle
  5: (
    <svg viewBox="0 0 24 24" id="newlayout__shape-triangle" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M12 4.922L4.197 19h15.606L12 4.922zm.875-2.58l9.484 17.175A1 1 0 0121.484 21H2.516a1 1 0 01-.875-1.483l9.483-17.175a1 1 0 011.751 0z"
      ></path>
    </svg>
  ),
};
