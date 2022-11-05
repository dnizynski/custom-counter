import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

const rollupConfig = {
  input: 'src/lib/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        exclude: ['src/example'],
      },
    }),
  ],
  external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
}

export default rollupConfig
