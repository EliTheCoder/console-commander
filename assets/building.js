class Building
{
    constructor(object)
    {
        this.name = object.name;
        this.type = object.type;

        // function for being able to create the building
        // This will need to know which player has applied the build in order to acquire where the building has gone
        // (change the background of the square to the corresponding colour of the player)
        this.build = function(BuildingLocation)
        {
            // Put the building on a select location
            $('#' + BuildingLocation).html('<span class="' + this.name + '"></span>');
            // add the player to the TD of the section that the player is owning.
            $('.' + this.name).closest('td').addClass('player1');
        }
    }
}