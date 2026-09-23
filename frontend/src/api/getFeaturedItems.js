export default async function getFeaturedItems(location) {
  console.log(
    `Getting featured items from ${location.latitude}, ${location.longitude}`,
  );
  const apiUrl = "http://localhost:3000"; //import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/featured_items`);
  const data = await response.json();
  console.log(`recieved ${data.length} records`);

  data.forEach((element) => {
    console.log(element);
  });
  return data;
}
