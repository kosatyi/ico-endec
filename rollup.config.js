import terser from '@rollup/plugin-terser'
import licence from 'rollup-plugin-license'

const banner = licence({
    banner: {
        content: `This Source Code Form is subject to the terms of the Mozilla Public 
                License, v. 2.0. If a copy of the MPL was not distributed with this 
                file, You can obtain one at https://mozilla.org/MPL/2.0/.`,
    }
})

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/esm/bundle.js',
            format: 'esm',
            plugins: [banner],
        },
        {
            file: 'dist/cjs/bundle.js',
            format: 'cjs',
            plugins: [banner],
        },
        {
            file: 'dist/umd/bundle.js',
            format: 'umd',
            name: 'icoEndec',
            plugins: [banner],
        },
        {
            file: 'dist/umd/bundle.min.js',
            format: 'umd',
            name: 'icoEndec',
            plugins: [terser(),banner],
        },
    ]
}
