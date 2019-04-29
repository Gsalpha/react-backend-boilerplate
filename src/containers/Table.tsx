import React, { PureComponent } from 'react'
import { Table as InternalTable } from 'antd'
import { connect } from 'react-redux'
import { TableProps } from 'antd/lib/table'
import { Prefix } from '@/config/prefix'
import { setPaginationAction } from '@/stores/ducks/pagination'

const mapDispatchToProps = (dispatch: any) => ({
    setPagination: (prefix: Prefix, pagination: IPagination) =>
        dispatch(
            setPaginationAction({
                scope: prefix,
                pagination
            })
        )
})

interface IProps<T>
    extends TableProps<T>,
        ReturnType<typeof mapDispatchToProps> {
    prefix: Prefix
    pagination: IPagination

    onChange(): void
}

class Table<T> extends PureComponent<IProps<T>> {
    handlePageChange = (page: number, size: number | undefined) => {
        const { prefix, setPagination, onChange } = this.props
        setPagination(prefix, {
            current: page,
            pageSize: size
        })
        onChange()
    }
    handleSizeChange = (page: number, size: number | undefined) => {
        const { prefix, setPagination, onChange } = this.props
        setPagination(prefix, {
            current: 1,
            pageSize: size
        })
        onChange()
    }

    componentWillUnmount() {
        const { prefix, setPagination } = this.props
        setPagination(prefix, { current: 1 })
    }

    render() {
        const { prefix, onChange, pagination, ...rest } = this.props
        return (
            <InternalTable<T>
                {...rest}
                pagination={{
                    showSizeChanger: true,
                    onChange: this.handlePageChange,
                    onShowSizeChange: this.handleSizeChange,
                    ...pagination
                }}
            />
        )
    }
}

export default function TableContainer<T>() {
    return connect(
        null,
        mapDispatchToProps
    )(Table as new (props: IProps<T>) => Table<T>)
}
