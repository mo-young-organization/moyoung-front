import { instance } from "./create"

// 낙내암 중복 post요청
export const nickNameDuplicatePost = async(req) => {
    console.log(instance)
    console.log(import.meta.env.VITE_BASE_API)
    
    try {
        const data = await instance.post(`/displayname`,req)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}