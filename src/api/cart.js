import http from "@/api/http"

export const all = async () => {
    const { data } = await http.get('cart-goods')
    return data
}
export const add = async (item) => {
    const { data } = await http.post('cart-goods', item)
    return data
}
export const change = async (arg) => {
    const { data } = await http.put('cart-goods', arg)
    return data
}