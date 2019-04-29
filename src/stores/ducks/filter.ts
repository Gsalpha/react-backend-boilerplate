import { Prefix } from '@/config/prefix'

export interface IFilter {
    [propName: string]: any
}

export interface ISetFilterPayload extends IFilter {
    scope: Prefix
}

type TFilterState = { [O in Prefix]?: IFilter }

const initialState: TFilterState = {
    tableList: {}
}

export const setFilterAction = ({ scope, ...payload }: ISetFilterPayload) => ({
    type: 'SET_FILTER',
    payload: { scope, ...payload }
})

export default (
    state = initialState,
    action: ReturnType<typeof setFilterAction>
) => {
    if (action.type === 'SET_FILTER') {
        const { scope, ...rest } = action.payload
        return {
            ...state,
            [scope]: { ...rest }
        }
    }
    return state
}
