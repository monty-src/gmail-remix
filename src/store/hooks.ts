/**
 * store/hooks
 *
 *
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";

/** React hook use app dispatch */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** React hook use app selector */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

