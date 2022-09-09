/** 
 * @type {import('next').NextConfig} 
 */

import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.derepenteautista.com.br'],
    },
    eslint: {
        dirs: ['pages', 'utils', 'services', 'components'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
export default nextConfig
