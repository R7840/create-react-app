alert(9);
const dm = document.domain 
const url = 'https://' + dm + '/api-v1/admin/listclients';

const data = {"clienttype":"admin","upline_id":-1,"results":25};

// Function to send POST request
async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      },
      body: JSON.stringify(data), // Convert JavaScript object to JSON string
    });

    // Parse the JSON response
    const jsonResponse = await response.json();
    
    // Log the response
    console.log('Response:', jsonResponse);
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
  }
}

// Call the function to send data
postData(url, data);
