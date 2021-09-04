export const getDay = (dayPrefix) =>{
    const dayobj = {
        "tue": 'Tuesday',
        "wed": "Wednesday",
        "thu": "Thursday",
        "sat": "Saturday"
    }
    return dayobj[dayPrefix.toLowerCase()] || `${dayPrefix}day`
}