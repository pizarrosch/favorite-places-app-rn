const GOOGLE_API_KEY = 'AIzaSyAB2mA4x6Foh-DbDijb_4CUH77FH_yO9bo';

export function getMapPreview(lat, long) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}