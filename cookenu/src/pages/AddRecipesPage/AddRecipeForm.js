import React, { useState } from "react";
import { AddRecipeFormContainer, InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { Button, CircularProgress, TextField } from "@mui/material";
import { createRecipe } from "../../services/recipe";

const AddRecipeForm = () => {
    const { form, onChange, clear } = useForm({title: "", description: "", image: ""})
    const [isLoading, setIsloading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        // console.log(form)
        createRecipe(form, clear, setIsloading)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                        <TextField 
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={'Description'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                        <TextField 
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={'Image'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        {isLoading ? <CircularProgress color="inherit" /> : <>Adiocionar redeita</>}
                    </Button>
                </InputsContainer>
            </AddRecipeFormContainer>
        </form>
    )
}

export default AddRecipeForm;