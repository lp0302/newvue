import axios from 'axios'
//get里的url是传过来的，axios接收
export const get = ({
   url,
   params
}) => {
    return axios({
        url,
        params
    })
    .then((result) => {
        return result.data
    })
    .catch((err) => {
        return err.message
    })
}