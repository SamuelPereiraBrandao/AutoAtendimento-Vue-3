var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 22.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 23.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 26.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata Frita Pequena",
        "price": 7.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata Frita Grande",
        "price": 9.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets Pequena",
        "price": 10.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets Grande",
        "price": 14.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 24.89,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 9.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Chá Gelado",
        "price": 6.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 6.59,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água Com Gás",
        "price": 6.99,
        "active": false,
        "quantity": 1
    }
];
 
const SelfSerivceMachine = {
    data(){
        return {
            products: window.products,
            availableCoupons: {
                CUPOMNOVO: 0.5, // 50% de desconto
                DESCONTO30: 0.35, // 35% de desconto
                SAMU2023: 0.2, // 20% de desconto
           
              },
              couponApplied: false, // Propriedade para rastrear se o cupom já foi aplicado
              showAppIndex: true, // Variável para controlar a exibição da div appIndex

        }
    },
    methods:{
        hideAppIndex() {
            this.showAppIndex = false;
            setTimeout(() => {
                location.reload(); // Recarregar a página
              }, 5000);
          },
        total:function(){
            var total = 0;
            this.products.forEach(function(item){
                if(item.active){
                    total += item.price * item.quantity;
                }
            });
            
            return total;

        },
        applyCoupon() {
            // Verificar se o cupom é válido e se ainda não foi aplicado
        
            if (
              !this.couponApplied &&
              this.couponCode &&
              this.availableCoupons[this.couponCode] !== undefined
            ) {
                var total = 0;
                this.products.forEach(function(item){
                    if(item.active){
                        total += item.price * item.quantity;
                    }
                });
              const discountPercentage = this.availableCoupons[this.couponCode];
              this.products.forEach((product) => {
                if (product.active) {
                    productNoDiscount = total;
                    product.price *= 1 - discountPercentage;
                }else {
                         productNoDiscount = total;
                    product.price *= 1 - discountPercentage;
                }
              });
        
              // Marcar o cupom como aplicado
              this.couponApplied = true;
              this.couponCode = "";
              this.productNoDiscountIndex = productNoDiscount;
            }else {
                
            }

          },
          discountedTotal() {
            let total = 0;
            this.products.forEach((item) => {
              if (item.active) {
                total += item.price * item.quantity;
              }
            });
            return total;
          },
    },
    computed: {
        hasActiveProducts() {
            return this.products.some((product) => product.active);
          },
    }
    
};

Vue.createApp(SelfSerivceMachine).mount('#app');
