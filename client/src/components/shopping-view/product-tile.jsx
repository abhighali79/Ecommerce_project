import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";


function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <div className="w-full max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
      <Card className="w-full max-w-sm mx-auto shadow-none hover:shadow-lg transition-all duration-300 border-none rounded-none overflow-hidden group">
        <div className="cursor-pointer" onClick={() => handleGetProductDetails(product?._id)}>
          <div className="relative">
            <img
              src={product?.image}
              alt={product?.title}
              loading="lazy"
              className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product?.totalStock === 0 ? (
              <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                Out Of Stock
              </Badge>
            ) : product?.totalStock < 10 ? (
              <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                Only {product?.totalStock} left
              </Badge>
            ) : product?.salePrice > 0 ? (
              <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
                Sale
              </Badge>
            ) : null}
          </div>

          <CardContent className="p-3 pt-4">
            <h2 className="text-sm font-bold truncate text-foreground mb-1">
              {brandOptionsMap[product?.brand] || "Brand"}
            </h2>
            <h3 className="text-xs text-muted-foreground truncate mb-2 font-normal">
              {product?.title}
            </h3>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">
                ₹{product?.salePrice > 0 ? product?.salePrice : product?.price}
              </span>
              {product?.salePrice > 0 && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{product?.price}
                </span>
              )}
              {product?.salePrice > 0 && (
                <span className="text-xs text-orange-500 font-semibold">
                  {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                </span>
              )}
            </div>
          </CardContent>
        </div>

        {/* Footer - Only visible on hover contextually in Myntra, but here we keep it simple for now, maybe styled as a full width button */}
        <CardFooter className="p-0 border-t">
          {product?.totalStock === 0 ? (
            <Button className="w-full opacity-60 cursor-not-allowed rounded-none h-10" variant="secondary">
              Out Of Stock
            </Button>
          ) : (
            <Button
              onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
              className="w-full rounded-none h-10 bg-white text-primary hover:bg-primary hover:text-white border-t border-gray-100 font-bold uppercase text-xs tracking-wider transition-all"
            >
              Add to Bag
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default ShoppingProductTile;
