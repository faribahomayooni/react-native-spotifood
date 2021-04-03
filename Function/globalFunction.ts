import axios from 'axios'


const getMenu = (name) => {
  return(  axios.get(`https://menusite.ir/api/store/${name}`, {
        headers: {
            'Authorization':`Bearer eb2993c9e19069fb59a34937fcc483ca`
        }
    }))
}

export  {getMenu}