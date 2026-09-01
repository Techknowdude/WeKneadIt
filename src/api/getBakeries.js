export default async function getBakeries(location) {
  console.log(
    `Getting bakeries from ${location.latitude}, ${location.longitude}`,
  );
  const resonse = await fetch(new URL("../api/bakeries.json", import.meta.url));
  const data = await resonse.json();
  return data;
}
