import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const appDispatch:TAppDispatch = store.dispatch;
