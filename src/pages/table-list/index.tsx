import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/stores/create'
import { fetchTableList } from '@/stores/ducks/table-list'
import TableContainr from '@/containers/Table'
import { Prefix } from '@/config/prefix'
import { ColumnProps } from 'antd/lib/table'

const mapStateToProps = (state: AppState) => ({
    loading: state.loading.tableList,
    list: state.tableList.list,
    pagination: state.pagination.tableList!
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchTableList: () => dispatch(fetchTableList())
})

export interface IProps
    extends ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps> {}

const Table = TableContainr<ITableListItem>()
const columns: ColumnProps<ITableListItem>[] = [
    {
        title: '规则名称',
        dataIndex: 'name'
    },
    {
        title: '描述',
        dataIndex: 'desc'
    },
    {
        title: '服务调用次数',
        dataIndex: 'callNo'
    },
    {
        title: ' 状态',
        render: (text, record) => {
            return record.status
        }
    },
    {
        title: '上次调度事件',
        dataIndex: 'updatedAt'
    }
]
const TableList: FunctionComponent<IProps> = ({
    fetchTableList,
    list,
    loading,
    pagination
}) => {
    useEffect(() => {
        fetchTableList()
    }, [fetchTableList])
    return (
        <Table
            columns={columns}
            dataSource={list}
            loading={loading}
            prefix={Prefix.tableList}
            pagination={pagination}
            onChange={() => {}}
        />
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableList)
