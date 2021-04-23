const getUser = async() => {
    let cursos = await fetch('https://rest-courses-api.herokuapp.com/api/v1/users/me')
    let cursosJson = await cursos.json()
    return cursosJson
}



export {
    getUser
};