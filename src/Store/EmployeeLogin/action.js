import { REDUCER_CONSTANTS } from "../Constants/Constants"


export const changeData=(item)=>{
{
    console.log(item.target.value);
    return {
        type:item.target.name,
        data: item.target.value
    }
}
}
