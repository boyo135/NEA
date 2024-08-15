// #region Actions
export const actions = {
    // #region Default
    default: async ({ request }) => {
        const FormInputs = Object.fromEntries(await request.formData())

        return {
            status: 200,
            data: {
                message: "form submission successful",
                formInputs: FormInputs
            }
        }
    }
    // #endregion
}
// #endregion