import pkg from './package.json';

export default {
  plugins: [],
  ignore: ['README.md'],
  title: 'oss-style-system',
  public: './public',
  description: pkg.description,
  base: `/${pkg.name}/`,
  version: pkg.version,
  propsParser: true,
  hashRouter: true,
  typescript: true,
  dest: '/docs',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/monokai.css',
        },
      ],
    },
  },
  themeConfig: {
    showPlaygroundEditor: false,
    logo: {
      src: '/oss-style-system/public/logo.png',
      width: 200,
    },
    colors: {
      primary: '#000000',
    },
    codemirrorTheme: 'monokai',
  },
  menu: [
    'Introduction',
    { name: 'Components', menu: ['Intro', 'Buttons', 'Typography'] },
    'Contributing',
    'Code of conduct',
    'Changelog',
  ],
  docgenConfig: {
    propFilter: prop => {
      return /styled-system/.test(prop.parent.fileName);
    },
  },
  filterComponents: files => {
    return files.filter(filepath => /(src)(\/.*)*\.(tsx)$/.test(filepath));
  },
};
