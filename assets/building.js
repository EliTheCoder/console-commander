class Building {
    constructor(object){
        this.name = object.name;
        this.type = object.type;

        // function for being able to create the building
        this.build = function(BuildingLocation){
            $('#' + BuildingLocation).html(this.name);
        }
    }    
}

// function GenerateBuildings(){
//     Turret = new Turret();
//     // resource buildings
//     Mine = new Mine();
//     // offensive buildings
//     Barracks = new Barracks();
//     Airpad = new Airpad();
//     Factory = new Factory();
// }