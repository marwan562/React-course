import { useDispatch , useSelector } from "react-redux";
import { RootState , AppDispatch } from "../Toolkit/Store/Store";
import { TypedUseSelectorHook } from "react-redux";

export const  useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const  useAppDispatch: () => AppDispatch= useDispatch