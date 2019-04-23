module.exports = api => {
    api.cache(true)
    const presets = ['react-app']
    const plugins = [
        [
            'import',
            {
                libraryName: 'antd',
                style: true
            }
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        'react-hot-loader/babel'
    ]
    return {
        plugins,
        presets
    }
}
