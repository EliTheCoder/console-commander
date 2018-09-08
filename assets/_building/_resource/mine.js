class Mine extends Building
{
    constructor()
    {
        super({
            name: 'mine',
            type: 'resource'
        });

        this.money = 0;

        // Function for the mine to start collecting; when a mine is built this gets instantly ran.
        // (only time a user should have access to this is when the mine is on field)
        this.startCollecting = function()
        {
            // this is specifically for collecting money...
            setInterval(function()
            {
                // Append money to the variable.
                this.money += 50; // this is out of scope, returning NaN.
                console.log(this.money);
            }, 1000);
        }

        this.collect = function()
        {
            $('.money').html(this.money);
        }
    }
}