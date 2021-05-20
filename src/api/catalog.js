import http from "@/api/http"

export const all = async () => {
    const { data } = await http.get('goods')
    return data
}