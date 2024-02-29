import {sql, createFood, getAllFood, updateFood, deteleFood} from './orm.mjs'


const food = await getAllFood()
console.log(food)

sql.end()

// await saveFood({id:1, name: "first food"});
// await saveFood({id:2, name: "second food"});
