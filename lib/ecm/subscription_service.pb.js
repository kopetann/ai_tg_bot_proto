/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
export const protobufPackage = "subscription_service";
export const SUBSCRIPTION_SERVICE_PACKAGE_NAME = "subscription_service";
export function SubscriptionServiceControllerMethods() {
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
            GrpcMethod("SubscriptionService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            GrpcStreamMethod("SubscriptionService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
export const SUBSCRIPTION_SERVICE_NAME = "SubscriptionService";
