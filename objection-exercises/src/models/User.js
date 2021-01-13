const { HasManyRelation, ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['userFullName', 'userHasEduEmail']
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  userHasEduEmail() {
    const useremail = this.email
    console.log(typeof(useremail))
    return useremail.indexOf('.edu') !== -1
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        },
      },
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

module.exports = User
