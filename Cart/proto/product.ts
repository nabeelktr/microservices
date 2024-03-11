import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProductClient as _productpackage_ProductClient, ProductDefinition as _productpackage_ProductDefinition } from './productpackage/Product';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  productpackage: {
    Product: SubtypeConstructor<typeof grpc.Client, _productpackage_ProductClient> & { service: _productpackage_ProductDefinition }
    ProductRequest: MessageTypeDefinition
    ProductResponse: MessageTypeDefinition
  }
}

