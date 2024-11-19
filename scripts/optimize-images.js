import path from 'path';

const imageminPath = path.resolve('node_modules/imagemin');

console.log(`Imagem in path: ${imageminPath}`);

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

(async () => {
  try {
    // 优化 frontend/src/assets/icons 目录下的图片
    await imagemin(['../frontend/src/assets/icons/*.{jpg,png,svg}'], {
      destination: '../frontend/src/assets/icons',
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminSvgo({
          plugins: [
            { name: 'removeViewBox', active: false }
          ]
        })
      ]
    });

    // 优化 frontend/src/assets/images 目录下的图片
    await imagemin(['../frontend/src/assets/images/**/*.{jpg,png,svg}'], {
      destination: '../frontend/src/assets/images',
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminSvgo({
          plugins: [
            { name: 'removeViewBox', active: false }
          ]
        })
      ]
    });

    console.log('Images optimized');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
})();