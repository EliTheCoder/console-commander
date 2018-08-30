class Unit {
    constructor(unit){
        this.name = unit.name;
        this.building = unit.building;

        this.spawn = function(SpawnLocation){
            $('#' + SpawnLocation).html(this.name);
        }
    }
}