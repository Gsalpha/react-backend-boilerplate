import React, { FunctionComponent, memo } from 'react'
import style from './index.module.scss'
import { Icon } from 'antd'

interface IProps {
    username: string
}

const Header: FunctionComponent<IProps> = ({ username }) => (
    <header className={style.header}>
        <Icon className={style.icon} type="menu-fold" />
    </header>
)

export default memo(Header)
