export function mapToArr(ob) {
    return Object.keys(ob).map(key => ob[key])
}

export function arrToMap(arr) {
    return arr.reduce( (acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
}