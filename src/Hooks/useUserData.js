import { useDispatch, useSelector } from "react-redux"
import { getUserTokening } from "../Redux/userData"


export default function useUserData() {
    const dispatch = useDispatch();

    dispatch(getUserTokening())

    let { isLogin } = useSelector((state) => state.user)

    return {isLogin}
}