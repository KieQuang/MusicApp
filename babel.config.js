module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@configs': './src/configs',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@globalStyle': './src/styles/globalStyle.ts',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
