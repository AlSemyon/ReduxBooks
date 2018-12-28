export function mapToArr(ob) {
    return Object.keys(ob).map(key => ob[key])
}