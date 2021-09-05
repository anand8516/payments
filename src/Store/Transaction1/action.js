export const changeData= (e)=>{

    console.log({
        // type : e.target.name,
        // data : e.target.value,
        code : e.target.code
    })
    return {
        type : e.target.name,
        data : e.target.value,
        code : e.target.code
    }
}