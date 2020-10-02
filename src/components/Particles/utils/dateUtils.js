const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export const getMonthName = () => {
    const d = new Date();
    return months[d.getMonth()];
}


export const getMonthNameByDateIndex = (dateIndex) => {
    return months[dateIndex];
}

export const getMonth = () => {
    const d = new Date();
    return d.getMonth();
}

export const getDate = () => {
    var d = new Date();
    return d.getDate();
}

export const getYear = () => {
    var d = new Date();
    return d.getFullYear();
}
