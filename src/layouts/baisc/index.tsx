import { memo } from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/stores/create'
import { authAction, logoutAction } from '@/stores/ducks/global'
import Basic from './components'
import { RouteComponentProps } from 'react-router'

const mapStateToProps = (state: AppState) => ({
    loading: state.loading.auth,
    username: state.global.username,
    routes: state.global.routes
})
const mapDispatchToProps = (dispatch: any) => ({
    auth: () => dispatch(authAction()),
    logout: () => dispatch(logoutAction())
})

export interface IProps
    extends ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps>,
        RouteComponentProps {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(Basic))
