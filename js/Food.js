class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed = null;
        this.milkImage = loadImage("images/milk.png");
        this.milkImage.depth = 0;

    }

    getFoodStock() {
        var foodSRef = database.ref('/Food')
        foodSRef.on("value", (data) => {
            foodS = data.val();
        });
    }

    getLastFed() {
       // var lastFedRef = database.ref()
    }

    updateFoodStock(x) {
        database.ref('/').update({
            Food:x
        })
        this.foodStock = x;
    }

    deductFoodStock() {
        if (foodS > 0) {
            foodS--;
        }
        food.updateFoodStock(foodS);
        dog.addImage(happyDogImg);
    }

    addFood() {
        foodS++;
        food.updateFoodStock(foodS);
    }

    display() {
        var x = 520;
        var y = 100;
        

        for(var i = 0; i < this.foodStock; i++) {
            if(i%10 === 0){
                y = y + 50;
                x = 520
            }
            
            imageMode(CENTER)
            image(this.milkImage, x, y, 50, 50)
            x += 30;
        }
    }
}