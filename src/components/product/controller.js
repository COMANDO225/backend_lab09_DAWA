import prisma from "../../db";
import  { success, failed }  from "../../responses";
import cloudinary from "../../utils/cloudinary";

export const findAll = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        success({ req, res, data: products });
    } catch (error) {
        return failed({ res, error });
    }
};

export const findOne = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = await prisma.product.findUnique({
        where: { id },
        });
        return success({ res, data: category });
    } catch (error) {
        console.log(error);
        return failed({ res, error });
    }
};
export const create = async (req, res) => {
    const { name, price, discount, category } = req.body;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const product = await prisma.product.create({
        data: {
            name,
            price: Number(price),
            discount: Number(discount),
            category: Number(category),
            url_image: result.secure_url,
            cloudinary_id: result.public_id,
        },
        });
        return success({ res, data: product, status: 201 });
    } catch (error) {
        return failed({ res, error });
    }
};

export const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = await prisma.product.update({
        where: { id },
        data: req.body,
        });
        return success({ res, data: category });
    } catch (error) {
        return failed({ res, error });
    }
};

export const remove = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = await prisma.product.delete({
        where: { id },
        });
        return success({ res, data: category });
    } catch (error) {
        return failed({ res, error });
    }
};