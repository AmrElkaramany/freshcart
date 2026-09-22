import { getUserOrders } from "@/CheckoutAction/getUserOrders.action";
import getMyToken from "@/utilities/GetMyToken.utilities";
import { jwtDecode } from "jwt-decode";
import { Package, CreditCard, CheckCircle, Truck } from "lucide-react";

export default async function Allorders() {
  const token = await getMyToken();

  if (!token) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">Please login first</p>
      </div>
    );
  }

  const decodedToken: any = jwtDecode(token);

  const response = await getUserOrders(decodedToken.id);

  if (!response || response.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Package size={60} className="text-gray-300" />

        <h2 className="text-2xl font-bold text-gray-700">
          No Orders Yet
        </h2>

        <p className="text-gray-500">
          You haven't placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            My Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Track and manage your orders
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {response.map((order: any, index: number) => (
            <div
              key={order._id || index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >

              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                    <Package className="text-green-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Order
                    </p>

                    <p className="font-semibold text-gray-800">
                      #{order._id?.slice(-8) || index + 1}
                    </p>
                  </div>
                </div>

                {/* Paid */}
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    order.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <CheckCircle size={17} />

                  {order.isPaid ? "Paid" : "Not Paid"}
                </div>
              </div>

              {/* Order Body */}
              <div className="p-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                  {/* Total */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <span className="text-green-600 font-bold">
                        $
                      </span>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Total
                      </p>

                      <p className="font-bold text-gray-800">
                        {order.totalOrderPrice} EGP
                      </p>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <CreditCard
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Payment
                      </p>

                      <p className="font-semibold text-gray-800 capitalize">
                        {order.paymentMethodType}
                      </p>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                      <Truck
                        size={20}
                        className="text-orange-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Shipping
                      </p>

                      <p className="font-semibold text-gray-800">
                        {order.shippingPrice || 0} EGP
                      </p>
                    </div>
                  </div>

                  {/* Tax */}
                  <div>
                    <p className="text-sm text-gray-500">
                      Tax
                    </p>

                    <p className="font-semibold text-gray-800">
                      {order.taxPrice || 0} EGP
                    </p>
                  </div>

                </div>

                {/* Shipping Address */}
                {order.shippingAddress && (
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Shipping Address
                    </h3>

                    <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-medium text-gray-800">
                          Details:
                        </span>{" "}
                        {order.shippingAddress.details}
                      </p>

                      <p>
                        <span className="font-medium text-gray-800">
                          Phone:
                        </span>{" "}
                        {order.shippingAddress.phone}
                      </p>

                      <p>
                        <span className="font-medium text-gray-800">
                          City:
                        </span>{" "}
                        {order.shippingAddress.city}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}