module.exports = `

type User {
  id: String
  name: String
  username : String
  password : String
  status: String
  agency: String
  gender: String
  birthday: String
  email :  String
  formations : [ Formation ]
  projects : [ Project ]
}
type Formation{
      id: String
      name: String
      Type: String
      Site: String
      EndDate: String
      Rank: String
      startDate: String
      Formateur: String
}
input  FormationInput{
  name: String
  Type: String
  Site: String
  EndDate: String
  Rank: String
  startDate: String
  Formateur: String
}
type Project{
  id : String
  name: String
  description: String
  site: String
  size : String
  endDate: String
  technology : String
  status: String
  startDate: String
  progress: String
}
input ProjectInput {
  name: String
  description: String
  site: String
  size : String
  endDate: String
  technology : String
  status: String
  startDate: String
  progress: String

}
type Query {
  allUsers: [User!]!
  allFormations: [Formation!]!
  allProjects :[Project!]!
  User(id :String!):User
  Formation(id :String!):Formation
  Project(id:String!):Project
}

type Mutation {
  createUser(name: String!): User!
  addUser( id:String!, 
    name: String,
    username : String,
    status: String,
    agency: String,
    gender: String,
    birthday: String,
    email :  String,
    formations : [FormationInput]
    projects : [ProjectInput]):User!
    

updateUser(id:String!,
  name: String!,
  username : String!,
  status: String!,
  agency: String!,
  gender: String!,
  birthday: String!,
  email :  String!,
  ):User!

  addFormation( 
    id:String!,
    name: String!,
    Type: String!,
    Site: String!,
    EndDate: String!,
    Rank: String!,
    startDate: String!,
    Formateur: String!):Formation!
    updateFormation(id:String!,formations:[FormationInput]):User!
    deleteUser(id:String!,formations:[FormationInput]):User!

    addProject( 
      id:String!,
      name: String!,
      description: String!,
      site: String!,
      size : String!,
      endDate: String!,
      technology : String!,
      status: String!,
      startDate: String!,
      progress: String!):Project!
      updateProject(id:String!,projects:[ProjectInput]):User!
      
}
`;
