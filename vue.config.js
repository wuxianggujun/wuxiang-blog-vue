const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭eslint校验.
    devServer: {
        //配置前端项目的访问端口
        port: 9999,

    },
    lintOnSave: false //关闭eslint检查
})
