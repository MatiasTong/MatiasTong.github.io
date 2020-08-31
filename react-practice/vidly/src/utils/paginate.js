import _ from "lodash"
export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber -1) * pageSize
    //slice returns an array from the start index to the lenght of the original array, 
    //take returns an array with the specified number of items, 
    //and finally value returns an array from the lodash wrapper object
    return _(items).slice(startIndex).take(pageSize).value();

}