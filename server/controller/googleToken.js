// Copied from google website
// Not functional or implemented

const { OAuth2Client } = require('google-auth-library')

/**
 * @description Function to decode Google OAuth token
 * @param token: string
 * @returns ticket object
 */
export const getDecodedOAuthJwtGoogle = async token => {

  const CLIENT_ID_GOOGLE = "839890200657-ab7pl0ud5o5a1bpvi69vjjiud8jrrlqt.apps.googleusercontent.com"

  try {
    const client = new OAuth2Client(CLIENT_ID_GOOGLE)

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID_GOOGLE,
    })

    return ticket
  } catch (error) {
    return { status: 500, data: error }
  }
}



const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);