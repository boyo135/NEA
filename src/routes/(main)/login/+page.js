/** @type {import('./$types').PageLoad} */
export const load = ({ url }) => {
    let type = url.searchParams.get('type')

    const types = ['login', 'register']
    type = types.includes(type) ? type : 'login'

    return {
        formType: type
    }
}