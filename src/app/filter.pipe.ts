import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:any[], searchkey:string,na:string):any[] {
    const result:any=[]
if(!products || searchkey=="" || na==""){
  return products
}else{
  products.forEach((item:any)=>{
     if(item[na].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
      result.push(item)
     }
  })
}
return result
  }


}
