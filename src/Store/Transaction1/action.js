export const changeData= (e)=>{


    return {
        type : e.target.name,
        data : e.target.value,
        code : e.target.code
    }
}