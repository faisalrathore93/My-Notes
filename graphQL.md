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


# Defining the schema

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

# Fundamentals

## Schema
The SDL is an language which is used to define the scheman of an Graphql API.

### Defining an Type (object)
The example can be : Where we have a type which have two peopers `name` and `id`

```
type person{
name: String!
id: Int!
}
```

#### Relation between types

The one type can be related to another type

```
type person{
name: String!
id: Int!
}

type post{
title: String!
author: Person
}
```
So the author of an post can be a person






### Finding Schema of an server

You have to send the fallowing json data in the request
```
fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}
fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}
fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}

query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}
```
##### the response will be something like this
```
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "Mutation"
      },
      "types": [
        {
          "inputFields": null,
          "name": "AddToUserPostsPayload",
          "description": null,
          "interfaces": [],
          "enumValues": null,
          "fields": [
            {
              "name": "postsPost",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            {
              "name": "authorPerson",
...
...
...
```

Now go to [https://apis.guru/graphql-voyager/](https://apis.guru/graphql-voyager/) and paste the response to generate the map of an schema

<IMAGE HERE>
  
  
 Now this image defines the schma of an graphql server at the same time we can click on any query at the left of screen
 to know the type of arguments it accept
 
 #####Example:
 ```js
 allPersons(
filter:PersonFilter,
orderBy:PersonOrderBy,
skip:Int,
after:String,
before:String,
firs:tInt,
last:Int
):[Person!]!
```

you can click on each argument to know more


## Retriveing data

one you get the map lets start queries the server



#### Simple Queru
##### Req:
```
{
  allPersons{
  id
}
}
```

##### Res
```
{
  "data": {
    "allPersons": [
      {
        "id": "ck2g0smzu1m9201858ata1vxj"
      },
      {
        "id": "ck2g0sn1i1m980185e56zc5n7"
      },
      {
        "id": "ck2g0sn341m9c01855ljshtkt"
      }
    ]
  }
}
```

#### Quering Relational objects

In the request 2 you can see we are quering an relational objects. Here we are querying name of all persons and then an posts field which is an seperate object so its necessary for us to call atleast one peopery of that object so we can call id and the title of posts from post table.


##### req2
```
{
  allPersons{
  name
    posts {
      id
      title
    }
}
}
```

##### Res
```
{
  "data": {
    "allPersons": [
      {
        "name": "Johnny",
        "posts": [
          {
            "id": "ck2g0smzv1m9301853pwaasij",
            "title": "GraphQL is awesome"
          },
          {
            "id": "ck2g0smzv1m940185beexfiei",
            "title": "Relay is a powerful GraphQL Client"
          }
        ]
      },
      {
        "name": "Sarah",
        "posts": [
          {
            "id": "ck2g0sn1j1m990185h1fefszs",
            "title": "How to get started with React & GraphQL"
          }
        ]
      },
      {
        "name": "Alice",
        "posts": []
      }
    ]
  }
}
```

## Using arguments
Now lets say i want to using skip argument in the allperson function. It will skip the 1st person.


##### Req
```
{
allPersons(skip:1)
 {
  id,
  name
} 
}
```

##### Res

```
{
  "data": {
    "allPersons": [
      {
        "id": "ck2g0sn1i1m980185e56zc5n7",
        "name": "Sarah"
      },
      {
        "id": "ck2g0sn341m9c01855ljshtkt",
        "name": "Alice"
      }
    ]
  }
}

```

## Using mutation 

You can click at the button and select `Muatations` to know what are the avilable muatations in the API

##### Req

There is one muatation which is `createPerson` Which takes 5 argument but only two of them is necessary. So creating an new
object will be like:

```
mutation{
 createPerson(age:23,name:"imran") {
   id
 }
}

```

##### Res
```
{
  "data": {
    "createPerson": {
      "id": "ck2g4m1pm0s7c0158pkuhp814"
    }
  }
}
```

Let's confirm this

##### Req
```
{
allPersons(last:2){
  id
  name
}
}

```

##### Res
```
{
  "data": {
    "allPersons": [
      {
        "id": "ck2g4i91h0rhr0144cljdv1o6",
        "name": "imran"
      },
      {
        "id": "ck2g4m1pm0s7c0158pkuhp814",
        "name": "imran"
      }
    ]
  }
}
```

Ahhh ! You can see we have created an user with name : imran



#### Example 2
Updating the data

```
mutation{
  updatePerson(id:"ck2g4m1pm0s7c0158pkuhp814",
  age:222) {
    id
  }  
  }
  ```
  
  ##### Res
  
  ```
  
  {
  "data": {
    "updatePerson": {
      "id": "ck2g4m1pm0s7c0158pkuhp814"
    }
  }
}
```

Confirming..

```
{
  allPersons(last:2){
    id,name,age
  }
}


```

##### Res

```

{
  "data": {
    "allPersons": [
      {
        "id": "ck2g4i91h0rhr0144cljdv1o6",
        "name": "imran",
        "age": 23
      },
      {
        "id": "ck2g4m1pm0s7c0158pkuhp814",
        "name": "imran",
        "age": 222
      }
    ]
  }
}
```

## Using Aliases
One of GraphQL’s major strengths is that it lets you send multiple queries in a single request. However, since the response data is shaped after the structure of the fields being requested, you might run into naming issues when you’re sending multiple queries asking for the same fields:

##### Req
```
{
  User(id: "1") {
    name
  }
  User(id: "2") {
    name
  }
}
```

##### Res
```
Error !!!!!!!
```

##### Req

```
{
  first: User(id: "1") {
    name
  }
  second: User(id: "2") {
    name
  }
}
```

##### Res

```
{
  "first": {
    "name": "Alice"
  },
  "second": {
    "name": "Sarah"
  }
}
```
























