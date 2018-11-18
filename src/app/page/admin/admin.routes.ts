import {Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {BuyFunctionComponent} from './buy-function/buy-function.component';
import {ProductFunctionComponent} from './product-function/product-function.component';
import {AnalyticsFunctionComponent} from './analytics-function/analytics-function.component';
import {AddMaterialComponent} from './product-function/add-material/add-material.component';
import {AddCategoryComponent} from './product-function/add-category/add-category.component';
import {AddProductComponent} from './product-function/add-product/add-product.component';


export const adminRoutes: Routes = [
  {path:"admin",component:AdminComponent,children:[
      {path:"function-buy",component:BuyFunctionComponent},
      {path:"function-product",component:ProductFunctionComponent,children:[
          {path:"add-materials",component:AddMaterialComponent},
          {path:"add-category",component:AddCategoryComponent},
          {path:"add-product",component:AddProductComponent}
        ]},
      {path:"function-analytics",component:AnalyticsFunctionComponent}
    ]}
];
