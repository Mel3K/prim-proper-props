

function GuestList (props) {
    console.log(props)
       return (
        <>
<h2>Guest List</h2>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Kid's Meal</th>
    </tr>
  </thead>
  <tbody>
    {GuestList.map(guest => (
      <tr key={guest.id}>
        <td>{guest.name}</td>
        <td>{String(guest.kidsMeal)}</td>
      </tr>
    ))}
  </tbody>
</table>
</>
)
};

export default GuestList;