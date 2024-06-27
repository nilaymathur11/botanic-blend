const { addProductModel } = require('../../models/website/products.model');
const fs = require('fs');

const imageDir = __dirname.split("app/")[0] + "uploads/";

const viewAllProductsController = async (req, res) => {
    addProductModel.find()
        .then((data) => {
            let output = {
                status: 'true',
                message: 'Success',
                data
            }
            res.send(output);
        })
        .catch((err) => {
            let output = {
                status: 'false',
                message: err
            }
            res.send(output);
        })
}

const addProductController = async (req, res) => {
    try {
        let product_images = [];
        req.files['product_images'].forEach((v) => {
            product_images.push("view-product-image/" + v.filename)
        })
        const productData = {
            product_name: req.body.product_name,
            product_desc: req.body.product_desc,
            product_price: req.body.product_price,
            product_thumbnail: "view-product-image/" + req.files['product_thumbnail'][0].filename,
            product_images: product_images,
        }
        const finalData = new addProductModel(productData);
        finalData.save()
            .then(() => {
                let output = {
                    status: 'true',
                    message: 'Product Added Successfully'
                }
                res.send(output);
            })
            .catch((err) => {
                let errorsMsg = [];
                for (const key in err.errors) {
                    errorsMsg.push(err.errors[key].message)
                }
                let output = {
                    status: 'false',
                    message: errorsMsg
                }
                res.send(output);
            })
    } catch (error) {
        let output = {
            status: 'false',
            message: error
        }
        res.send(output);
    }

}

const deleteProductController = async (req, res) => {
    addProductModel.findByIdAndUpdate(req.params.id, { deleted_at: Date.now() })
        .then((data) => {
            let output = {
                status: 'true',
                message: 'deleted Successfully',
            }
            res.send(output);
        })
        .catch((err) => {
            let output = {
                status: 'false',
                message: err
            }
            res.send(output);
        })
}

const getProductController = async (req, res) => {
    addProductModel.findOne({ _id: req.params.id })
        .then((data) => {
            let output = {
                status: 'true',
                message: 'Success',
                data
            }
            res.send(output);
        })
        .catch((err) => {
            let output = {
                status: 'false',
                message: err
            }
            res.send(output);
        })
}

const updateProductController = async (req, res) => {
    addProductModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            let output = {
                status: 'true',
                message: 'Updated Successfully',
            }
            res.send(output);
        })
        .catch((err) => {
            let output = {
                status: 'false',
                message: err
            }
            res.send(output);
        })
}

const viewImagesController = async (req, res) => {
    let fileData = await fs.readFileSync(imageDir + req.params.imageName)
    try {
        if (fileData) {
            res.setHeader("Content-Type", "image/jpg");
            res.send(fileData);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addProductController,
    viewAllProductsController,
    deleteProductController,
    getProductController,
    updateProductController,
    viewImagesController,
}