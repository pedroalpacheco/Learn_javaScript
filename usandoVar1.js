    {
        {
            {
                {
                    var sera = 'Sera???'
                }
            }
        }
    }

    console.log(sera)


//Var não consegue ser acessada fora da função
    function teste(){
        var local = 123
    }

    teste()
    console.log(teste.local)