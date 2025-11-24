import { Product } from "../models/Product"
import { DataError, NetworkError } from "../utils/errorHandler";
import { fetchDisplayDetails, fetchGetPriceWithDiscount, fetchCalculateDiscount, fetchCalculateTax } from "../services/apiService";

async function mainLogic() {
  try {
    const productId = 1;

    const details = await fetchDisplayDetails(productId);
    const product = new Product(details.id,details.title,details.description,details.category,details.price,details.discountPercentage,details.defaultTax);

    console.log(product.displayDetails());


    const discountAmount = product.calculateDiscount();
    console.log(`Discount Amount: $${discountAmount}`);

    const taxAmount = product.calculateTax();
    console.log(`Tax Amount: $${taxAmount}`);

    const finalPrice = product.getPriceWithDiscount();
    console.log(`Final Price After Discount: $${finalPrice}`);

  } catch (error) {
    if (error instanceof NetworkError) {
      console.error(`Network Error: ${error.message}`);
    } else if (error instanceof DataError) {
      console.error(`Data Error: ${error.message}`);
    } else {
      console.error("Error in main logic:", error);
    }
  }
}

mainLogic();

