export default async function getBakeries(location) {
  console.log(
    `Getting bakeries from ${location.latitude}, ${location.longitude}`,
  );
  const apiUrl = "http://localhost:3000"; //import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/bakeries`);
  const data = await response.json();
  return data;
}
