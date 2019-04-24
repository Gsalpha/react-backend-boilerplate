import React, { FunctionComponent, memo } from 'react'
import { Button, Form, Input } from 'antd'
import style from './index.module.scss'
import { FormComponentProps } from 'antd/lib/form/Form'
import Document from 'react-document-title'
import { connect } from 'react-redux'
import { AppState } from '@/stores/create'
import { loginAction } from '@/stores/ducks/global'
import { ILoginPayload } from '@/stores/ducks/global.type'

const { Item, create } = Form

const mapStateToProps = (state: AppState) => ({ loading: state.loading.login })

const mapDispatchToProps = (dispatch: any) => ({
    login: (payload: ILoginPayload) => dispatch(loginAction(payload))
})

interface IProps extends FormComponentProps<ILoginPayload> {
    login: typeof loginAction
    loading: boolean
}

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
const Login: FunctionComponent<IProps> = ({ form, loading, login }) => {
    const { getFieldDecorator, validateFields } = form
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
        </Document>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(create()(memo(Login)))
