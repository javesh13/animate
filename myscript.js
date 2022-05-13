function getcordinates(c){
    // let c = this.getBoundingClientRect();

    let x = c.left +  c.width/2;
    let y = c.top + c.height/2;
    console.log(x, y);


}




$(document).ready(function(){

    let i = 0;

    $("body").on("mousemove", function(event){

        let c = $("#obj")[0].getBoundingClientRect();
        let x = c.left +  c.width/2, y = c.top + c.height/2;

        
        let mx = event.clientX, my = event.clientY;
        
        $("#obj2").css('left', mx-25);
        $("#obj2").css('top', my-25);


        let dbc = Math.pow(mx - x, 2) + Math.pow(my - y, 2);
        
        if(dbc < 2500 ){
            // intersecting
            console.log(dbc, "Intersecting", i++);

            //now i have two points => a line 
            // now i got to decide toward which direction i have to move this div

            //maintain a distance of 20 px;

            let nx = x, ny = y;

            //eqn of line 
            //y = m*x_new - m*x + y;
            let slope = (my - y)/(mx - x);
            


            if( mx > x){//pointer is towards left
                nx = -100;
            }else{//pointer is towards right;
                nx = 100;
            }

            ny = slope * (nx - x) ; 

            console.log(nx, ny, x, y);

            $("#obj").animate({
                // left: "+="+String(nx)+"px",
                // top: "+="+String(ny)+"px"
                left: "-=100px",
                top: "+=100px"


            }, "slow");



        }else{
            
        }


    });

    // $("#obj").click(getcordinates);

});

