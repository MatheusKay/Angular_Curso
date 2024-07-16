import { inject } from "@angular/core"
import { ProductsService } from "../services/products.service"
import { ActivatedRouteSnapshot } from "@angular/router"

export const editProduct = (route: ActivatedRouteSnapshot) => {
  const productsService = inject(ProductsService)
  return productsService.get(route.paramMap.get('id') as string)
}
