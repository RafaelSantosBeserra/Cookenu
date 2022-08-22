export const goToRecipesList = navigate => {
    navigate('/')
}

export const goToLoginPage = navigate => {
    navigate('/login')
}

export const goToSignUpPage = navigate => {
    navigate('/cadastro')
}

export const goToAddRecipes = navigate => {
    navigate('/adicionar-receita')
}

export const goToRecipesDetail = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}