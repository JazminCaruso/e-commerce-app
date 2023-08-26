export const GOOGLE_API_KEY = 'AIzaSyCK-6xSRFm9UW2jMDS_1RN9m-LrByMW0R8';
export const URL_MAPS = ({ lat, lng, zoom }) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
export const URL_BASE_GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/';
