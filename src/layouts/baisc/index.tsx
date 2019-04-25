import React, { memo } from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/stores/create'
import { authAction } from '@/stores/ducks/global'
import Basic from './components'
import { RouteComponentProps } from 'react-router'

export interface IProps
    extends ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps>,
        RouteComponentProps {}

const mapStateToProps = (state: AppState) => ({
    loading: state.loading.auth,
    username: state.global.username,
    routes: state.global.routes
})
const mapDispatchToProps = (dispatch: any) => ({
    auth: () => dispatch(authAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(Basic))
