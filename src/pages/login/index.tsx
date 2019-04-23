import React, { FunctionComponent, memo } from 'react'
import { Button, Form, Input } from 'antd'
import style from './index.module.scss'
import { FormComponentProps } from 'antd/lib/form/Form'
import Document from 'react-document-title'

const { Item, create } = Form
interface IProps extends FormComponentProps<IPayload> {
    loading: boolean
}

interface IPayload {
    username: string
    password: string
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
const Login: FunctionComponent<IProps> = ({ form, loading }) => {
    const { getFieldDecorator, validateFields } = form
    const submit = () => {
        validateFields((error, paylold) => {
            if (!error) {
                console.log(paylold)
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

export default create()(memo(Login))
