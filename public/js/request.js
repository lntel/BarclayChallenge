const Request = async (endpoint, obj) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/api/v1/${endpoint}`, {
            method: obj.type,
            headers: {
                'Content-Type': 'application/json'
            },
            body: obj.data ? JSON.stringify(obj.data) : null
        });
    
        if(response.ok) {
            resolve({
                data: await response.json(),
                status: response.status
            })
        } else {
            const result = await response.json();
            const message = result.message;

            if(message == 'You must be signed in to access this page') {
                await Request(`http://localhost:3000/api/v1/user/token`, {
                    type: 'POST'
                });
            }

            reject(message);
        }
    });
}