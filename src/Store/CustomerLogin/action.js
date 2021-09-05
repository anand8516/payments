

//mapping values with respect to name as type in action
export const changeData= (e)=>{

    console.log({
        type : e.target.name,
        data : e.target.value
    })
    return {
        type : e.target.name,
        data : e.target.value
    }
}
