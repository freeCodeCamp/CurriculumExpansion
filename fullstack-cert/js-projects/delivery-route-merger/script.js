
const route1 = [
    {address: "924 Oak St", distance: 60, windowStart: 1765904400, windowEnd: 1765913760},
    {address: "145 River Rd", distance: 43, windowStart: 1765899900, windowEnd: 1765909680},
    {address: "701 Mountain View Ave", distance: 55, windowStart: 1765905600, windowEnd: 1765914480},
    {address: "33 S. Main St", distance: 72, windowStart: 1765893600, windowEnd: 1765904100},
    {address: "88 Sunset Blvd Apt 12", distance: 85, windowStart: 1765895400, windowEnd: 1765906020},
    {address: "45 Elmwood Dr", distance: 43, windowStart: 1765886400, windowEnd: 1765896900},
    {address: "102 Meadow Ln", distance: 67, windowStart: 1765894800, windowEnd: 1765903560},
    {address: "512 Industrial Way", distance: 45, windowStart: 1765891800, windowEnd: 1765905420},
    {address: "22 Ceder Ave", distance: 23, windowStart: 1765902000, windowEnd: 1765909920},
    {address: "606 Pinecrest Rd", distance: 56, windowStart: 1765897800, windowEnd: 1765908240}
]
const route2 = [
    {address: "18 Market St Suite 200", distance: 98, windowStart: 1765900200, windowEnd: 1765909440},
    {address: "409 Lakeview Ct", distance: 56, windowStart: 1765906800, windowEnd: 1765917600},
    {address: "111 Park Pl", distance: 34, windowStart: 1765900800, windowEnd: 1765907640},
    {address: "77 Willow Creek Rd", distance: 68, windowStart: 1765895400, windowEnd: 1765904220},
    {address: "29 High St", distance: 78, windowStart: 1765906200, windowEnd: 1765915800},
    {address: "505 University Dr", distance: 45, windowStart: 1765889400, windowEnd: 1765897380},
    {address: "345 Grand Ave", distance: 98, windowStart: 1765895400, windowEnd: 1765907100},
    {address: "900 Bay St", distance: 54, windowStart: 1765899600, windowEnd: 1765911960},
    {address: "1200 Washington Blvd", distance: 78, windowStart: 1765902000, windowEnd: 1765908420},
    {address: "25 Harbor View Pkwy", distance: 48, windowStart: 1765893600, windowEnd: 1765898220}
]

const route3 = [
    {address: "678 Lighthouse Rd", distance: 37, windowStart: 1765891800, windowEnd: 1765900740},
    {address: "810 Canyon Dr", distance: 51, windowStart: 1765888200, windowEnd: 1765896720},
    {address: "44 North Pkwy", distance: 67, windowStart: 1765898400, windowEnd: 1765908420},
    {address: "155 South St Apt 3B", distance: 35, windowStart: 1765902600, windowEnd: 1765912500},
    {address: "732 Maplewood Ave", distance: 61, windowStart: 1765894800, windowEnd: 1765907280},
    {address: "13 Colonial Dr", distance: 30, windowStart: 1765905600, windowEnd: 1765915680},
    {address: "202 Capitol Way", distance: 50, windowStart: 1765896600, windowEnd: 1765908600},
    {address: "55 Eagle Blvd", distance: 42, windowStart: 1765893000, windowEnd: 1765901640},
    {address: "303 Liberty Ln", distance: 72, windowStart: 1765884600, windowEnd: 1765895100},
    {address: "999 Commerce St", distance: 81, windowStart: 1765891200, windowEnd: 1765901940},
]

const mergeRoutes = (...routes) => {
    const finalRoute = [];
    for (const route of routes) {
        for (const stop of route) {
            for (const s of finalRoute)
                if (finalRoute != s) {
                s.address === stop.address;
            finalRoute.push(stop)
        }
    }
}
return finalRoute;
}

const sortbyWindows = (stops) => {
    const sortedStops = [];
    for (const stop of stops) {

    }
    return sortedStops;
}