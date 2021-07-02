const List = ({ users }) => (      // props destructuring, arrow function implicit return
  <>
    {!!users.length && (                                         // conditional rendering
      <ul>
        {users.map(user =>                                 // mapping over list, key prop
          <li key={user.id}>
            {user.name}
          </li>
        )}
      </ul>
    )}
    {!users.length && <div>No users to list</div>}               // conditional rendering
  </> 
);

const App = () => (
  <List users={[{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }]} />
);