const { ApolloServer, gql } = require('apollo-server');
const { pool } = require('./mysql');

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Todo {
        id: Int!
        description: String
        isFinished: Boolean
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        todos: [Todo]
    }
    #Mutation
    type Mutation {
        deleteTodo(id: Int!): String
        editTodo(description: String, isFinished: Boolean, id: Int!): Todo
        getTodo(id: Int!): Todo
        updateTodo(isFinished: Boolean, id: Int!): Todo
        createTodo(id: Int!, description: String, isFinished: Boolean): Todo
    }
`;

const resolvers = {
    Query: {
        todos: () => {
            return new Promise((resolve, reject) => {
                pool.query('SELECT * FROM todo', (err, todos) => {
                    if (err) {
                        reject(err);
                        console.log('error');
                    } else {
                        resolve(todos);

                        console.log(todos);
                        return todos;
                    }
                });
            });
        },
    },

    Mutation: {
        deleteTodo: async (parent, args) => {
            await pool.query('DELETE FROM todo WHERE id = ?', args.id, (err, todo) => {
                console.log(todo);
                return args;
            });
        },

        getTodo: async (parent, args) => {
            await pool.query('SELECT * FROM todo WHERE ID = ?', args.id, (error, todo) => {
                console.log(todo);
                return args;
            });
        },

        editTodo: async (parent, args) => {
            const array = Object.values(args);
            await pool.query('UPDATE todo SET description = ?, isFinished = ? WHERE id= ?', array, (error, todo) => {
                console.log(todo);
                return args;
            });
        },

        updateTodo: async (parent, args) => {
            const array = Object.values(args);
            await pool.query('UPDATE todo SET isFinished = ? WHERE id= ?', array, (error, todo) => {
                console.log(todo);
                return args;
            });
        },
        createTodo: async (parent, args) => {
            const array = Object.values(args);
            await pool.query('INSERT INTO todo (id, description, isFinished) values (?,?,?) ', array, (err, todo) => {
                return args;
            });
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
