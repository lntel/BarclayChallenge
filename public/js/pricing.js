const services = document.querySelector('#services');

const col1 = document.querySelector('#col1');
const col2 = document.querySelector('#col2');

console.log(col1, col2)

const getServices = async () => {
    
    try {
        const response = await Request('service', {
            type: 'GET'
        });

        if(response.status == 200) {

            const goal = Math.round(response.data.length / 2);

            if(response.data.length) {
                response.data.map((service, i) => {
                    const e = document.createElement('div');

                    e.className = 'row';

                    e.innerHTML = `
                    <div class="row">
                        <div class="col h3" style="border-bottom-style: solid; border-bottom-color: #05A1DC;">
                        ${service.name}
                        </div>
                        <div class="col text-end h5">
                        £${service.cost}.00
                        </div>
                    </div>
                    `;

                    if(i < goal) {
                        col1.appendChild(e)
                    } else {
                        col2.appendChild(e)
                    }
                })
            }
        } else {
            // dunno
        }
    }
    catch(err) {
        console.error(err);
    }
}

getServices();