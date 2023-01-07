<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" name="name" v-model="formData.name">
                            <p class="text-danger" v-text="errors.name"></p>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="text" class="form-control" name="email" v-model="formData.email">
                            <p class="text-danger" v-text="errors.email"></p>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" v-model="formData.password">
                            <p class="text-danger" v-text="errors.password"></p>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Confirm Password</label>
                            <input type="password" class="form-control" name="password_confirmation" v-model="formData.password_confirmation">
                            <p class="text-danger" v-text="errors.password_confirmation"></p>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6 form-group">
                                <button class="btn btn-primary" @click.prevent="registerUser">Register</button>
                            </div>
                            <div class="col-md-6 text-right">
                                <router-link to="/login">Already have an account!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: {}
        }
    },
    methods: {
        registerUser () {
            axios.post('api/register', this.formData).then((response)=>{
                console.log(response.data)

                this.formData.name = this.formData.email = this.formData.password = this.formData.password_confirmation = ''

                this.errors = {}

                this.$router.push('/')

                this.$toaster.success('Account created successfully, now you can login!')
            }).catch((errors)=>{
                this.errors = errors.response.data.errors
                console.log(errors.response.data.errors)
            })
        }
    }
}
</script>
