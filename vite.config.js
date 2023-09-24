const path = require('path')
export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
                about: path.resolve(__dirname, 'src/about.html'),
            },
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(-1); // get the file extension
                    let folderName;
                    if (extType === 'jpg' || extType === 'png' || extType === 'svg' || extType === 'webp') {
                        folderName = 'images'; // use images as the folder name for image files
                        } else if (extType === 'css') {
                        folderName = 'css'; // use css as the folder name for css files
                        } else {
                        folderName = 'other'; // use other as the folder name for any other files
                        }
                     return `assets/${folderName}/[name]-[hash][extname]`; // return the output path
                    }
            }
        }
    },
    server: {
        port: 8080
    }
}