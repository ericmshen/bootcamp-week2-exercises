// Write your relation model here!
const { ManyToManyRelation, HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }
    static get relationMappings() {
        const User = require('./User')
        return {
            children: {
                relation: ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'relations.parentId',
                        to: 'relations.childId',
                    },
                    to: 'users.id',
                },
            },
            parents: {
                relation: ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'relations.childId',
                        to: 'relations.parentId',
                    },
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Relation