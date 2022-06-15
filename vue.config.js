const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        //配置前端项目的访问端口
        port: 9999
    }
})
