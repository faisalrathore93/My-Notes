#Basic Installation



#Creating basic graphql Endpoint

```js
const express=require('express');
const expressGql=require('express-graphql');

const app = express()

//Returning empty graphql object on /graphql endpoint

app.use('/graphql',expressGql({
graphiql:true

}))
app.listen(3000);
```
