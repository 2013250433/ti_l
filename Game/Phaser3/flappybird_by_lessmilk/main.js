var mainState = {
    preload: function () {
        game.load.image('bird','assets/bird.png');
    },
    create: function() {
        game.stage.backgroundColor = '#71c5cf';
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.bird = game.add.sprite(100,245,'bird');
        
        game.physics.arcade.enable(this.bird);
        
        this.bird.body.gravity.y = 1000;
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
    },
    
    update: function() {
        if(this.bird.y<0 || this.bird.y > 490)
            this.restartGame();
    },
    
    jump: function() {
        this.bird.body.velocity.y = -350;
    },
    
    restartGame: function() {
        game.state.start('main')
    }
};

var game = new Phaser.Game(400, 490);

game.state.add('main',mainState);

game.state.start('main');