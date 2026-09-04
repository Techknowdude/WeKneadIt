export default function Catagory(props) {
  return (
    <div className="inline-block ">
      <img src={props.image} alt={props.name} className="rounded-lg sm:w-32" />
    </div>
  );
}
