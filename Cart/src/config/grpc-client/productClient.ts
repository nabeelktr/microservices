import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader" 
import { ProtoGrpcType } from "../../../proto/product"


const PORT = 8082

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../protos/product.proto'))
const grpcObject = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const PClient = new grpcObject.productpackage.Product(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

export{PClient}