const Koa = require('koa');
const router = require('koa-router')();
const body = require('koa-bodyparser');
const port = process.env.PORT || 3000;

const agent = require('./agent');

const app = new Koa();



router.get('/', async ctx => {
    ctx.body = agent.dialogflowFirebaseFulfillment;
})


app.use(body()).use(router.routes()).use(router.allowedMethods());

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Runngin on ${port} port!`)
});