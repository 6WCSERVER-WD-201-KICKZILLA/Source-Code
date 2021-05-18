<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 style="text-align: center;">Add Product</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Product Code</label>
                        <input type="text" class="form-control" v-model="item.name" placeholder="000000"/>
                    </div><br>
                    <div class="form-group">
                        <label>Quantity</label>
                        <input type="text" class="form-control" v-model="item.price"/>
                    </div><br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item" style=""/>
                    </div>
                </form>    
            </div>
        </div>

        <div class="cate1">
            <h1>MEN</h1>
        </div>
        <div class="shoe1">
            <img src="men1.png">
        </div>
        <div class="shoe2">
            <img src="men2.png">
        </div>
        <div class="shoe3">
            <img src="men3.png">
        </div>
        
        <p class="code1">#103250</p>
        <p class="code2">#100102</p>
        <p class="code3">#233200</p>

        <div class="cate2">
            <h1>WOMEN</h1>
        </div>
        <div class="shoe4">
            <img src="women1.png">
        </div>
        <div class="shoe5">
            <img src="women2.png">
        </div>
        <div class="shoe6">
            <img src="women3.png">
        </div>

        <p class="code4">#101010</p>
        <p class="code5">#124412</p>
        <p class="code6">#652200</p>

        <div class="cate3">
            <h1>KIDS</h1>
        </div>
        <div class="shoe7">
            <img src="kids1.png">
        </div>
        <div class="shoe8">
            <img src="kids2.png">
        </div>
        <div class="shoe9">
            <img src="kids3.png">
        </div>

        <p class="code7">#235234</p>
        <p class="code8">#300011</p>
        <p class="code9">#320001</p>

        <div class="cate4">
            <h1>SPORTS</h1>
        </div>
        <div class="shoe10">
            <img src="sports1.png">
        </div>
        <div class="shoe11">
            <img src="sports2.png">
        </div>
        <div class="shoe12">
            <img src="sports3.png">
        </div>
        
        <p class="code10">#213781</p>
        <p class="code11">#232554</p>
        <p class="code12">#567451</p>

        <div class="bottom">
        </div>
        <p class="textbot">© Copyright 2021 WD-201 Kickzilla Company</p>
        <h2 class="contact">Contact Us</h2>
        <p class="con">Facebook<br>Instagram<br>Twitter</p>
    </div>

</template>

<script>
export default {
  Components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>
<style scoped>
.btn-primary:hover{
    background-color: rgb(116, 25, 41);
}
.btn-primary{
    background-color: crimson;
    border-color: black;
}
.container{
    width: 40%;
    margin-right: 30%;
}
img{
    width: 50%;
    height: 300px;
    border: 0.5px solid black;
}
.cate1{
    position: absolute;
    left: 46%;
    top: 65%;
}
.cate2{
    position: absolute;
    left: 44%;
    top: 135%;
}
.cate3{
    position: absolute;
    left: 46.5%;
    top: 205%;
}
.cate4{
    position: absolute;
    left: 45%;
    top: 275%;
}
.shoe1{
    position: absolute;
    left: 20%;
    top: 75%;
}
.shoe2{
    position: absolute;
    left: 40%;
    top: 75%;
}
.shoe3{
    position: absolute;
    left: 60%;
    top: 75%;
}
.code1{
    position: absolute;
    left: 25%;
    top: 125%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code2{
    position: absolute;
    left: 45%;
    top: 125%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code3{
    position: absolute;
    left: 65%;
    top: 125%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.shoe4{
    position: absolute;
    left: 20%;
    top: 145%;
}
.shoe5{
    position: absolute;
    left: 40%;
    top: 145%;
}
.shoe6{
    position: absolute;
    left: 60%;
    top: 145%;
}
.code4{
    position: absolute;
    left: 25%;
    top: 195%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code5{
    position: absolute;
    left: 45%;
    top: 195%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code6{
    position: absolute;
    left: 65%;
    top: 195%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.shoe7{
    position: absolute;
    left: 20%;
    top: 215%;
}
.shoe8{
    position: absolute;
    left: 40%;
    top: 215%;
}
.shoe9{
    position: absolute;
    left: 60%;
    top: 215%;
}
.code7{
    position: absolute;
    left: 25%;
    top: 265%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code8{
    position: absolute;
    left: 45%;
    top: 265%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code9{
    position: absolute;
    left: 65%;
    top: 265%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.shoe10{
    position: absolute;
    left: 20%;
    top: 285%;
}
.shoe11{
    position: absolute;
    left: 40%;
    top: 285%;
}
.shoe12{
    position: absolute;
    left: 60%;
    top: 285%;
}
.code10{
    position: absolute;
    left: 25%;
    top: 335%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code11{
    position: absolute;
    left: 45%;
    top: 335%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.code12{
    position: absolute;
    left: 65%;
    top: 335%;
    font-size: 25px;
    background-color: crimson;
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 10px;
    color:white;
}
.bottom{
    background-color: rgb(22, 22, 22);
    height: 200px;
    width: 100%;
    position: absolute;
    right: 0%;
    top: 350%;
}
.textbot{
    color: white;
    position: absolute;
    top: 375%;
    right: 75%;
    font-size: 15px;
}
.contact{
    position: absolute;
    top: 352%;
    right: 85.5%; 
    color: white;
}
.con{
    top: 358%;
    right: 91.5%; 
    color: white;
    position: absolute;
}
</style>