// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import { TOKEN_SAMUCA } from 'react-native-dotenv'

// define the api
const api = create({
  baseURL: 'http://api.samuca.com',
});

// api.addRequestTransform(request => {
//   request.headers['X-Request-Transform'] = 'Changing Stuff!'
//   request.params['page'] = 42
//   delete request.params.secure
//   request.url = request.url.replace(/\/v1\//, '/v2/')
//   if (request.data.password && request.data.password === 'password') {
//     request.data.username = `${request.data.username} is secure!`
//   }
// })

api.addAsyncRequestTransform(request => async () => {
    console.log("Passando token direto via header");
    request.headers['token'] = TOKEN_SAMUCA;
});



export default api;

