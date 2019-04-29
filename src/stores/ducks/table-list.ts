import {
    actionTypes,
    AllActions,
    IFetchTableListSuc,
    IFetchTableListSucPayload,
    IFetchTalbeListFail,
    ITableListState
} from '@/stores/ducks/table-list.type'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '@/stores/create'
import { Action } from 'redux'
import { setLoadingAction } from '@/stores/ducks/loading'
import { Prefix } from '@/config/prefix'
import { notification } from 'antd'
import { axiosTableList } from '@/services/table/list'
import { setPaginationAction } from '@/stores/ducks/pagination'

// Action creators
const fetchTableListSucAction = (
    payload: IFetchTableListSucPayload
): IFetchTableListSuc => ({
    type: actionTypes.FETCH_TABLE_LIST_SUC,
    payload
})

const fetchTableListFailAction = (
    payload: IErrorPaylod
): IFetchTalbeListFail => ({
    type: actionTypes.FETCH_TABLE_LIST_FAIL,
    payload
})

// Side effects

export const fetchTableList = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async dispatch => {
    dispatch(
        setLoadingAction({
            scope: Prefix.tableList,
            loading: true
        })
    )
    try {
        const {
            data: { list, pagination }
        } = await axiosTableList()
        dispatch(fetchTableListSucAction({ list, pagination }))
        dispatch(
            setPaginationAction({
                scope: Prefix.tableList,
                pagination
            })
        )
        dispatch(
            setLoadingAction({
                scope: Prefix.tableList,
                loading: false
            })
        )
    } catch (e) {
        dispatch(fetchTableListFailAction(e))
        dispatch(
            setLoadingAction({
                scope: Prefix.tableList,
                loading: false
            })
        )
        notification.error({
            message: '获取数据失败',
            description: e.message
        })
    }
}

// reducers
const initialState: ITableListState = {
    list: []
}

export default (state = initialState, action: AllActions) => {
    switch (action.type) {
        case actionTypes.FETCH_TABLE_LIST_SUC:
            return { ...state, list: action.payload.list }
        case actionTypes.FETCH_TABLE_LIST_FAIL:
            return { ...state, list: [] }
        default:
            return state
    }
}
