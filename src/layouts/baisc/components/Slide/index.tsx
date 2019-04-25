import React, {
    FunctionComponent,
    memo,
    useCallback,
    useEffect,
    useState
} from 'react'
import style from './index.module.scss'
import { Drawer, Icon, Menu as InternalMenu } from 'antd'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import logo from './logo.svg'
import MediaQuery from 'react-responsive'
import { xl } from '@/config/responsive'

const { SubMenu, Item } = InternalMenu
const renderMenu = (menus: IRoute[]) => {
    return menus.map(item => {
        if (item.routes && item.routes.length) {
            return (
                <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {renderMenu(item.routes)}
                </SubMenu>
            )
        }
        return (
            <Item key={item.path} className={style.item}>
                {item.icon && <Icon className={style.ico} type={item.icon} />}
                <span className={style.span}>
                    <Link to={item.path}>{item.name}</Link>
                </span>
            </Item>
        )
    })
}

const Menu: FunctionComponent<{ pathname: string; menus: IRoute[] }> = ({
    pathname,
    menus
}) => {
    const getSingleOpenKey = useCallback(() => {
        const index = pathname.lastIndexOf('/')
        const openKey = pathname.slice(0, index)
        return openKey || pathname
    }, [pathname])
    const getSingleSelectedKeys = useCallback(() => {
        let short = ''
        if (pathname.lastIndexOf('/') === pathname.length - 1) {
            short = pathname.slice(0, pathname.length - 1)
        }
        return [pathname, short]
    }, [pathname])
    const [openKeys, setOpenKeys] = useState([getSingleOpenKey()])
    const [selectedKeys, setSelectKeys] = useState(getSingleSelectedKeys())
    useEffect(() => {
        setOpenKeys([getSingleOpenKey()])
        setSelectKeys(getSingleSelectedKeys())
    }, [pathname])
    const handleOpenChange = (openKeys: string[]) => {
        setOpenKeys(openKeys)
    }
    return (
        <InternalMenu
            className={style.ctx}
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
        >
            {renderMenu(menus)}
        </InternalMenu>
    )
}

const Slide: FunctionComponent<
    {
        visibie: boolean
        onChange(): void
        menus: IRoute[]
    } & RouteComponentProps
> = ({ visibie, onChange, location: { pathname }, menus }) => (
    <>
        <MediaQuery minWidth={xl}>
            <section className={style.menu}>
                <h1>
                    <img src={logo} alt="react app" />
                    <span>REACT BOILERPLATE</span>
                </h1>
                <Menu pathname={pathname} menus={menus} />
            </section>
        </MediaQuery>
        <MediaQuery maxWidth={xl}>
            <Drawer
                placement="left"
                visible={visibie}
                onClose={onChange}
                className={style['wrapper-drawer']}
            >
                <Menu pathname={pathname} menus={menus} />
            </Drawer>
        </MediaQuery>
    </>
)
export default memo(withRouter(Slide))
