import postgres from 'postgres'


const sql = postgres('postgres://food:qazwsx@localhost:5434/food')

const createFood = async (food) =>{
await sql`
INSERT INTO food VALUES (${food.id}, ${food.name})
`
}

const getAllFood = async () => {
    const food = await sql`
    SELECT * FROM FOOD`
    return food
}


const  updateFood = async (food) =>{
await sqll `
UPDATE food
SET name = ${food.name}
WHERE id = ${food.id }
`
}


const deteleFood = async (food) =>{
    await sql`
    DELETE FROM food
    WHERE id = ${food.id}
    `
}

export {sql,createFood, getAllFood, updateFood, deteleFood}