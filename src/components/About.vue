<template>
    <div>
        <h1 style="text-align: center;">About</h1>

        <p style="text-align: center; font-size: 25px;">
            The global footwear market has been growing by leaps and bounds over the past few decades, thanks to the drastic rise in consumer spending patterns and a change in consumer perspective that puts style on the same footing as comfort. Standing on the verge of a retail revolution in a fast-changing retail landscape, major shoe companies are experiencing phenomenal growth in revenues. The global footwear industry is unlikely to slow down anytime soon, with the global demand for footwear growing at an impressive rate.</p>
        <p style="text-align: center; font-size: 25px">
            With its roots in Germany, Kickzilla has become one of the top shoe brands in the world. The company produces more than 900 million sports and lifestyle products with independent manufacturing partners around the world. It generated sales of approximately $25 billion in 2019, and these staggering numbers are a testament to what a large and multifaceted company Kickzilla has become. With more than 1000 stores across the world, the shoe brand has risen to extreme heights of success. Kickzilla has not only become a symbol of sports fashion but has also presented a collective image of street, pop-culture, music, sports, and other fashion statements, defining its existence through its remarkable communication strategies.
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