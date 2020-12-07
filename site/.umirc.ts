import { defineConfig } from 'umi'
import { resolve } from 'path'

export default defineConfig({
  chainWebpack: (memo: any) => {
    memo.resolve.modules.add('src')
    memo.module
      .rule('mdx')
      .test(/\.mdx$/)
      .use('raw')
      .loader('raw-loader')
    memo.module
      .rule('js')
      .include.add(/types|utils|components|hooks/)
      .end()
  },
  mode: 'site',
  title: 'ZStack UI',
  logo: '/logo.png',
  plugins: [],
  define: {
    __ROOT_PATH__: resolve(__dirname, '..')
  },
  alias: {
    '@': resolve(__dirname, 'src'),
    '@zstack/types': '@zstack/types/src/index.ts',
    '@zstack/utils': '@zstack/utils/src/index.ts',
    '@zstack/components': '@zstack/components/src/index.ts',
    '@zstack/hooks': '@zstack/hooks/src/index.ts'
  },
  resolve: {
    includes: ['docs']
  },
  dynamicImport: {
    loading: '@/Loading'
  },
  externals: {
    mermaid: 'window.mermaid'
  },
  scripts: ['https://cdn.bootcdn.net/ajax/libs/mermaid/8.5.2/mermaid.min.js'],
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  }
})
