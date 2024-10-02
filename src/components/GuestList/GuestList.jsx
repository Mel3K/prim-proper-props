import SilverWare from "../SilverWare/SilverWare";


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
    <SilverWare key={guest.id}
    guest={guest}
    />
    ))}
  </tbody>
</table>
</>
)
};

export default GuestList;