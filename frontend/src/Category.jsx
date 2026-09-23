export default function Category(props) {
  return (
    <div className="inline-block bg-slate-50 rounded-lg p-2 w-24 min-w-20 sm:w-36 sm:min-w-32">
      <img src={new URL("/images/categories/" + props.image, import.meta.url).href} alt={props.name} className="rounded-lg" />
      <p className="text-center text-sm sm:text-base font-semibold">{props.name}</p>
    </div>
  );
}
