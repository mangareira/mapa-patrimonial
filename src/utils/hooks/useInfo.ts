import { useContext } from "react"
import ContextInfo from "../context/ContextInfo"

const useInfo = () => useContext(ContextInfo)
export default useInfo