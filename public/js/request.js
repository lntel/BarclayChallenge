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

const isSignedIn = () => {
    console.log(document.cookie)
}

const setCookie = (name,value,days) => {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
const eraseCookie = (name) => {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}