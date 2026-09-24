export default async function getCategories() {
  console.log(
    `Getting categories`,
  );
  const apiUrl = "http://localhost:3000"; //import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/categories`);
  const data = await response.json();
  return data;
}
