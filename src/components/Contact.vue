<template>
    <div>
        <h1 style="text-align: center;">Contact Us</h1>

        <p style="font-size: 25px;">
        <b>Smart:</b><br/>
        09876543234<br/>
        09112153335<br/>
        09867583902<br/>
        09234273813<br/>
        </p>
        <p style="font-size: 25px;">
        <b>Telephone:</b><br/>
        +63-2-8123-4567<br/>
        +63-1-8435-4123<br/>
        +63-4-5676-1233<br/>
        +63-6-2134-4456<br/>
        </p>
        <p style="font-size: 25px;">
        <b>Email:</b><br/>
        kickzilla@gmail.com<br/>
        </p>
        <p style="font-size: 25px;">
        <b>Others:</b><br/>
        Facebook - Kickzilla 2021<br/>
        Twitter - @kzilla<br/>
        Instagram - @kzilla8021<br/>
        </p>
        
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