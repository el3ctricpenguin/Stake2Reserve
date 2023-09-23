export async function registrationAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, formData);
  return data;
}
