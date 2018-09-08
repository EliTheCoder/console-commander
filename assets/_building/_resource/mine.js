class Mine extends Building
{
    constructor()
    {
        super({
            name: 'mine',
            type: 'resource'
        });

        // User oriented Money lot.
        let Money = 0;

        // Function for building specific money racking.
        this.startCollecting = function()
        {
            setInterval(function()
            {
                // Append money to the variable.
                Money += 50; // this is out of scope, returning NaN.
                // console.log(Money);
            }, 1000);
        }

        // Collecitng the users money || This will allow a user to
        // have a set amount of money for their buildings... each building will have a cost.
        this.collect = function()
        {
            let CurrentMoney = $('.money').val();
            let DisplayMoney = CurrentMoney + Money;
            $('.money').html(DisplayMoney);
            Money = 0;
        }
    }
}