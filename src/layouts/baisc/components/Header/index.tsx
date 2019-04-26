import React, { FunctionComponent, memo } from 'react'
import style from './index.module.scss'
import { Icon, Avatar, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { xl } from '@/config/responsive'
import MediaQuery from 'react-responsive'

interface IProps {
    username: string

    logout(): void

    onChange(): void
}

const { Item } = Menu
const menu = (logout: () => void) => (
    <Menu>
        <Item>
            <Link to="/">首页</Link>
        </Item>
        <Item onClick={logout}>注销</Item>
    </Menu>
)
const Header: FunctionComponent<IProps> = ({ username, onChange, logout }) => (
    <header className={style.header}>
        <MediaQuery maxWidth={xl}>
            <Icon className={style.icon} type="menu-fold" onClick={onChange} />
        </MediaQuery>
        <Dropdown overlay={menu(logout)}>
            <section className={style.user}>
                <Avatar icon="user" />
                <span className={style.username}>{username}</span>
            </section>
        </Dropdown>
    </header>
)

export default memo(Header)
