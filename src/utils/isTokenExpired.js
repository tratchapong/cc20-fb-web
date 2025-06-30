export default function isTokenExpired(token) {
 if (!token) return true;
 try {
   const payload = JSON.parse(atob(token.split('.')[1]));
   return payload.exp * 1000 < Date.now(); // token expired if exp < now
 } catch (err) {
   return true; // invalid token
 }
}
