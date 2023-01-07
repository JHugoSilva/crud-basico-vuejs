<template>
    <div>
        <router-link class="btn btn-primary float-right" to="/">Voltar</router-link>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Edit Record</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" name="name" v-model="employee.name">
                        </div>
                        <div class="form-group">
                            <label for="position">Position</label>
                            <input type="text" class="form-control" name="position" v-model="employee.position">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" name="email" v-model="employee.email">
                        </div>
                        <div class="form-group mt-2">
                            <button  @click.prevent="update" class="btn btn-primary">Edit</button>
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
            employee: {}
        }
    },
    mounted() {
        this.getEmployee()
    },
    methods: {
         getEmployee() {
            axios.get('getEmployee/'+this.$route.params.id).then((response)=>{
                this.employee = response.data
            }).catch((errors)=>{
                console.log(errors)
            })
        },
        update() {
            axios.put('update/'+this.$route.params.id, this.employee).then((response)=>{
                console.log(response)
                this.$router.push('/')
                this.$toaster.success('Your toaster success message.')
            }).catch((errors) => {
                console.log(errors)
            })
        }
    }
}
</script>
