import { Prefix } from '@/config/prefix'

export interface ISetPaginationPayload {
    scope: Prefix
    pagination: IPagination
}

type TPaginationState = { [O in Prefix]?: IPagination }

const initialState: TPaginationState = {
    tableList: {
        pageSize: 0,
        current: 0,
        total: 0
    }
}

export const setPaginationAction = ({
    scope,
    pagination
}: ISetPaginationPayload) => ({
    type: 'SET_PAGINATION',
    payload: { scope, pagination }
})

export default (
    state = initialState,
    action: ReturnType<typeof setPaginationAction>
) => {
    if (action.type === 'SET_PAGINATION') {
        return {
            ...state,
            [action.payload.scope]: {
                ...state[action.payload.scope],
                ...action.payload.pagination
            }
        }
    }
    return state
}
