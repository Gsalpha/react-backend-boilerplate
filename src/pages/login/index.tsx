import React, { FunctionComponent, memo, useEffect } from 'react'
import { Button, Form, Icon, Input, Spin } from 'antd'
import style from './index.module.scss'
import { FormComponentProps } from 'antd/lib/form/Form'
import Document from 'react-document-title'
import { connect } from 'react-redux'
import { AppState } from '@/stores/create'
import { authAction, loginAction } from '@/stores/ducks/global'
import { ILoginPayload } from '@/stores/ducks/global.type'
import { RouteComponentProps } from 'react-router'
const antIcon = <Icon type="loading" style={{ fontSize: 80 }} spin />

const { Item, create } = Form

const mapStateToProps = (state: AppState) => ({
    loading: state.loading.login,
    authLoading: state.loading.auth
})

const mapDispatchToProps = (dispatch: any) => ({
    login: (payload: ILoginPayload) => dispatch(loginAction(payload)),
    auth: () => dispatch(authAction())
})

interface IProps
    extends FormComponentProps<ILoginPayload>,
        ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps>,
        RouteComponentProps {}

const rules = {
    username: [
        {
            required: true,
            message: 'Please input your username!'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please input your Password!'
        }
    ]
}
const Login: FunctionComponent<IProps> = ({
    form,
    loading,
    login,
    authLoading,
    auth
}) => {
    const { getFieldDecorator, validateFields } = form
    useEffect(() => {
        auth()
    }, [auth])
    const submit = () => {
        validateFields((error, payload) => {
            if (!error) {
                console.log(payload)
                login(payload)
            }
        })
    }
    return (
        <Document title="登录">
            <Spin
                indicator={antIcon}
                spinning={authLoading}
                wrapperClassName={style.spin}
            >
                <main className={style.con}>
                    <header className={style.header}>
                        <h1>{process.env.REACT_APP_NAME}</h1>
                    </header>
                    <section className={style.form}>
                        <Form>
                            <Item>
                                {getFieldDecorator('username', {
                                    rules: rules.username
                                })(
                                    <Input
                                        size="large"
                                        autoFocus
                                        placeholder="账号"
                                    />
                                )}
                            </Item>
                            <Item>
                                {getFieldDecorator('passsword', {
                                    rules: rules.password
                                })(
                                    <Input
                                        size="large"
                                        type="password"
                                        placeholder="密码"
                                    />
                                )}
                            </Item>
                            <Item>
                                <Button
                                    loading={loading}
                                    className={style.loginBtn}
                                    size="large"
                                    type="primary"
                                    onClick={submit}
                                >
                                    登录
                                </Button>
                            </Item>
                        </Form>
                    </section>
                </main>
            </Spin>
        </Document>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(create()(memo(Login)))
