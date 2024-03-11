// Original file: src/config/protos/product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ProductRequest as _productpackage_ProductRequest, ProductRequest__Output as _productpackage_ProductRequest__Output } from '../productpackage/ProductRequest';
import type { ProductResponse as _productpackage_ProductResponse, ProductResponse__Output as _productpackage_ProductResponse__Output } from '../productpackage/ProductResponse';

export interface ProductClient extends grpc.Client {
  GetProduct(argument: _productpackage_ProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _productpackage_ProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _productpackage_ProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  GetProduct(argument: _productpackage_ProductRequest, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _productpackage_ProductRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _productpackage_ProductRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _productpackage_ProductRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  getProduct(argument: _productpackage_ProductRequest, callback: grpc.requestCallback<_productpackage_ProductResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductHandlers extends grpc.UntypedServiceImplementation {
  GetProduct: grpc.handleUnaryCall<_productpackage_ProductRequest__Output, _productpackage_ProductResponse>;
  
}

export interface ProductDefinition extends grpc.ServiceDefinition {
  GetProduct: MethodDefinition<_productpackage_ProductRequest, _productpackage_ProductResponse, _productpackage_ProductRequest__Output, _productpackage_ProductResponse__Output>
}
