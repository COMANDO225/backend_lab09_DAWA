import { Router } from "express"
import * as Controller from "./controller"
const upload = require('../../utils/multer')

const productRouter = Router()

productRouter.get("/", Controller.findAll)
productRouter.get("/:id", Controller.findOne)
productRouter.post("/",upload.single('image'), Controller.create)
productRouter.put("/:id",upload.single('image'), Controller.update)
productRouter.delete("/:id", Controller.remove)

export default productRouter