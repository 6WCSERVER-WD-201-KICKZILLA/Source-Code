<template>
    <div>
        <br>
        
        <h1>Cart</h1>
        <br>
        
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Product Code</th>
                <th>Quantity</th>
                <th colspan="2">Actions</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            </thead>

            <tbody>
                
                <tr v-for="item in items" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>#{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Change</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteItem(item._id)">Remove</button></td>
                    
                    <td>
                        <div v-if="item.name === 103250">
                            Php 2600 
                        </div>
                        <div v-if="item.name === 100102">
                            Php 4500 
                        </div>
                        <div v-if="item.name === 233200">
                            Php 3100 
                        </div>
                        <div v-if="item.name === 101010">
                            Php 2595 
                        </div>
                        <div v-if="item.name === 124412">
                            Php 9500 
                        </div>
                        <div v-if="item.name === 652200">
                            Php 1999 
                        </div>
                        <div v-if="item.name === 235234">
                            Php 1300 
                        </div>
                        <div v-if="item.name === 300011">
                            Php 2300 
                        </div>
                        <div v-if="item.name === 320001">
                            Php 1910 
                        </div>
                        <div v-if="item.name === 213781">
                            Php 7550 
                        </div>
                        <div v-if="item.name === 232554">
                            Php 12000 
                        </div>
                        <div v-if="item.name === 567451">
                            Php 7999 
                        </div>
                    </td>

                    <td>
                        <div v-if="item.name === 103250">
                            Php {{ item.price*2600 }}
                        </div>
                         <div v-if="item.name === 100102">
                            Php {{ item.price*4500 }}
                        </div>
                        <div v-if="item.name === 233200">
                            Php {{ item.price*3100 }}
                        </div>
                        <div v-if="item.name === 101010">
                            Php {{ item.price*2595 }}
                        </div>
                        <div v-if="item.name === 124412">
                            Php {{ item.price*9500 }} 
                        </div>
                        <div v-if="item.name === 652200">
                            Php {{ item.price*1999 }} 
                        </div>
                        <div v-if="item.name === 235234">
                            Php {{ item.price*1300 }} 
                        </div>
                        <div v-if="item.name === 300011">
                            Php {{ item.price*2300 }} 
                        </div>
                        <div v-if="item.name === 320001">
                            Php {{ item.price*1910 }} 
                        </div>
                        <div v-if="item.name === 213781">
                            Php {{ item.price*7550 }} 
                        </div>
                        <div v-if="item.name === 232554">
                            Php {{ item.price*12000 }} 
                        </div>
                        <div v-if="item.name === 567451">
                            Php {{ item.price*7999 }} 
                        </div>
                    </td>
                </tr>
                <div class="total">
                <div style="font-size: 24px;"></div>
            </div>
            </tbody>
        </table>
        

        <form>
            <br><h2>Fill out this Form</h2>
            <label for="name">Fullname</label><br />
			<input type="text" name="name" size="50" placeholder="Lastname, Firstname Middle Initial" required><br /><br />

            <label for="email">Email</label><br />
			<input type="text" name="email" size="50" placeholder="kickzilla20201@email.com" required><br /><br />

            <label for="address">Address</label><br />
			<input type="text" name="address" size="50" placeholder="Street, City, Province" required><br /><br />

            <input type="submit" value="Submit" style="color: #fff; background-color: crimson; border: 1px solid black; border-radius: 5px;"><br /><br />
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
<style scoped>
.btn-primary {
    color: #fff;
    background-color: crimson;
    border-color: black;
}
.btn-primary:hover{
    background-color: rgb(163, 19, 48);
}
.btn-danger {
    color: #fff;
    background-color: crimson;
    border-color: black;
}
.btn-danger:hover {
    background-color: rgb(163, 19, 48);
}
td, tr, th{
    border: 1px solid black;
}
th{
    text-align: center;
}

</style>