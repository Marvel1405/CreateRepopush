export default function Hello({ person }) {
  console.log(person);
  return (
    <>
      <div>
        {person.message} {person.name} {person.seatNumber}
      </div>
    </>
  );
}
