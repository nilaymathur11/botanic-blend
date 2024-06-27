const router = require('express').Router();
const { addProductController, viewAllProductsController, deleteProductController, getProductController, updateProductController,viewImagesController } = require('../../controllers/website/products.controller');
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const productPicUpload = upload.fields([{ name: 'product_thumbnail', maxCount: 1 }, { name: 'product_images', maxCount: 8 }])

router.post('/add-product', productPicUpload, addProductController);
router.get('/view-product-image/:imageName', viewImagesController);
router.post('/view-products', viewAllProductsController);
router.post('/get-product/:id', getProductController);
router.put('/update-product/:id', updateProductController);
router.delete('/delete-product/:id', deleteProductController);

module.exports = router;