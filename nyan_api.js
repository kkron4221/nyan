var express = require('express')

if (require.main === module){
    main()
}

async function main(){
    try{
        var router = express()

        router.get('/api/status', (req, res) => {
            res.send({ok: nyan})
        })

        var port = parseInt(process.env.PORT || '3000', 10)

        router.listen(port, () => {
            console.info('Listening on ${port}')
        })
    }catch(err){
        console.error(err)
    }
}