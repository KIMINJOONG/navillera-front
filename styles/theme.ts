
const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;
const customMediaQueryMin = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

export const size = {
  pc: 1200,
  container: 1100,
  tablet: 768,
  mobile: 576,
}

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1200),
  pcMin: customMediaQueryMin(768), //768이상만
  header: customMediaQuery(1100), //header만
  tablet: customMediaQuery(size.tablet),
  mobile: customMediaQuery(size.mobile),
};

export const color = {
  //brand color
  brand: '#F6C42D',
  // second color
  second: '#FF7A00',
  // third color
  third: '#414141',

  //typo color
  N0: '#ffffff',
  N5: '#F5F5F5',
  N10: '#F0F0F0',
  N15: '#C5C5C5',
  N20: '#D9D9D9',
  N25: '#AAAAAA',
  N30: '#5A544B',
  N40: '#3F3D3C',
  N50: '#292825',
  N55: '#1F1E1D',
  N60: '#181817',
};