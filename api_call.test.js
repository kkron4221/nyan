const assert = require('assert')
const fetch = require('node-fetch')

if(require.main === module){
    main()
}

async function main(){
    try{
        const tests = [
            getApiStatusTest,
        ]

        for(const test of tests){
            try{
                await test()
                console.info('OK ${test.name}')
            }catch(err){
                console.info('NG ${test.name}')
                console.error(err)
            }
        }
    }catch(err){
        console.error(err)
    }
}

async function getApiStatusTest(){
    const method = "GET"
    const url = 'http://localhost:3000/api/status'
    const response = await fetch(url, {method})
    const actual = await response.json()
    const expected = {ok: true}

    assert.strictEqual(response.status, 200)
    assert.deepStrictEqual(actual, expected)
    console.info({actual, expected})
}