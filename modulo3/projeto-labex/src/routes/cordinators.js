export const goToListTripPage = (navigate) =>{
    navigate("/trips/list")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}


export const goBack = (navigate) =>{
    navigate(-1)
}

export const goToApplicationPage = (navigate) => {
    navigate("/trips/application")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToAdminHome = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}