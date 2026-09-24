export default async function getCurrentLocation() {
  let data = {};
  try {
    const res = await fetch("https://ipapi.co/json/");
    data = await res.json();
    console.log(`Location as ${data.city}, ${data.region}`);
  } catch (error) {
    console.error("Failed to fetch location data:", error);
  }
  return data;
}
