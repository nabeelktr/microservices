import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader" 

import {ProductHandlers} from '../../../proto/productpackage/Product'
import { ProductModel } from "../../db/schemas/productSchema"
import { ProtoGrpcType } from "../../../proto/product"

const PORT = 8082



const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../protos/product.proto'))
const grpcObject = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const productPackage = grpcObject.productpackage

const server = new grpc.Server()

const grpcServer = () => {
    server.bindAsync(`0.0.0.0:${PORT}`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if(err){
                console.log(err);
                return
            }
            console.log('your server started on port ', port);
        }
    )
}

server.addService(productPackage.Product.service, {

    GetProduct : async (req, res) => {
        const product = await ProductModel.findById(req.request.id)
        res(null,  {
            name: product?.name,
            price: product?.price,
            description: product?.description,
            image: product?.image,
            category: product?.category,
            id: product?.id
        })
    }
} as ProductHandlers)

export default grpcServer;