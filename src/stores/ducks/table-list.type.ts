export interface ITableListState {
    list: ITableListItem[]
}

export interface IFetchTableListSucPayload {
    list: ITableListItem[]
    pagination: IPagination
}

export enum actionTypes {
    FETCH_TABLE_LIST_SUC = 'table-list/fetch-suc',
    FETCH_TABLE_LIST_FAIL = 'table-list/fetch-fail'
}

export interface IFetchTableListSuc {
    type: actionTypes.FETCH_TABLE_LIST_SUC
    payload: IFetchTableListSucPayload
}

export interface IFetchTalbeListFail {
    type: actionTypes.FETCH_TABLE_LIST_FAIL
    payload: IErrorPaylod
}

export type AllActions = IFetchTableListSuc | IFetchTalbeListFail
