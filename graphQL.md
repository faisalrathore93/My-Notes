### GraphQL Structure
![image](https://raw.githubusercontent.com/imran-parray/My-Notes/master/graphql.png)


### Basic Installation



### Creating basic graphql Endpoint

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


#Defining the schema

```js
const express=require('express')
const expressGql=require('express-graphql')
const { 
GraphQLSchema,
GraphQLObjectType,
GraphQLString
} = require('graphql')

const app = express()
const schema =  new GraphQLSchema({

query : new GraphQLObjectType({
name:'imran',
fields: () => ({
message:{
type: GraphQLString ,
resolve: () => 'Hello world'
}


})

})
})


app.use('/graphql',expressGql({
schema: schema,
graphiql:true

}))


app.listen(3000);

```
