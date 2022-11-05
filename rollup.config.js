import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

const rollupConfig = [
  {
    input: 'src/lib/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      // {
      //   file: packageJson.module,
      //   format: 'esm',
      //   sourcemap: true,
      // },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies),
      'react/jsx-runtime',
    ],
  },
  {
    input: 'dist/lib/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]

export default rollupConfig
