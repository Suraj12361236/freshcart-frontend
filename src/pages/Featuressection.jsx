import { Clock, Gift, Box, RefreshCcw } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Flex row — 4 items */}
        <div className="flex justify-between items-start gap-10">

          {/* Feature 1 */}
          <div className="space-y-4 w-1/4">
            <Clock className="w-12 h-12 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              10 minute grocery now
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get your order delivered to your doorstep at the earliest from
              FreshCart pickup stores near you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4 w-1/4">
            <Gift className="w-12 h-12 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Best Prices & Offers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cheaper prices than your local supermarket, great cashback
              offers to top it off. Get best prices & offers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4 w-1/4">
            <Box className="w-12 h-12 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Wide Assortment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from 5000+ products across food, personal care,
              household, bakery, veg and non-veg & other categories.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-4 w-1/4">
            <RefreshCcw className="w-12 h-12 text-green-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              Easy Returns
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Not satisfied with a product? Return it at the doorstep and get
              a refund within hours. No questions asked policy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
