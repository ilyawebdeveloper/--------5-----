import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { cartSlice } from '../store/slice';

const rootActions = { 
    ...cartSlice.actions
}

export const useActions = () => {
    const dispath = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispath), [dispath])
}