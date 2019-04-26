import React, { FunctionComponent, memo } from 'react'
import routerExceptionConfig from '@/config/exception'
import style from './index.module.scss'

const Exception: FunctionComponent<{
    type: string
    img?: string
    desc?: string
}> = ({ type, img, desc }) => {
    return (
        <section className={style.exception}>
            <section className={style.img}>
                <img src={img || routerExceptionConfig[type].img} alt={type} />
            </section>
            <section className={style.content}>
                <h1>{type}</h1>
                <p className={style.desc}>
                    {desc || routerExceptionConfig[type].desc}
                </p>
            </section>
        </section>
    )
}

export default memo(Exception)
