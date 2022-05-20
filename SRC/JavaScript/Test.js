paginatedDataArray = FilteredDataArray.filter((item)=>{
    if (paginationObject.date <= FromDate && ToDate > paginationObject.date){
        return item
    }
})