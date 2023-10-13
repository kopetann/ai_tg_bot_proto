"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBSCRIPTION_SERVICE_NAME = exports.SubscriptionServiceControllerMethods = exports.SUBSCRIPTION_SERVICE_PACKAGE_NAME = exports.protobufPackage = void 0;
/* eslint-disable */
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "subscription_service";
exports.SUBSCRIPTION_SERVICE_PACKAGE_NAME = "subscription_service";
function SubscriptionServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getUser",
            "hasActiveSubscription",
            "addSubscription",
            "addPaidRequests",
            "removeOneFreeRequest",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("SubscriptionService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("SubscriptionService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.SubscriptionServiceControllerMethods = SubscriptionServiceControllerMethods;
exports.SUBSCRIPTION_SERVICE_NAME = "SubscriptionService";
