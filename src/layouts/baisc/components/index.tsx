import React, {
    FunctionComponent,
    memo,
    useEffect,
    useMemo,
    useState
} from 'react'
import { Link, Redirect, Switch } from 'react-router-dom'
import {
    flatRoutes,
    formateBreadcrumb,
    getFilteredMenusFromPermissionRoute
} from '@/utils/route'
import { Routes } from '@/config/routes'
import PrivateRoute from '@/components/PrivateRoute'
import { Spin, Icon, Breadcrumb } from 'antd'
import style from './index.module.scss'
import { IProps } from '@/layouts/baisc'
import Header from './Header'
import Slide from './Slide'
import Document from 'react-document-title'

const antIcon = <Icon type="loading" style={{ fontSize: 80 }} spin />
const routes = flatRoutes(Routes)
const breadcrumb = formateBreadcrumb(Routes)

const Basic: FunctionComponent<IProps> = ({
    loading,
    username,
    location: { pathname },
    routes: authRoutes,
    auth,
    logout
}) => {
    const [menuDrawerVisible, setMenuDrawerVisible] = useState(false)
    const renderTitle = () => {
        const target = routes.find(route => route.path === pathname)
        return target && target.name
            ? `${target.name} - ${process.env.REACT_APP_NAME}`
            : (process.env.REACT_APP_NAME as string)
    }
    const onChange = () =>
        setMenuDrawerVisible(menuDrawerVisible => !menuDrawerVisible)
    const pathSnippets = useMemo(() => pathname.split('/').filter(i => i), [
        pathname
    ])
    const extraBreadcrumbItems = useMemo(
        () => [
            <Breadcrumb.Item key="home">
                <Link to="/">
                    <Icon type="home" />
                </Link>
            </Breadcrumb.Item>,
            ...pathSnippets.map((_, index) => {
                const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
                return (
                    breadcrumb[url] && (
                        <Breadcrumb.Item key={url}>
                            <Link to={url}>{breadcrumb[url].name}</Link>
                        </Breadcrumb.Item>
                    )
                )
            })
        ],
        [pathSnippets]
    )
    useEffect(() => {
        auth()
    }, [auth])
    const authMenus = useMemo(() => {
        return getFilteredMenusFromPermissionRoute(authRoutes)
    }, [authRoutes])
    const renderRoutes = useMemo(
        () =>
            routes
                .map(route => {
                    if (route.redirect) {
                        return (
                            <Redirect
                                exact={true}
                                from={route.path}
                                to={route.redirect}
                                key={route.redirect}
                            />
                        )
                    }
                    if (route.component) {
                        return (
                            <PrivateRoute
                                isAuthorized={authRoutes.includes(route.path)}
                                component={route.component}
                                path={route.path}
                                key={route.path}
                                loading={loading!}
                                exact
                            />
                        )
                    }
                    return null
                })
                .concat(<Redirect key="/exception/404" to="/exception/404" />),
        [authRoutes, loading]
    )
    return (
        <Document title={renderTitle()}>
            <Spin
                indicator={antIcon}
                spinning={loading}
                wrapperClassName={style.spin}
            >
                <section className={style.layout}>
                    <Header
                        username={username}
                        onChange={onChange}
                        logout={logout}
                    />
                    <Slide
                        menus={authMenus}
                        visibie={menuDrawerVisible}
                        onChange={onChange}
                    />
                    <section className={style.container}>
                        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
                        <section className={style.content}>
                            <Switch>{renderRoutes}</Switch>
                        </section>
                    </section>
                </section>
            </Spin>
        </Document>
    )
}

export default memo(Basic)
