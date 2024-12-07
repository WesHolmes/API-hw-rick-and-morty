export default function info({ number, data }) {
  return (
    <>
      <h2> number: {number}</h2>
      <div>name: {data.name}</div>
      <div>Status: {data.status}</div>
      <div>Species: {data.species}</div>
      <div>Gender: {data.gender}</div>
    </>
  );
}
