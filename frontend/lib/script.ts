import { Location } from "./interface";

export function printAddress(address: Location){
    const { street, city, state, country, postalCode } = address
    return `${street}${street && ","} ${city}, ${state}, ${country}. ${postalCode}`
}