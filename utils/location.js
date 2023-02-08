const GOOGLE_API_KEY = 'YOUR-API-KEY'; 

export function getMapPreview({lat, lng}) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
}

export async function getAddress({lat, lng}) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error('error to fetch address');
  }

  const data =  await resp.json();
  const address = data.results[0].formatted_address;

  return address;
}