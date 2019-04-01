
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: './',
  targets: {
    ie: 9,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'react-animation',
      dll: true,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
