let env = process.env.NODE_ENV || 'development'
console.log(env);
// eslint-disable-next-line no-debugger
debugger
const config = {
    development: {
        baseUrl: 'http://localhost:8080'
    },
    prod: {
        baseUrl: 'http://wuxianggujun:8080'
    }
}
export default config[env]