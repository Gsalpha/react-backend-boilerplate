import React, { useEffect, FunctionComponent } from 'react'
import nprogress from 'nprogress'
import Loadable, { LoadingComponentProps } from 'react-loadable'

const Loading: FunctionComponent<LoadingComponentProps> = () => {
    useEffect((): any => {
        nprogress.start()
        return nprogress.done
    }, [])
    return <></>
}

export default (loader: any) =>
    Loadable({
        loader,
        loading: Loading
    })
